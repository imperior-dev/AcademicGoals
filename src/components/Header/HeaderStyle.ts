import { StyleSheet } from "react-native"

import Colors from "../../../assets/Colors"

const HeaderStyle = StyleSheet.create({
  line: {
    marginBottom: 4,
    height: 4,
    backgroundColor: Colors.white,
  },
  body: {
    height: 64,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "600",
    color: "white",
    textAlignVertical: "bottom",
    marginBottom: 12,
  },
});

export { HeaderStyle };
