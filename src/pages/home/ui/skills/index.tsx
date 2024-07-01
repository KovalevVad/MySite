import {html, css, js, ts, react, redux, gitHub, figma } from "src/app/image"
import { Title } from "src/shared/ui/title"

import "./index.css"

interface props {
  name: string,
  img: string,
}

const listCard = [
  {
    name: "HTML5",
    img: html,
  },
  {
    name: "CSS3",
    img: css,
  },
  {
    name: "JavaScript",
    img: js,
  },
  {
    name: "TypeScript",
    img: ts,
  },
  {
    name: "React",
    img: react,
  },
  {
    name: "Redux",
    img: redux,
  },
  {
    name: "GitHub",
    img: gitHub,
  },
  {
    name: "Figma",
    img: figma,
  },
]

const Card = ({
  name,
  img,
}: props) => {

  return  (
    <div className="skills__wrapper-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export const Skills = () => {

  return (
    <div className="skills">
      <Title size="large">Skills</Title>
      <div className="skills__wrapper">
        {listCard.map((item) => {
          return <Card name={item.name} img={item.img} />
        })}
      </div>
    </div>
  )
}