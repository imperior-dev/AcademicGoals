import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const BreakStyle = StyleSheet.create({
  outer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    overflow: "hidden",
  },
  inner: {
    flexDirection: "row",
    padding: 18,
    paddingVertical: 6,
    alignItems: "center",
  },
  line: {
    height: 1,
    marginHorizontal: 10,
    backgroundColor: Colors.grey,
  },
  buttonOuter: {
    padding: 8,
    opacity: 0.9,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
  },
});

export { BreakStyle };
