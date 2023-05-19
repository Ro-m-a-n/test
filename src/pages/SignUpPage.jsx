import "./signUpPage.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import Form from "../widgets/form/form";
import { getPositions } from "../features/asyncFunctions";
import Heading from "../shared/text/heading";
import success from "../assets/image/success-image.svg";

const SignUpPage = () => {
  const { setPositions, sendedForm } = useContext(AppContext);

  useEffect(() => {
    getPositions(setPositions);
  }, []);
  return (
    <div className="signUp_wrapper">
      {sendedForm ? (
        <div className="success_wrapper">
          <Heading size="h1">User successfully registered</Heading>
          <img src={success}></img>
        </div>
      ) : (
        <Form/>
      )}
    </div>
  );
};
export default SignUpPage;
