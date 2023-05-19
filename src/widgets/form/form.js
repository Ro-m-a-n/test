import { useFormik } from "formik";
import Input from "../../shared/input/Input";
import Upload from "../../shared/upload/upload";
import { Button } from "../../shared/button/button";
import { useContext, useEffect, useState } from "react";
import InputRadio from "../../shared/inputRadio/inputRadio";
import "./form.css";
import { Heading } from "../../shared/text/heading";
import { emailPattern } from "./pattern";
import { AppContext } from "../../store/appContext";
import { getUsers, signUp } from "../../features/asyncFunctions";
import Preloader from "../../shared/preloader/preloader";

const Form = ({ type }) => {
  const { positions, usersPageSettings, setUrlLinks, setUsers, setSendedForm } =
    useContext(AppContext);
  const [isFetchingForm, setIsFetchingForm] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (formik.touched.name && !values.name) {
      errors.name = "Field is required";
    } else if (
      formik.touched.name &&
      (values.name.length < 2 || values.name.length > 60)
    ) {
      errors.name = "Must be from 2 to 60 characters";
    }

    if (formik.touched.email && !values.email) {
      errors.email = "Field is required";
    } else if (formik.touched.email && !emailPattern.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (formik.touched.phone && !values.phone) {
      errors.phone = "+38xxxxxxxxxx Field is required";
    } else if (
      formik.touched.phone &&
      !/^[\+]{0,1}380([0-9]{9})$/i.test(values.phone)
    ) {
      errors.phone = "+38xxxxxxxxxx This format required";
    }
    if (formik.touched.photo && !values.photo) {
      errors.photo = "Field is required";
    } else if (
      values.photo &&
      values.photo.type !== "image/jpg" &&
      values.photo.type !== "image/jpeg"
    ) {
      errors.photo = "Invalid file format. Please upload a JPG or JPEG image.";
    } else if (values.photo && values.photo.size > 5242880) {
      errors.photo = "Photo size must not be greater than 5 Mb.";
    } else if (
      values.photo &&
      (values.photo.width < 70 || values.photo.height < 70)
    ) {
      errors.photo = "Minimum size of photo 70x70px";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position_id: "1",
      photo: null,
    },
    validate,
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
      <Heading size="h1">Working with POST request</Heading>
      <Input
        name="name"
        placeholder={"Your name"}
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
        onBlur={formik.handleBlur}
      />
      <Input
        name="email"
        placeholder={"Email"}
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        onBlur={formik.handleBlur}
      />
      <Input
        name="phone"
        placeholder={"Phone"}
        helperText={"+38xxxxxxxxxx"}
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
        onBlur={formik.handleBlur}
      />

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
