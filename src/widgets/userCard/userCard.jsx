import "./userCard.css";
import { useContext } from "react";
import { AppContext } from "../../store/appContext";
import ToolTip from "../../shared/tooltip/tooltip";
import Image from "../../shared/image/image";

const UserCard = ({ type }) => {
  const { users } = useContext(AppContext);

  if (type === "normal") {
    const usersCard = users.map((user) => {
      return (
        <div key={user.id} className="user_wrapper">
          <Image type="normal" image={user.photo} />

          <ToolTip id="email" value={user.name}>
            <div className="user_name ellipsis">{user.name}</div>
          </ToolTip>
          <div className="ellipsis">{user.position}</div>
          <ToolTip id="email" value={user.email}>
            <div className="ellipsis">{user.email}</div>
          </ToolTip>

          <div className="ellipsis">{user.phone}</div>
        </div>
      );
    });
    return usersCard;
  }
};
UserCard.defaultProps = {
  type: "normal",
};

export default UserCard;
