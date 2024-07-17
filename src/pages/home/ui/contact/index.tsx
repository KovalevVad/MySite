import { telegrammWh, gitHubWh, mail } from "src/app/image";

import "./index.css"

export const Contacts = () => {

  return (
    <div className="contacts">
      <div className="contact contacts__telegramm">
        <img src={telegrammWh} alt="telegramm" />
        <a href="https://t.me/Kovalev_oV" target="_blank" />
      </div>
      <div className="contact contacts__gitHub">
        <img src={gitHubWh} alt="gitHub" />
        <a href="https://github.com/KovalevVad" target="_blank" />
      </div>
      <div className="contact contacts__mail">
        <img src={mail} alt="gitHub" />
        <a href="mailto:nikas.367@mail.ru" target="_blank" />
      </div>
    </div>
  )
}