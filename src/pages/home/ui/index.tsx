import { AboutMe } from "./aboutMe";
import { Initial } from "./initial";
import { Skills } from "./skills";
import { Projects } from "./projects";

import { telegramm, github } from "src/app/image";

import "./index.css";

export const HomePage = () => {
  return (
    <div className="wrapper">
      <Initial />
      <AboutMe />
      <Skills />
      <Projects />
      <div className="wrapper__contact">
        <div className="wrapper__contact-telergamm">
          <img src={telegramm} alt="telegramm" />
          <span>Telegramm</span>
          <a href="https://t.me/Kovalev_oV" target="_blank"></a>
        </div>
        <div className="wrapper__contact-gitHub">
          <img src={github} alt="gitHub" />
          <span>GitHub</span>
          <a href="https://github.com/KovalevVad" target="_blank"></a>
        </div>
      </div>
    </div>
  );
};
