import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement, { slideTo: CallableFunction }>(
  function ({ slideTo }, ref): JSX.Element {
    return (
      <div id="about" ref={ref} className=" my-5 flex min-h-svh items-center">
        <div className=" lg:flex-2">
          <h4 className="text-3xl text-secondary">Hello</h4>
          <p className="text-lg mt-8">
            Welcome to Pranav's corner of the web! I’m a UI developer with a
            knack for crafting intuitive, user-centered interfaces that bring
            ideas to life. Think of me as the bridge between design dreams and
            functional perfection. Armed with HTML, CSS, JavaScript (and maybe a
            cup of chai), I bring energy, creativity, and a dash of fun to every
            project I touch. When I’m not geeking out over the latest UI trends
            or obsessing over pixel spacing, you’ll probably find me out of
            internet, mostly praising & photographing The Nature .
          </p>
          <p className="text-lg my-4">
            Whether you’re here to collaborate, learn more about my work, or
            just say hello – you’re in the right place. Let’s build something
            amazing together!
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => {
                slideTo("connect");
              }}
              className="bg-primary text-white rounded px-8 py-3 border border-primary hover:bg-secondary"
            >
              Let's Connect
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open("https://gray-nixie-58.tiiny.site", "_blank");
              }}
              className="bg-primary text-white rounded px-8 py-3 border border-primary hover:bg-secondary"
            >
              Resume
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
    );
  }
);

export default About;
