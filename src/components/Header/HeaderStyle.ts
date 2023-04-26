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
    justifyContent: "center",
    alignItems: "center",
  },
});

export { HeaderStyle };
