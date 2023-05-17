import "./userCard.css";
import defaultUser from "../../assets/image/defaultUser.png";
import { useContext } from "react";
import { AppContext } from "../../store/appContext";
const UserCard = () => {
  const { users } = useContext(AppContext);
  const usersCard = users.map((user) => {
    return (
      <div key={user.id} className="user_wrapper">
        <img className="user_photo" src={defaultUser} />
        <div className="user_name">{user.name}</div>
        <div>{user.position}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
      </div>
    );
  });

  return usersCard;
};
export default UserCard;
