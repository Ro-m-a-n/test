import "./userListPage.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../store/appContext";
import Heading from "../shared/text/heading";
import UserCard from "../widgets/userCard/userCard";
import { Button } from "./../shared/button/button";
import { getUsers, showMoreUsers } from "../features/asyncFunctions";
import Preloader from "../shared/preloader/preloader";

const UserListPage = () => {
  const { urlLinks, setUrlLinks, usersPageSettings, users, setUsers } =
    useContext(AppContext);
  const [isFetchingUsers, setIsFetchingUsers] = useState(false);

  const handleClick = () => {
    showMoreUsers(
      urlLinks.next_url,
      setUrlLinks,
      users,
      setUsers,
      setIsFetchingUsers
    );
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
    <div className="users_wrapper" id="users-page">
      <Heading size="h1"> Working with GET request</Heading>
      <div className="users_stack">
        <UserCard type="normal" />
      </div>

      {urlLinks.next_url && isFetchingUsers && <Preloader type="normal" />}
      {urlLinks.next_url && !isFetchingUsers && (
        <Button design="yellow" text="Show more" onClick={handleClick} />
      )}
    </div>
  );
};
export default UserListPage;
