import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <div>
      <div className="lg:hidden">
        <MobileHeader variant="primary" />
      </div>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
    </div>
  );
};

export default Header;
