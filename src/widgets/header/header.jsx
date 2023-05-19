import { useContext } from "react";
import { AppContext } from "../../store/appContext";
import logo from "../../assets/image/logo.svg";
import { scrollToLoginForm, scrollToUsers } from "../../features/scrolTo";
import Button from "../../shared/button/button";
import "./header.css"

const Header = ({ type }) => {
  const { setSendedForm } = useContext(AppContext);
  if (type === "desktop") {
    const handleClickUsers = () => {
      scrollToUsers();
    };
    const handleClick = async () => {
      await setSendedForm(false);
      scrollToLoginForm();
    };
    return (
      <div className="welcomePage_navBar">
        <img src={logo} alt="logo" />
        <span className="welcomePage_navBar_buttons">
          <Button text="Users" design="yellow" onClick={handleClickUsers} />
          <Button text="Sign up" design="yellow" onClick={handleClick} />
        </span>
      </div>
    );
  }
};
Header.defaultProps = {
  type: "desktop",
};

export default Header;
