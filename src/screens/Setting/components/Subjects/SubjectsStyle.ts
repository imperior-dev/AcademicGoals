import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const SubjectsStyle = StyleSheet.create({
  outer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    overflow: "hidden",
  },
  inner: {
    paddingLeft: 18,
  },
  slot: {
    height: 42,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: Colors.grey,
  },
  name: {
    flex: 1,
  },
  addRemoveButtonOuter: {
    flexDirection: "row",
    paddingVertical: 10,
    paddingRight: 10,
    justifyContent: "space-between",
  },
  saveButtonOuter: {
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
  },
});

export { SubjectsStyle };
