import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const FormComponent = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfrimPassword] = useState("");
  const submitHandler = () => {
    if (props?.type === "login") {
      console.log(email, password);
    }
    if (props?.type === "registor") {
      console.log(email, password, confirmpassword);
    }
  };
  return (
    <View style={style.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        style={style.input}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        style={style.input}
      />
      {props.type === "registor" ? (
        <TextInput
          placeholder="Confrim Password"
          onChangeText={(text) => setConfrimPassword(text)}
          style={style.input}
        />
      ) : (
        ""
      )}
      <Button
        title={props.type === "registor" ? "registor" : "login"}
        onPress={submitHandler}
      />
    </View>
  );
};

export default FormComponent;

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 4,
  },
  input: {
    borderWidth: 2,
    borderColor: "blue",
    borderRadius: 5,
    padding: 10,
    textAlign: "center",
    marginVertical: 10,
  },
});
