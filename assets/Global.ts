import { StyleSheet } from "react-native";

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
  },
});

export { Constraints, Style };
