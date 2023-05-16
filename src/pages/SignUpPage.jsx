import { useContext } from "react";
import { AppContext } from "../store/appContext";
import Formik from "../widgets/form/formik";


const SignUpPage = () => {
  const {} = useContext(AppContext);

  return <Formik />;
};
export default SignUpPage;
