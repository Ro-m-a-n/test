import { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import Formik from "../widgets/form/formik";
import { getPositions } from "../features/asyncFunctions";

const SignUpPage = () => {
  const { setPositions } = useContext(AppContext);

  // useEffect(() => {
  //   getPositions(setPositions);
  // }, []);
  return;

  // <Formik />;
};
export default SignUpPage;
