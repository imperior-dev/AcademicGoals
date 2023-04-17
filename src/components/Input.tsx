import { ReactNode, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  GestureResponderEvent,
} from "react-native";
import TimeInput from "./TimeInput";

import Core from "../Core";

import Colors from "../../assets/Colors";
import { Constraints, Style } from "../../assets/Global";

import InputSlider from "./InputSlider";
import { timeIntegerToString } from "../Functions";

export default function Input({ core }: { core: Core }) {
  let children: ReactNode;
  switch (core.input.type) {
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
          <Buttons
            core={core}
            onSubmit={() => {
              try {
                core.data.user.name = name;
                core.updateDate();
                core.cancelInput();
              } catch (error) {
                core.log("Error saving data", error);
              }
            }}
          >
            {"Submit"}
          </Buttons>
        </View>
      );
      break;
    case "studySlot":
      if (!core.input.data.day || core.input.data.index == undefined)
        return null;
      let { from, to } =
        core.data.preferences.studySlots[core.input.data.day][
          core.input.data.index
        ];
      children = (
        <View>
          <Text style={[Style.heading, { textAlign: "center" }]}>
            Study Slot #{core.input.data.index}
          </Text>
          <View style={styles.contentContainer}>
            <Text style={[styles.label]}>From</Text>
            <View style={styles.inputContainer}>
              <TimeInput
                defaultTime={from}
                onChange={(newValue: number) => (from = newValue)}
              ></TimeInput>
            </View>
            <Text style={[styles.label]}>To</Text>
            <View style={styles.inputContainer}>
              <TimeInput
                defaultTime={to}
                onChange={(newValue: number) => (to = newValue)}
              ></TimeInput>
            </View>
          </View>
          <Buttons
            core={core}
            onSubmit={() => {
              try {
                if (!core.input.data.day || core.input.data.index == undefined)
                  return;
                core.data.preferences.studySlots[core.input.data.day][
                  core.input.data.index
                ] = { from, to };
                core.updateDate();
                core.cancelInput();
              } catch (error) {
                core.log("Error saving data", error);
              }
            }}
          >
            {"Submit"}
          </Buttons>
        </View>
      );
      break;
    case "break":
      const [duration, setDuration] = useState(
        core.data.preferences.breakSetting.time
      );
      const [interval, setInterval] = useState(
        core.data.preferences.breakSetting.interval
      );
      children = (
        <View>
          <Text style={[Style.heading, { textAlign: "center" }]}>
            Break Setting
          </Text>
          <View style={styles.contentContainer}>
            <Text style={[styles.label]}>Duration</Text>
            <View style={styles.inputContainer}>
              <InputSlider
                minimumValue={5}
                maximumValue={60}
                defaultValue={duration}
                steps={1}
                onChange={(value) => {
                  setDuration(value);
                }}
              />
              <View style={styles.sliderValue}>
                <Text style={Style.labelText}>
                  {timeIntegerToString(duration, true)}
                </Text>
              </View>
            </View>
            <Text style={[styles.label]}>Interval</Text>
            <View style={styles.inputContainer}>
              <InputSlider
                minimumValue={60}
                maximumValue={180}
                defaultValue={interval}
                steps={1}
                onChange={(value) => {
                  setInterval(value);
                }}
              />
              <View style={styles.sliderValue}>
                <Text style={Style.labelText}>
                  {timeIntegerToString(interval, true)}
                </Text>
              </View>
            </View>
          </View>
          <Buttons
            core={core}
            onSubmit={() => {
              try {
                core.data.preferences.breakSetting = {
                  time: duration,
                  interval,
                };
                core.updateDate();
                core.cancelInput();
              } catch (error) {
                core.log("Error saving data", error);
              }
            }}
          >
            {"Submit"}
          </Buttons>
        </View>
      );
      break;
    case "subject":
      if (core.input.data.index == undefined) return;
      let subject = core.data.preferences.subjects[core.input.data.index];

      function ImportanceSelector() {
        const [importance, setImportance] = useState(subject.importance);

        subject.importance = importance;

        return (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={[
                { flex: 1, alignItems: "center" },
                { backgroundColor: importance == 0 ? Colors.grey : undefined },
              ]}
              onPress={() => setImportance(0)}
            >
              <Text style={styles.inputText}>Low</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                { flex: 1, alignItems: "center" },
                {
                  backgroundColor: importance == 0.5 ? Colors.grey : undefined,
                },
              ]}
              onPress={() => setImportance(0.5)}
            >
              <Text style={styles.inputText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                { flex: 1, alignItems: "center" },
                { backgroundColor: importance == 1 ? Colors.grey : undefined },
              ]}
              onPress={() => setImportance(1)}
            >
              <Text style={styles.inputText}>High</Text>
            </TouchableOpacity>
          </View>
        );
      }

      children = (
        <View>
          <Text style={[Style.heading, { textAlign: "center" }]}>Subject</Text>
          <View style={styles.contentContainer}>
            <Text style={[styles.label]}>Name</Text>
            <View style={styles.inputContainer}>
              <TextInput
                defaultValue={subject.name}
                onChangeText={(newValue) => (subject.name = newValue)}
                style={styles.inputText}
              />
            </View>
            <Text style={[styles.label]}>Importance</Text>
            <View style={styles.inputContainer}>
              <ImportanceSelector />
            </View>
          </View>
          <Buttons
            core={core}
            onSubmit={() => {
              try {
                if (core.input.data.index == undefined) return;
                core.data.preferences.subjects[core.input.data.index] = subject;
                core.updateDate();
                core.cancelInput();
              } catch (error) {
                core.log("Error saving data", error);
              }
            }}
          >
            {"Submit"}
          </Buttons>
        </View>
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
    alignItems: "center",
    borderColor: Colors.grey,
    borderRadius: Constraints.BorderRadius / 4,
    flexDirection: "row",
    marginBottom: Constraints.Margin / 2,
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
  inputOuter: {
    flexDirection: "row",
    flex: 5,
  },
  inputPeriodContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  sliderValue: {
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

function Buttons({
  children,
  core,
  onSubmit,
}: {
  children: string;
  core: Core;
  onSubmit: (event: GestureResponderEvent) => void;
}) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => core.cancelInput()}
      >
        <Text style={[Style.text, styles.submitText]}>Cancel</Text>
      </TouchableOpacity>
      <View style={styles.buttonDivider}></View>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={[Style.text, styles.submitText]}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
}
