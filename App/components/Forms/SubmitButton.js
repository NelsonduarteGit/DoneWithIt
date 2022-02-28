import React from "react";

import { useFormikContext } from "formik";
import MyButton from "../MyButton";

export default function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <MyButton title={title} onPress={handleSubmit} />;
}
