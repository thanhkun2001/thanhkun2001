import React, { useState } from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header";

const DefaultLayout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <>
      <div>
        <Header isScrolled={isScrolled} />
      </div>
      <div>
        <Banner isShow={true} />
      </div>
      <div style={{ padding: 50 }}>{children}</div>
    </>
  );
};

export default DefaultLayout;
