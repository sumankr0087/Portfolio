import Header from "./components/Header";
import Introduction from "./components/Introduction";
import TechStack from "./tech-stack/page";
import Project from "./project/page";
import Contact from "./contact/page";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="border-b border-gray-500">
      <Header />
      </div>
      <Introduction />
      <TechStack />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
