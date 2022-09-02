import React, { useEffect } from "react";
import { useState } from "react";
import HeaderBotDuplicate from "./HeaderBotDuplicate";

const HeaderBottom = () => {


  const [isVisible, setVisible] = useState(false);
  function onChange(e: Event) {
    if (e.target!.scrollingElement.scrollTop > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      onChange(e);
    });
  }, []);

  return (
    <>
      <HeaderBotDuplicate
        isVisible={isVisible}
        hiddenMenu={false}
      />
      <HeaderBotDuplicate
        isVisible={isVisible}
        hiddenMenu={true}
      />
    </>
  );
};
export default HeaderBottom;
