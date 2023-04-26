import { StyleSheet } from "react-native"

import Colors from "../../../assets/Colors"

const NavbarStyle = StyleSheet.create({
  line: {
    height: 4,
    marginTop: 4,
    backgroundColor: Colors.white,
  },
  body: {
    height: 64,
    position: "relative",
  },
  iconList: {
    flex: 1,
    flexDirection: "row",
  },
  iconOuter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export { NavbarStyle };
