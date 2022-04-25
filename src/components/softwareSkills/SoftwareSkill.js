import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { Icon } from '@iconify/react';

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <Icon icon={skills.classname} />
                {/* <i className={skills.fontAwesomeClassname}></i> */}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
