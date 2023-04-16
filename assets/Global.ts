import { StyleSheet } from "react-native";
import Colors from "./Colors";

const Constraints = {
  Margin: 20,
  BorderRadius: 20,
};

const Style = StyleSheet.create({
  absoluteFlex: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  heading: {
    fontFamily: "Sora",
    fontSize: 18,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 5,
  },
  text: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "900",
    color: "black",
  },
  labelText: {
    fontFamily: "Sora",
    fontSize: 14,
    fontWeight: "900",
    color: "black",
  },
  input: {
    padding: Constraints.Margin / 3,
    paddingLeft: Constraints.Margin / 2,
    paddingRight: Constraints.Margin / 2,
  },
  inputText: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "900",
    color: "black",
    marginTop: 10,
    marginBottom: 10,
  },
});

export { Constraints, Style };
