import { useEffect, useState } from "react";
import { BurgerMenu } from "./burgerMenu";
import { burgerMenu, myPhoto } from "src/app/image";

import "./index.css";

export const MobileInitial = () => {

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    setIsOn((prev) => !prev);
  };

  useEffect(() => {
    if (isOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOn]);

  return (
    !isOn ? (
      <div className="mbInitial">
        <div className="mbInitial__header">
          <h1 className="mbInitial__Title">
            Frontend
            <br /> developer
          </h1>
          <button onClick={handleClick}>
            <img src={burgerMenu} alt="menu" />
          </button>
        </div>
        <img src={myPhoto} alt="photo" />
      </div>
    ) : (<BurgerMenu  handleClick={handleClick} />)
  );
};
