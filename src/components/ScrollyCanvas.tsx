"use client";

import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 75;

// Helper to format frame numbers
const currentFrame = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.066s.webp`;

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress (0-1) to frame index (0-74)
  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new window.Image();
      img.src = currentFrame(i);
      if (i === 0) {
        img.onload = () => setFirstFrameLoaded(true);
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const renderFrame = (index: number) => {
    if (!canvasRef.current || !images[index] || !images[index].complete) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[index];

    // Resize canvas to match window size for high DPI
    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // object-fit: cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;

    let renderWidth = canvas.width;
    let renderHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - renderHeight) / 2;
    } else {
      renderWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - renderWidth) / 2;
    }

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  // Render initial frame when images load
  useEffect(() => {
    if (firstFrameLoaded) {
      renderFrame(0);
    }
  }, [firstFrameLoaded]);

  // Render on window resize to fix aspect ratio changes
  useEffect(() => {
    const handleResize = () => {
      renderFrame(Math.round(currentIndex.get()));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [firstFrameLoaded, currentIndex]);

  // Update canvas when framer motion value changes
  useMotionValueEvent(currentIndex, "change", (latest) => {
    renderFrame(Math.round(latest));
  });

  return (
    <div ref={containerRef} className="h-[500vh] w-full relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
        <canvas
          ref={canvasRef}
          className="h-full w-full block object-cover"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
