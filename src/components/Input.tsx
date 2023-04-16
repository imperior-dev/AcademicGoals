import { ReactElement, ReactNode } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Core from "../Core";

import Colors from "../../assets/Colors";
import { Constraints, Style } from "../../assets/Global";

import { inputType } from "../types/core";

export default function Input({ type, core }: { type: inputType; core: Core }) {
  let children: ReactNode;
  switch (type) {
    case "profile":
      let name = core.data.user.name;
      children = (
        <View>
          <Text style={[Style.heading, { textAlign: "center" }]}>Profile</Text>
          <View style={styles.contentContainer}>
            <Text style={[styles.label]}>Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                defaultValue={name}
                onChangeText={(newName) => (name = newName)}
              />
            </View>
          </View>
          <Buttons core={core}>{"Submit"}</Buttons>
        </View>
      );
      break;
    case "studySlot":
      children = (
        <Text style={[Style.heading, { textAlign: "center" }]}>
          Study Slots
        </Text>
      );
      break;
    case "break":
      children = (
        <Text style={[Style.heading, { textAlign: "center" }]}>
          Break Settings
        </Text>
      );
      break;
    case "subject":
      children = (
        <Text style={[Style.heading, { textAlign: "center" }]}>Subjects</Text>
      );
      break;
  }

  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity
        style={[Style.absoluteFlex, styles.touchabelOpacity]}
        onPress={() => core.cancelInput()}
      />
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  touchabelOpacity: {
    opacity: 0.5,
    backgroundColor: Colors.black,
  },
  childContainer: {
    marginVertical: Constraints.Margin * 5,
    marginHorizontal: Constraints.Margin,
    borderRadius: Constraints.BorderRadius,
    backgroundColor: Colors.white,
    overflow: "hidden",
  },
  contentContainer: {
    margin: Constraints.Margin,
    marginTop: Constraints.Margin / 2,
  },
  submitButton: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: Colors.white,
  },
  label: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "700",
    color: "black",
    marginBottom: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: Constraints.BorderRadius / 4,
  },
  inputText: {
    padding: Constraints.Margin / 3,
    paddingLeft: Constraints.Margin / 2,
    paddingRight: Constraints.Margin / 2,
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "900",
    color: "black",
  },
  buttonContainer: {
    height: 48,
    backgroundColor: Colors.orange,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonDivider: {
    height: "50%",
    width: 1,
    backgroundColor: Colors.white,
  },
});

function Buttons({ children, core }: { children: string; core: Core }) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.submitButton}>
        <Text
          style={[Style.text, styles.submitText]}
          onPress={() => core.cancelInput()}
        >
          Cancel
        </Text>
      </TouchableOpacity>
      <View style={styles.buttonDivider}></View>
      <View style={styles.submitButton}>
        <Text style={[Style.text, styles.submitText]}>{children}</Text>
      </View>
    </View>
  );
}
