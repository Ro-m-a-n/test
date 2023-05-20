import { useContext } from "react";
import { AppContext } from "../store/appContext";
import Heading from "../shared/heading";
import Text from "../shared/text";
import Button from "../shared/button";
import { scrollToLoginForm } from "../features/scrolTo";
import Header from "../widgets/header";

const WelcomePage = () => {
  const { setSendedForm } = useContext(AppContext);

  const handleClick = async () => {
    await setSendedForm(false);
    scrollToLoginForm();
  };
  return (
    <div className="welcomePage_wrapper">
      <Header type="desktop" />
      <div className="backgroundImage" />
      <div className="background">
        <div className="welcomePage">
          <Heading size="h1" font="normal" color="white">
            Test assignment for front-end developer
          </Heading>
          <Text font="normal" color="white">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they`ll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </Text>
          <Button text="Sign up" design="yellow" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
export default WelcomePage;
