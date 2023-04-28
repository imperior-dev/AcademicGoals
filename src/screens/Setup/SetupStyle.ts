import { StyleSheet } from "react-native"

import Colors from "../../../assets/Colors"

const SetupStyle = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  questionBorderBox: {
    borderRadius: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    marginRight: 64,
    padding: 14,
  },
  answerBorderBox: {
    borderRadius: 10,
    borderColor: Colors.grey,
    borderWidth: 1,
    marginLeft: 64,
    padding: 10,
  },
  descriptionText: {
    marginHorizontal: 20,
    marginVertical: 10,
    color: Colors.grey,
  },
  addButtonOuter: {
    width: 64,
    justifyContent: "center",
    alignItems: "center",
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textAlignVertical: "center",
  },

  buttonInputOuter: {
    flexDirection: "row",
  },

  buttonInputInner: {
    flex: 1,
  },

  buttonOuter: {
    alignSelf: "flex-end",
    borderRadius: 5,
    marginRight: 20,
    width: 86,
    padding: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    marginBottom: 2,
    fontWeight: "200",
    color: Colors.white,
  },
});

export { SetupStyle };
