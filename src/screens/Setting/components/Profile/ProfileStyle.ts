import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const ProfileStyle = StyleSheet.create({
  outer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    overflow: "hidden",
  },
  inner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 18,
  },
  username: {
    fontSize: 20,
    paddingHorizontal: 0,
  },
  exp: {
    flex: 0,
    marginRight: 4,
  },
  line: {
    height: 1,
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

export { ProfileStyle };
