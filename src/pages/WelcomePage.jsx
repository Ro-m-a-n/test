import { useContext } from "react";
import { AppContext } from "../store/appContext";
import Text from "../shared/text/text";
import DownloadBlock from "../widgets/downloadBlock/downloadBlock";

const WelcomePage = () => {
  const {} = useContext(AppContext);

  return (
    <>
      <Text>{"hello"}</Text>

      <DownloadBlock />
    </>
  );
};
export default WelcomePage;
