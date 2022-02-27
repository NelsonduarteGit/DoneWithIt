import { useState } from "react";

import Screen from "./App/components/Screen";
import AppTextInput from "./App/components/AppTextInput";
import MyPicker from "./App/components/MyPicker";
import LoginScreen from "./App/screens/LoginScreen";

const App = () => {
  const [category, setCategory] = useState();

  return <LoginScreen />;
};

export default App;
