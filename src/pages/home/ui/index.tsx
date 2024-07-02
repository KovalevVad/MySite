import { AboutMe } from "./aboutMe";

import { Initial } from "./initial";
import { MobileInitial } from "./initial/mobile";

import { Skills } from "./skills";
import { Projects } from "./projects";

import { useScreenWidth }  from "src/shared/hooks/useScreenWidth";

import { telegramm, github } from "src/app/image";

import { ScreenWidth } from "src/shared/constant/const";

import "./index.css";

export const HomePage = () => {

  const isMobile = useScreenWidth(ScreenWidth.mobile);

  return (
    <div className="wrapper">
      {isMobile ? <MobileInitial/> : <Initial />}
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
