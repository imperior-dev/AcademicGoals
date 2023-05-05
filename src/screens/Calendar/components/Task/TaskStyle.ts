import { StyleSheet } from "react-native"

import Colors from "../../../../../assets/Colors"

const TaskStyle = StyleSheet.create({
  outer: {
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  leftMargin: {
    width: 20,
    marginVertical: 4,
    borderColor: Colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  dateOuter: {
    width: 64,
    borderColor: Colors.grey,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  inner: {
    flex: 1,
    marginVertical: 4,
    borderColor: Colors.grey,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export { TaskStyle };
