import "./userListPage.css";
import { useContext } from "react";
import { AppContext } from "../store/appContext";
import Header from "../shared/text/header";
import UserCard from "../widgets/userCard/userCard";
import { Button } from "./../shared/button/button";

const UserListPage = () => {
  const {} = useContext(AppContext);

  return (
    <div className="users_wrapper">
      <Header size="h1"> Working with GET request</Header>
      <div className="users_stack">
        <UserCard />
      </div>
      <Button design="yellow" text="Show more" />
    </div>
  );
};
export default UserListPage;
