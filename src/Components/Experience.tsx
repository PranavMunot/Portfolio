import { forwardRef } from "react";
import ExperienceModel from "../model/Experience";

const Experience = forwardRef<HTMLDivElement>((_, ref): JSX.Element => {
  return (
    <div ref={ref} className="experience">
      <h4 className="section-header text-3xl text-secondary">Experience</h4>
      {ExperienceModel.map((exp, idx) => (
        <div key={exp.startDate} className="flex gap-5">
          <div className=" timeline max-h-full border-l border-warm"></div>
          <div className="project-data relative">
            {idx === 0 ? (
              <span className="block w-4 h-4 absolute top-3 -left-7 rounded-lg bg-warm/90 animate-ping" />
            ) : null}
            <span className="block w-4 h-4 absolute top-3 -left-7 rounded-lg bg-warm "></span>
            <div className="flex flex-col flex-1 gap-2">
              <h4 className="text-3xl text-secondary">{exp.designation}</h4>
              <div className="flex flex-col items-start gap-1 ">
                <p>{exp.companyName}</p>
                {exp.isCurrent ? (
                  <span className=" px-3 py-1 rounded-3xl text-xs bg-secondary text-white">
                    {exp.startDate} - Current
                  </span>
                ) : (
                  <span className=" px-3 py-1 rounded-3xl text-xs border-secondary border text-secondary ">
                    {exp.startDate} - {exp.endDate}
                  </span>
                )}
              </div>
              <div className="list mb-5 ml-2">
                <ul>
                  {exp?.description?.map((dsc) => (
                    <li key={dsc} className="flex items-baseline gap-1">
                      <div className="w-0 h-0 border-l-warm border-b-[transparent] border-t-[transparent] border-b-[5px] border-l-[8px] border-t-[5px]"></div>
                      <p className="text-base">{dsc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default Experience;
