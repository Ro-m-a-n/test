import "./userListPage.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import Header from "../shared/text/header";
import UserCard from "../widgets/userCard/userCard";
import { Button } from "./../shared/button/button";
import { getUsers, showMoreUsers } from "../features/asyncFunctions";

const UserListPage = () => {
  const { urlLinks, setUrlLinks, usersPageSettings, users, setUsers } =
    useContext(AppContext);

  const handleClick = () => {
    showMoreUsers(urlLinks.next_url, setUrlLinks, users, setUsers);
  };
  useEffect(() => {
    getUsers(
      usersPageSettings.pageQuantity,
      usersPageSettings.usersQuantity,
      setUrlLinks,
      setUsers
    );
  }, []);
  return (
    <div className="users_wrapper">
      <Header size="h1"> Working with GET request</Header>
      <div className="users_stack">
        <UserCard />
      </div>
      <Button design="yellow" text="Show more" onClick={handleClick} />
    </div>
  );
};
export default UserListPage;
