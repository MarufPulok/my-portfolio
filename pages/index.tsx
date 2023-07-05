import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <Head>
        <title>My Portfolio</title>
      </Head>
      <Header />
      {/* Me */}
      <section id="me" className="snap-start">
        <Me />
      </section>
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects/>
      </section>
      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <Contact/>
      </section>
    </div>
  );
}
