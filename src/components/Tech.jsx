import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <h1 className={`${styles.sectionHeadText} text-center`}>Tech</h1>
      <div className="flex flex-row flex-wrap justify-center sm:pe-24 pe-20 gap-10 mt-12">
        {technologies.map((technology) => (
          <div className="w-28 h-28  border-green-800" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
