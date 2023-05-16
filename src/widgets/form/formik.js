import { useFormik } from "formik";
import Input from "../../shared/input/Input";
import Upload from "../../shared/upload/upload";
import { Button } from "./../../shared/button/button";
import { useEffect } from "react";
import InputRadio from "../../shared/inputRadio/inputRadio";
import "./formik.css";
import { Header } from "./../../shared/text/header";

const Formik = () => {
  const validate = (values) => {
    const errors = {};
    if (formik.touched.name && !values.name) {
      errors.name = "Field is required";
    } else if (formik.touched.name && values.name.length < 2) {
      errors.name = "Must be at least 2 characters";
    } else if (values.name.length > 20) {
      errors.name = "Must be 20 characters or less";
    }

    if (formik.touched.email && !values.email) {
      errors.email = "Field is required";
    } else if (
      formik.touched.email &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (formik.touched.phone && !values.phone) {
      errors.phone = "+38(XXX) XXX-XX-XX Field is required";
    } else if (
      formik.touched.phone &&
      !/^\+38\(\d{3}\) \d{3}-\d{2}-\d{2}$/i.test(values.phone)
    ) {
      errors.phone = "+38(XXX) XXX-XX-XX This format required";
    }
    if (formik.touched.photo && !values.photo) {
      errors.photo = "Field is required";
    } else if (
      values.photo &&
      values.photo.type !== "image/png" &&
      values.photo.type !== "image/jpeg"
    ) {
      errors.photo = "Invalid file format. Please upload a PNG or JPEG image.";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      position: "Frontend developer",
      photo: null,
    },
    validate,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (data) => {
      console.log("form data", data);
      formik.resetForm();
    },
  });

  console.log("errors", formik.errors);
  console.log("isValid", formik.isValid);
  console.log("touched", formik.touched);

  useEffect(() => {
    formik.validateForm();
  }, [formik.values?.photo]);
  return (
    <form onSubmit={formik.handleSubmit} className="form_wrapper">
      <Header size="h1">Working with POST request</Header>
      <Input
        id="name"
        name={"name"}
        placeholder={"Your name"}
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.errors.name}
        onBlur={formik.handleBlur}
      />
      <Input
        id="email"
        name={"email"}
        placeholder={"Email"}
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
        onBlur={formik.handleBlur}
      />
      <Input
        id="phone"
        name={"phone"}
        placeholder={"Phone"}
        helperText={"+38(XXX) XXX-XX-XX"}
        type="tel"
        onChange={formik.handleChange}
        value={formik.values.phone}
        error={formik.errors.phone}
        onBlur={formik.handleBlur}
      />

      <InputRadio
        name="position"
        values={["Frontend developer", "Backend developer", "Designer", "QA"]}
        formik={formik}
      />

      <Upload
        name="photo"
        formik={formik}
        photo={formik.values.photo}
        error={formik.errors.photo}
        onBlur={formik.handleBlur}
      />

      <Button
        design={"yellow"}
        text="Sign up"
        type="submit"
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
    </form>
  );
};

export default Formik;
