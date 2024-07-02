
import { burgerMenu, myPhoto } from "src/app/image"

import "./index.css"

export const MobileInitial = () => {
  return (
    <div className="mbInitial">
      <div className="mbInitial__header">
        <h1 className="mbInitial__Title">Frontend<br/> devoloper</h1>
        <img src={burgerMenu} alt="menu" />
      </div>
      <img src={myPhoto} alt="photo" />
    </div>
  )
}