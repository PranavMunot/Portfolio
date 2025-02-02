import { forwardRef } from "react";
import ProjectModel from "../model/projects";

const Projects = forwardRef<HTMLDivElement>(function (_, ref): JSX.Element {
  return (
    <div ref={ref} className="projects">
      <h4 className="section-header text-3xl text-secondary">Projects</h4>
      {ProjectModel.map((project, idx) => (
        <div
          key={project?.projectName}
          className="flex align-top mb-5 justify-center"
        >
          <div className="flex-1">
            <p className="text-[72px] text-warm mx-4 sm:text-[128px]">
              {Math.floor((idx + 1) / 10) < 1 ? "0" : null}
              {idx + 1}
            </p>
          </div>
          <div className="flex-3">
            <h4 className="text-3xl text-secondary">{project.projectName}</h4>
            <div className="flex gap-2 mt-2 flex-wrap">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className=" px-3 py-1  rounded-3xl text-xs bg-secondary text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="my-5">
              {project.description?.map((dsc) => (
                <p
                  key={dsc}
                  className="text-[0.9rem] indent-[1.3rem] pb-1"
                >{`\t ${dsc}`}</p>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = project.gitURL;
                }}
                className=" text-primary  rounded px-8 py-3 border-2 border-primary hover:bg-secondary/35"
              >
                Github
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = project.liveURL;
                }}
                className="bg-primary text-white rounded px-8 py-3 border border-primary hover:bg-secondary"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Projects;
