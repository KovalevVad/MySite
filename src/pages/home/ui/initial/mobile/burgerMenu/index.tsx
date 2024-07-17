import { FC } from "react";

import { Title } from "src/shared/ui/title"
import { close } from "src/app/image/index"

import "./index.css"

interface BurgerMenuProps {
  handleClick: () => void;
}

export const BurgerMenu: FC<BurgerMenuProps> = ({ handleClick }) => {

  return (
    <div className="burgerMenu">
      <div className="burgerMenu__header">
        <Title size="medium" classNameContainer="burgerMenu__header-title">Frontend<br/> developer</Title>
        <button onClick={handleClick} ><img src={close} alt="close" /></button>
      </div>
      <nav className="burgerMenu__nav">
        <ul>
          <li onClick={handleClick}><a href="#aboutMe">Обо мне</a></li>
          <li onClick={handleClick}><a href="#skills">Skills</a></li>
          <li onClick={handleClick}><a href="#projects">Проекты</a></li>
          <li onClick={handleClick}><a href="#contacts">Контакты</a></li>
        </ul>
      </nav>
      <div className="burgerMenu__contact">
        <a href="https://t.me/Kovalev_oV" target="_blank"><button className="burgerMenu__contact-button">telegramm</button></a>
        <a href="https://vk.com/fenriz666" target="_blank"><button className="burgerMenu__contact-button">vk</button></a>
        <span>+7 910 917 50 89</span>
        <span>nikas.367@mail.ru</span>
      </div>
    </div>)

}