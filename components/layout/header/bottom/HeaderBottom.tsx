import React, { useEffect } from "react";
import { useState } from "react";
import HeaderBotDuplicate from "./HeaderBotDuplicate";

const HeaderBottom = () => {


  const [isVisible, setVisible] = useState(false);
  function onChange() {
    if (document.scrollingElement!.scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", () => {
      onChange();
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
