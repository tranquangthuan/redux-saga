import React from "react";
const validate = (values) => {
  const errors = {};
  const { title, desciption } = values;
  if (!title) {
    errors.title = "Required";
  } else if (title.trim().length < 5) {
    errors.title = "Tieu de phai 5 ki tu";
  }
  return errors;
};

export default validate;
