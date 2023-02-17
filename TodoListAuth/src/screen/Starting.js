import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import AuthScreen from "./AuthScreen";
import MainScreen from "./MainScreen";
const Starting = () => {
  const IsAuthenticated = useSelector((state) => state.userAuth.user);
  return <>{IsAuthenticated ? <MainScreen /> : <AuthScreen />}</>;
};

export default Starting;
