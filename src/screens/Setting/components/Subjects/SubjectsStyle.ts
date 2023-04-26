import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const SubjectsStyle = StyleSheet.create({
  outer: {
    padding: 18,
    borderRadius: 10,
    paddingTop: 4,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
  slot: {
    height: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
});

export { SubjectsStyle };
