import clsx from "clsx";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import Logo from "../logo";
import { navigattionItems } from "./navigationItems";
import Link from "next/link";

interface MobileHeaderProps {
  variant?: "primary" | "default";
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ variant = "default" }) => {
  const [menuState, setMenuState] = useState<"open" | "closed">("closed");

  return (
    <header
      className={clsx(
        "bg-slate-200",
        variant === "primary" && "bg-transparent"
      )}
    >
      {/* overlay */}
      <div
        className={clsx(
          "top-0 bottom-0 left-0 right-0 z-40  h-full w-full",
          menuState === "open" && "fixed"
        )}
        style={{ background: "rgba(0,0,0,0.6)" }}
        onClick={() => setMenuState("closed")}
      ></div>

      {/* close menu */}
      {menuState === "open" && (
        <button
          className="closeBtn fixed top-4 right-[15%] z-40 inline-flex h-12 w-12 items-center  justify-center rounded-full bg-white hover:bg-slate-300"
          onClick={() => setMenuState("closed")}
        >
          <X className="h-6 w-6 text-black" />
        </button>
      )}

      {/* container */}
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex h-14 items-center justify-between px-4">
          {menuState === "open" ? null : (
            <button className="inline-flex h-12 w-12 items-center justify-center">
              <Menu
                className="h-6 w-6 cursor-pointer"
                onClick={() => setMenuState("open")}
              />
            </button>
          )}
          <Logo />
          {/* navigation */}
          <div
            className={clsx(
              "fixed left-0 top-0 bottom-0 z-50   overflow-x-hidden  bg-white  shadow-lg  transition-all animate-in duration-300",
              menuState === "open" ? "w-2/3" : "w-0"
            )}
          >
            {/* nav header */}
            <div className="border-b py-2">
              <Link
                href={"#"}
                className="block  w-full py-2 px-4 font-bold text-primary-400"
              >
                Login
              </Link>
              <Link
                href={"#"}
                className="block w-full py-2 px-4 font-bold text-primary-400"
              >
                Register
              </Link>
            </div>
            <nav className="p-y-4">
              <ul>
                {navigattionItems.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="inline-flex w-full  py-2 px-4 text-text1"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="jsutify-center flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm font-bold text-primary-400">
            AD
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
