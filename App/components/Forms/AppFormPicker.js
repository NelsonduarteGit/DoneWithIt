import React from "react";

import { useFormikContext } from "formik";

import { ErrorMessage } from ".";
import MyPicker from "../MyPicker";

export default function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <React.Fragment>
      <MyPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} vissible={touched[name]} />
    </React.Fragment>
  );
}
