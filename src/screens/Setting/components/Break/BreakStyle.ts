import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const BreakStyle = StyleSheet.create({
  outer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding: 18,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
});

export { BreakStyle };
