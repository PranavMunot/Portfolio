import { forwardRef } from "react";
import { skills } from "../model/skills";

const Skills = forwardRef<HTMLDivElement>(function (_, ref): JSX.Element {
  return (
    <div ref={ref}>
      <p className="section-header text-3xl text-secondary">Skills & Tools</p>
      <div className="grid grid-cols-4 justify-items-center gap-10 my-5 mx-5">
        {skills.length &&
          skills.map((skill) => (
            <img key={skill?.name} src={skill?.localURL} alt={skill?.alt} />
          ))}
      </div>
    </div>
  );
});

export default Skills;
