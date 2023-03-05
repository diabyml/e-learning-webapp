import clsx from "clsx";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Logo from "../logo";
import { navigattionItems } from "./navigationItems";

const Link: React.FC<any> = ({ children }) => {
  return (
    <a href="#" className="inline-flex">
      {children}
    </a>
  );
};

const MobileHeader = () => {
  const [menuState, setMenuState] = useState<"open" | "closed">("closed");
  return (
    <header className="bg-slate-200">
      {/* overlay */}
      <div
        className={clsx(
          "top-0 bottom-0 left-0 right-0 z-40  h-full w-full",
          menuState === "open" && "fixed"
        )}
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={() => setMenuState("closed")}
      ></div>
      {/* container */}
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex h-16 items-center justify-between px-4">
          {menuState === "open" ? null : (
            <Menu
              className="h-10 w-10 cursor-pointer"
              onClick={() => setMenuState("open")}
            />
          )}
          <Logo />
          {/* navigation */}
          <div
            className={clsx(
              "fixed left-0 top-0 bottom-0 z-50 w-3/4 -translate-x-full bg-white  shadow-lg transition-transform animate-in duration-300",
              menuState === "open" && "translate-x-0"
            )}
          >
            {menuState === "open" && (
              <button
                className="fixed top-4 -right-16 -z-10  inline-flex items-center justify-center  rounded-full bg-white p-2 hover:bg-slate-300 "
                onClick={() => setMenuState("closed")}
              >
                <X className="h-8 w-8" />
              </button>
            )}
            <nav className="p-4">
              <ul>
                {navigattionItems.map((item) => (
                  <li key={item}>
                    <Link>{item}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div>user</div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
