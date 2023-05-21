import { useFormik } from "formik";
import Input from "../../shared/Input";
import Upload from "../../shared/upload";
import { Button } from "../../shared/button";
import { useContext, useEffect, useState } from "react";
import InputRadio from "../../shared/inputRadio";
import { AppContext } from "../../store/appContext";
import { getUsers, signUp } from "../../features/asyncFunctions";
import Preloader from "../../shared/preloader";
import Text from "../../shared/text";
import { validate } from "./validation";

const Form = ({ type }) => {
  const { positions, usersPageSettings, setUrlLinks, setUsers, setSendedForm } =
    useContext(AppContext);
  const [isFetchingForm, setIsFetchingForm] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "1",
      photo: null,
    },
    validate: (values)=>validate(values, formik),
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values) => {
      const { position_id, name, email, phone, photo } = values;
      const formData = new FormData();
      formData.append("position_id", position_id);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("photo", photo);
      signUp(
        setIsFetchingForm,
        formData,
        usersPageSettings.pageQuantity,
        usersPageSettings.usersQuantity,
        setUrlLinks,
        setUsers,
        getUsers,
        setSendedForm
      );
      formik.resetForm();
    },
  });

  useEffect(() => {
    formik.validateForm();
  }, [formik.values?.photo]);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form_wrapper"
      id="login-form"
    >
      <Input
        name="name"
        placeholder={"Your name"}
        error={formik.errors.name}
        {...formik.getFieldProps("name")}
      />
      <Input
        name="email"
        placeholder={"Email"}
        type="email"
        error={formik.errors.email}
        {...formik.getFieldProps("email")}
      />
      <Input
        name="phone"
        placeholder={"Phone"}
        helperText={"+38xxxxxxxxxx"}
        type="tel"
        error={formik.errors.phone}
        {...formik.getFieldProps("phone")}
      />
      <Text> Select your position </Text>

      <InputRadio name="position_id" positions={positions} formik={formik} />

      <Upload
        name="photo"
        formik={formik}
        photo={formik.values.photo}
        error={formik.errors.photo}
        onBlur={formik.handleBlur}
      />
      {isFetchingForm ? (
        <Preloader type="normal" />
      ) : (
        <Button
          design="yellow"
          text="Sign up"
          type="submit"
          stackClassName="form_btn"
          disabled={
            !(
              formik.isValid &&
              formik.values.name &&
              formik.values.email &&
              formik.values.phone &&
              formik.values.photo
            )
          }
        />
      )}
    </form>
  );
};

export default Form;
