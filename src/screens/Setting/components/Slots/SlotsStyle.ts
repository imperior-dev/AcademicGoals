import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const SlotsStyle = StyleSheet.create({
  outer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    overflow: "hidden",
  },
  blockOuter: {
    borderColor: Colors.grey,
    borderTopWidth: 1,
  },
  dayTypeOuter: {
    flexDirection: "row",
  },
  dayType: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  slottypeText: {
    flex: 0,
    width: 48,
    marginLeft: 18,
    textAlignVertical: "center",
  },
  slotOuter: {
    flexDirection: "row",
  },
  slotInner: {
    flex: 1,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonOuter: {
    width: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlignVertical: "center",
  },
  addRemoveButtonOuter: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 18,
    borderColor: Colors.grey,
    borderTopWidth: 1,
    justifyContent: "space-between",
  },
  saveButtonOuter: {
    padding: 8,
    borderColor: Colors.grey,
    borderTopWidth: 1,
    alignItems: "center",
  },
  saveButtonText: {
    textAlignVertical: "center",
    color: Colors.white,
  },
});

export { SlotsStyle };
