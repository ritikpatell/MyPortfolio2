import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen relative w-full overflow-x-clip selection:bg-white/30 selection:text-white">
      {/* Container for Scrollytelling and Overlay */}
      <div className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </div>

      {/* Projects grid placed after 500vh container */}
      <Projects />
    </main>
  );
}
