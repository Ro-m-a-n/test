import { emailPattern } from "./pattern";

export const validate = (values, formik) => {
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
