import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Me from "@/components/Me";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import demo from "../public/assets/demo.jpg"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
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
      <Link href='#me'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image className="h-10 w-10 rounded-full grayscale hover:grayscale-0 cursor-pointer object-cover" src={demo} alt=""/>
          </div>
        </footer>
      </Link>
    </div>
  );
}
