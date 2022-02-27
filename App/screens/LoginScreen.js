import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import MyButton from "../components/MyButton";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  passoword: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />

      <Formik
        initialValues={{ email: "", passoword: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <AppFormField
              name="email"
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="Email"
              textContentType="emailAddress"
            />
            <AppFormField
              name="passoword"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Passoword"
              textContentType="password"
              secureTextEntry
            />
            <MyButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
