import { Title } from "src/shared/ui/title";

import "./index.css";

export const AboutMe = () => {

  return (
    <div className="AboutMe">
      <Title classNameContainer="AboutMe__title" size="large">Обо мне</Title>
      <div className="AboutMe__content">
        <div className="AboutMe__content-item">
          <p>Меня зовут Вадим и я frontend-разрабочтик. Живу в Москве и очень увлечен веб-разработкой.
          </p>
        </div>
        <div className="AboutMe__content-item">
          <p>Я студент 2 курса Московского политеха</p>
        </div>
        <div className="AboutMe__content-item">
          <p>Cлушаю веб-стандарты, смотрю лекции ШРИ Яндекса, читаю статьи на Habr</p>
        </div>
      </div>
    </div>
  );
}