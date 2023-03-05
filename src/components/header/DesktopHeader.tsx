import Link from "next/link";
import { Button } from "../button/Button";
import Logo from "../logo";
import { navigattionItems } from "./navigationItems";

const DesktopHeader = () => {
  return (
    <header>
      {/* container */}
      <div className="container mx-auto">
        {/* wrapper */}
        <div className="flex h-[72px] items-center justify-between px-4">
          <Logo />
          {/* nav */}
          <div className="self-stretch">
            <nav className="p-y-4 h-full">
              <ul className="flex h-full items-center">
                {navigattionItems.map((item) => (
                  <li key={item} className="h-full">
                    <Link
                      href="#"
                      className="flex  h-full items-center px-3 text-xl"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* auth or user based on authentication state */}
          <div className="space-x-4">
            <Button
              size={"sm"}
              className="bg-white px-10 text-text1 hover:bg-white"
            >
              Login
            </Button>
            <Button
              size={"sm"}
              className="bg-primary-200 px-10 hover:bg-primary-200"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
