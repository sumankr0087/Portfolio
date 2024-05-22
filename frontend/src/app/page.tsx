import Introduction from "./components/Introduction";
import TechStack from "./tech-stack/page";
import Project from "./project/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="w-screen">
      <Introduction />
      <TechStack />
      <Project />
      <Contact />
    </div>
  );
}
