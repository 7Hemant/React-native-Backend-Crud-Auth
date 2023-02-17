import React, { useState } from "react";
import { View, Button, StyleSheet, Dimensions } from "react-native";
import FormComponent from "../components/FormComponent";
const screenWidth = Dimensions.get("window").width;
const AuthScreen = () => {
  const [display, setDisplay] = useState(<FormComponent type="login" />);
  const loginHandler = () => {
    setDisplay(<FormComponent type="login" />);
  };
  const registorHandler = () => {
    setDisplay(<FormComponent type="registor" />);
  };
  return (
    <View style={style.container}>
      {display}
      <View style={style.btncontainer}>
        <Button title="login" style={style.btn} onPress={loginHandler} />
        <Button title="registor" color="red" onPress={registorHandler} />
      </View>
    </View>
  );
};

export default AuthScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth,
    justifyContent: "center",
  },
  btncontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
