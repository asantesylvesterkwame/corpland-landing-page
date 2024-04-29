import Logo from "../Logo/Logo";
import { COLORS } from "@/utils/constants";
import { Button } from "../ui/button";
import { HamburgerMenu } from "../Hamburger/Hamburger";

const Navbar = () => {
  return (
    <div className="flex flex-1 justify-between items-center">
      <div className="logo">
        <Logo />
      </div>
      <div className="Navlinks hidden md:block">
        <ul>
          <li className={`text-${COLORS.primary} font-bold`}>Home</li>
        </ul>
      </div>
      <div className="download hidden md:block">
        <Button variant={"Cprimary"}>DOWNLOAD</Button>
      </div>
      <div
        className={`menu-icon md:hidden rounded-none bg-${COLORS.primary}`}
        id="menu">
        <HamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
