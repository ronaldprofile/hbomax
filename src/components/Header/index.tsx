import { Profile } from "../Profile";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <header
      className={`h-20 px-[50px] py-[30px] bg-black/40 rounded-[20px] backdrop-blur
         flex items-center justify-between`}
    >
      <div id="logo">
        <img src={logo} alt="Logo HBO MAX" />
      </div>

      <nav>
        <ul className={`flex items-center gap-[3.125rem]`}>
          <li>
            <a href="#" className="link-header">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="link-header">
              TV Shows
            </a>
          </li>
          <li>
            <a href="#" className="link-header">
              Animations
            </a>
          </li>
          <li>
            <a href="#" className="link-header">
              Upgrade
            </a>
          </li>
        </ul>
      </nav>

      <Profile />
    </header>
  );
}
