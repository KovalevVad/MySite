import { Title } from "src/shared/ui/title"

import { listCard } from "./listSkill"

import { useScreenWidth } from "src/shared/hooks/useScreenWidth"
import { ScreenWidth } from "src/shared/constant/const"

import "./index.css"

interface props {
  name: string,
  img: string,
  colorBorder?: string,
}

const Card = ({
  name,
  img,
  colorBorder,
}: props) => {

  return  (
    <div className="skills__wrapper-card" style={{borderColor: colorBorder}}>
      <img src={img} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export const Skills = () => {

  const isMobile = useScreenWidth(ScreenWidth.mobile)

  return (
    <div className="skills" id="skills">
      <Title size={isMobile ? "medium" : "large"}>Skills</Title>
      <div className="skills__wrapper">
        {listCard.map((item) => {
          return <Card
                  key={item.id}
                  name={item.name}
                  img={item.img}
                  colorBorder={item.color} />
                  })}
      </div>
    </div>
  )
}