import { useContext } from "react";
import { AppContext } from "../store/appContext";
import { Text } from "./../shared/text/text";
import { getPositionsAPI } from "../api/api";

const WelcomePage = () => {
  const {} = useContext(AppContext);

  return (
    <>
      <Text />
    </>
  );
};
export default WelcomePage;
