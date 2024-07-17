import { useState } from "react";

import { Title } from "src/shared/ui/title";
import { Button } from "src/shared/ui/button";
import { listLayout, listReact } from "./listProjects";

import { github } from "src/app/image";

import { ScreenWidth } from "src/shared/constant/const";
import { useScreenWidth } from "src/shared/hooks/useScreenWidth";

import "./index.css";

interface cardProps {
  img: string;
  name: string;
  description: string;
  linkGit?: string;
  linkSite?: string;
}

const Project = ({
  img,
  name,
  description,
  linkGit,
  linkSite,
}: cardProps) => {
  const isMobile = useScreenWidth(ScreenWidth.mobile);

  return (
    <div className="project">
      <img src={img} alt="image" />
      <div className="project__info">
        <Title size="medium">{name}</Title>
        <p className="project__info-description">{description}</p>
        <span className="project__info-line"></span>
        <div className="project__info-buttons">
          <Button
            linkSite={linkSite}
            sizeText={isMobile ? "14" : "16"}
            type="full"
          >
            Посмотреть вживую
          </Button>
          <Button
            linkGit={linkGit}
            sizeText={isMobile ? "14" : "16"}
            type="incomplete"
          >
            <img src={github} alt="github" />
            <span>Посмотреть код</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [isActive, setIsActive] = useState(true);
  const isMobile = useScreenWidth(ScreenWidth.mobile);

  const handleClick = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="projects" id="projects">
      <Title size={isMobile ? "medium" : "large"}>Проекты</Title>
      <div className="projects__buttons">
        <Button
          onClick={handleClick}
          type={isActive ? "full" : "incomplete"}
          sizeText={isMobile ? "14" : "24"}
        >
          Вёрстка&lt;/&gt;
        </Button>
        <Button
          onClick={handleClick}
          type={isActive ? "incomplete" : "full"}
          sizeText={isMobile ? "14" : "24"}
        >
          React/JS
        </Button>
      </div>
      <div className="projects__container">
        {isActive
          ? listLayout.map((item) => {
              return (
                <Project
                  key={item.id}
                  linkSite={item.linkSite}
                  linkGit={item.linkGit}
                  img={item.img}
                  name={item.name}
                  description={item.description}
                />
              );
            })
          : listReact.map((item) => {
              return (
                <Project
                  key={item.id}
                  linkSite={item.linkSite}
                  linkGit={item.linkGit}
                  img={item.img}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
      </div>
    </div>
  );
};
