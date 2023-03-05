import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Link: React.FC<any> = ({ children }) => {
  return (
    <a href="#" className="inline-flex px-5 py-6 text-2xl">
      {children}
    </a>
  );
};

interface Props {
  variant?: "default" | "transparent ";
}

const Header: React.FC<Props> = ({ variant = "default" }) => {
  return (
    <div>
      <MobileHeader />
      {/* <DesktopHeader /> */}
    </div>
  );
};

export default Header;
