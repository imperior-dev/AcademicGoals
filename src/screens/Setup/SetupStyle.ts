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
});

export { SetupStyle };
