import "./App.css";
import bgImage from "./assets/IMG_6963.webp";
import profile from "./assets/profile.png";
import About from "./Components/About.js";
import ContactForm from "./Components/ContactForm.tsx";
import Experience from "./Components/Experience.tsx";
import Projects from "./Components/Projects.tsx";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCircleChevronDown } from "react-icons/fa6";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";

// social

import Skills from "./Components/Skills.tsx";
import { RefObject, useRef } from "react";

type REFMAP = {
  about: RefObject<HTMLDivElement | null>;
  exp: RefObject<HTMLDivElement | null>;
  project: RefObject<HTMLDivElement | null>;
  skill: RefObject<HTMLDivElement | null>;
  connect: RefObject<HTMLDivElement | null>;
};

function App() {
  const abtRef = useRef<HTMLDivElement | null>(null);
  const expRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const skillRef = useRef<HTMLDivElement | null>(null);
  const connectRef = useRef<HTMLDivElement | null>(null);

  const slideTo = (refKey: string): void => {
    const refMap: REFMAP = {
      about: abtRef,
      exp: expRef,
      project: projectRef,
      skill: skillRef,
      connect: connectRef,
    };

    refMap[refKey as keyof REFMAP]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="banner m-0 sm:m-4 h-[40dvh] sm:h-[55dvh] ">
        <img
          src={bgImage}
          alt=""
          className="w-full h-full object-cover rounded-none sm:rounded-xl "
        />
      </div>
      <div className="container px-4 mx-auto flex flex-col gap-5 ">
        <div className="home h-[60svh] sm:h-[45svh] relative flex flex-col lg:flex-row justify-center items-start gap-5">
          <img
            src={profile}
            alt=""
            className="rounded-full w-48 lg:w-72 aspect-square -mt-24 lg:-mt-40 bottom-1/2 object-cover"
          />

          <div className="info flex flex-col ">
            <h1 className="text-primary text-6xl">Pranav Munot</h1>
            <p className="text-secondary text-xl">
              UI Developer based in Bharat.
            </p>
          </div>
          <div className="logo flex flex-1 items-start justify-end gap-7 flex-wrap">
            <AiFillInstagram
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.instagram.com/__pranavmunot__",
                  "_blank"
                );
              }}
              className="cursor-pointer text-primary text-3xl "
            />
            <AiFillLinkedin
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/pranavmunot/",
                  "_blank"
                );
              }}
              className="cursor-pointer text-primary text-3xl "
            />
            <IoLogoWhatsapp
              onClick={(e) => {
                e.preventDefault();
                window.open("https://wa.me/918669171507", "_blank");
              }}
              className="cursor-pointer text-primary text-3xl "
            />
            <AiOutlineGithub
              onClick={(e) => {
                e.preventDefault();
                window.open("https://github.com/PranavMunot", "_blank");
              }}
              className="cursor-pointer text-primary text-3xl "
            />
          </div>
          <div className="absolute text-primary w-full animate-bounce bottom-5 sm:bottom-16 flex justify-center">
            <FaCircleChevronDown
              onClick={() => {
                slideTo("about");
              }}
              className="cursor-pointer text-xl text-center"
            />
          </div>
        </div>
        {/* about */}
        <About ref={abtRef} slideTo={slideTo} />

        {/* EXP - verticle timeline */}
        <Experience ref={expRef} />

        {/* skills */}
        <Skills ref={skillRef} />

        {/* projects */}
        <Projects ref={projectRef} />

        {/* contact form */}
        <ContactForm ref={connectRef} />
      </div>
      {/* Footer */}
      <div className="footer  bg-primary text-warm pt-12 pb-6">
        <h1 className="text-5xl text-center mb-12">Pranav Munot</h1>

        <div className="mx-4 md:mx-32 flex flex-col gap-2 sm:flex-row justify-between ">
          <div className="flex flex-2 justify-start gap-2 sm:justify-evenly ">
            {/* nav */}
            <div className="nav flex-1">
              <p className="text-2xl mb-2">Site Map</p>

              <ul className="">
                <li
                  onClick={() => {
                    slideTo("about");
                  }}
                  className="cursor-pointer nav-item"
                >
                  About Pranav
                </li>
                <li
                  onClick={() => {
                    slideTo("exp");
                  }}
                  className="cursor-pointer nav-item"
                >
                  Experience
                </li>
                <li
                  onClick={() => {
                    slideTo("skill");
                  }}
                  className="cursor-pointer nav-item"
                >
                  Skills
                </li>
                <li
                  onClick={() => {
                    slideTo("project");
                  }}
                  className="cursor-pointer nav-item"
                >
                  Projects
                </li>
                <li
                  onClick={() => {
                    slideTo("connect");
                  }}
                  className="cursor-pointer nav-item"
                >
                  Connect
                </li>
              </ul>
            </div>
            {/* social */}

            <div className="nav flex-1">
              <p className="text-2xl mb-2">Social</p>

              <ul>
                <li
                  onClick={() => {
                    window.open("mailto:pranavmunot09@gmail.com", "_blank");
                  }}
                  className="nav-item cursor-pointer"
                >
                  Gmail
                </li>
                <li
                  onClick={() => {
                    window.open(
                      "https://www.instagram.com/__pranavmunot__",
                      "_blank"
                    );
                  }}
                  className="nav-item cursor-pointer"
                >
                  Instagram
                </li>
                <li
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/in/pranavmunot/",
                      "_blank"
                    );
                  }}
                  className="nav-item cursor-pointer"
                >
                  LinkedIn
                </li>
                <li
                  onClick={() => {
                    window.open("https://github.com/PranavMunot", "_blank");
                  }}
                  className="nav-item cursor-pointer"
                >
                  GitHub
                </li>
                <li
                  onClick={() => {
                    window.open("https://wa.me/918669171507", "_blank");
                  }}
                  className="nav-item cursor-pointer"
                >
                  WhatsApp
                </li>
              </ul>
            </div>
          </div>
          {/* address */}
          <div className="address flex-1 flex-col  gap-2">
            <p className="text-2xl mb-2">Address</p>
            <div className="flex gap-1 items-center">
              <IoLocationSharp />
              <p>Pune, MH, Bharat </p>
            </div>
          </div>
        </div>
        <p className="text-center py-2 mt-5">Made by Pranav &copy; 2025</p>
      </div>
    </>
  );
}

export default App;
