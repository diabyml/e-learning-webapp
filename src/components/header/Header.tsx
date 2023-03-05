import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div>
      <div className="md:hidden">
        <MobileHeader variant="primary" />
      </div>
      <div className="hidden md:block">
        <DesktopHeader />
      </div>
    </div>
  );
};

export default Header;
