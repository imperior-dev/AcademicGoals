import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const ProfileStyle = StyleSheet.create({
  outer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  username: {
    fontSize: 20,
    marginLeft: 8,
  },
  exp: {
    marginRight: 10,
  },
});

export { ProfileStyle };
