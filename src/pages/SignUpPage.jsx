import { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import Form from "../widgets/form/form";
import { getPositions } from "../features/asyncFunctions";
import Heading from "../shared/heading";
import success from "../assets/image/success-image.svg";

const SignUpPage = () => {
  const { setPositions, sendedForm } = useContext(AppContext);
  const headingContentPost = " Working with POST request";
  const headingContentSuccess = "User successfully registered";
  useEffect(() => {
    getPositions(setPositions);
  }, []);
  /* <Heading size="h1">User successfully registered</Heading> Working with POST request */
  return (
    <div className="signUp_wrapper">
      <Heading size="h1">
        {sendedForm ? headingContentSuccess : headingContentPost}
      </Heading>

      {sendedForm ? (
        <div className="success_wrapper">
          <img src={success} alt="success"></img>
        </div>
      ) : (
        <Form />
      )}
    </div>
  );
};
export default SignUpPage;
