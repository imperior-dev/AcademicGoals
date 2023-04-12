import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Slider from "@react-native-community/slider";

import Header from "../components/Header";

import { Constraints, Style } from "../../assets/Global";
import Colors from "../../assets/Colors";

import { timeIntegerToString } from "../Functions";
import * as Storage from "../Storage";

export default function Settings({
  storage,
  AskInput,
}: {
  storage: any;
  AskInput: Function;
}) {
  const ProfileCard = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          let name = storage.data.user.name;
          AskInput({
            Element: () => {
              return (
                <View style={{ padding: Constraints.Margin }}>
                  <Text
                    style={[
                      Style.heading,
                      {
                        marginTop: 0,
                        marginBottom: 10,
                        textAlign: "center",
                        fontSize: 22,
                      },
                    ]}
                  >
                    Profile
                  </Text>
                  <Text
                    style={[Style.text, { marginTop: 0, marginBottom: 10 }]}
                  >
                    What's your name ?
                  </Text>
                  <TextInput
                    style={[Style.text, Style.input, Style.inputContainer]}
                    maxLength={20}
                    defaultValue={name}
                    onChangeText={(value) => (name = value)}
                  />
                  <View></View>
                </View>
              );
            },
            submit: {
              text: "Submit",
              function: () => {
                storage.data.user.name = name;
                storage.update();
                return true;
              },
            },
          });
        }}
      >
        <View
          style={{
            borderRadius: Constraints.BorderRadius / 2,
            padding: Constraints.Margin / 2,
            paddingLeft: Constraints.Margin,
            paddingRight: Constraints.Margin,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            height: 64,
            borderWidth: 2,
            borderColor: Colors.dark,
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "Sora",
              fontSize: 20,
              flex: 1,
            }}
          >
            {storage.data.user.name}
          </Text>
          <Text style={[Style.labelText, { width: 70, textAlign: "right" }]}>
            {storage.data.stats[storage.data.stats.length - 1].exp + " Exp"}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const StudySlotsCard = () => {
    const Slot = ({ from, to }: { from: number; to: number }) => {
      return (
        <View
          style={{
            borderColor: Colors.dark,
            borderBottomWidth: 1,
            borderRadius: 1,
            flexDirection: "row",
            alignItems: "center",
            height: 32,
          }}
        >
          <Text style={[{ flex: 3 }, Style.labelText]}>From</Text>
          <Text style={[{ flex: 5 }, Style.text]}>
            {timeIntegerToString(from)}
          </Text>
          <View style={[{ flex: 1 }]}></View>
          <Text style={[{ flex: 2 }, Style.labelText]}>To</Text>
          <Text style={[{ flex: 0 }, Style.text]}>
            {timeIntegerToString(to)}
          </Text>
        </View>
      );
    };
    return (
      <View
        style={{
          borderRadius: Constraints.BorderRadius / 2,
          padding: Constraints.Margin,
          borderWidth: 2,
          borderColor: Colors.dark,
        }}
      >
        <FlatList
          data={storage.data.preferences.studySlots}
          renderItem={({
            item: { from, to },
          }: {
            item: Storage.Type["preferences"]["studySlots"][0];
          }) => <Slot from={from} to={to} />}
        />
      </View>
    );
  };
  const BreakCard = () => {
    return (
      <TouchableOpacity
        style={{
          padding: Constraints.Margin,
          borderRadius: Constraints.BorderRadius / 2,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 2,
          borderColor: Colors.dark,
        }}
        onPress={() => {
          let duration = storage.data.preferences.breakSetting.time.toString();
          let interval =
            storage.data.preferences.breakSetting.interval.toString();
          AskInput({
            Element: () => {
              return (
                <View style={{ padding: Constraints.Margin }}>
                  <Text
                    style={[
                      Style.heading,
                      {
                        marginTop: 0,
                        textAlign: "center",
                        fontSize: 22,
                      },
                    ]}
                  >
                    Break Settings
                  </Text>
                  <Text style={Style.inputText}>Average duration</Text>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignItems: "center",
                      },
                      Style.inputContainer,
                    ]}
                  >
                    <TextInput
                      inputMode="numeric"
                      maxLength={4}
                      defaultValue={duration}
                      onChangeText={(text) => (duration = text)}
                      style={[Style.text, Style.input, { flex: 1 }]}
                    />
                    <Text
                      style={[
                        Style.text,
                        {
                          marginLeft: Constraints.Margin,
                          marginRight: Constraints.Margin,
                        },
                      ]}
                    >
                      Mins
                    </Text>
                  </View>
                  <Text style={Style.inputText}>Average interval</Text>
                  <View
                    style={[
                      {
                        flexDirection: "row",
                        alignItems: "center",
                      },
                      Style.inputContainer,
                    ]}
                  >
                    <TextInput
                      inputMode="numeric"
                      maxLength={4}
                      defaultValue={interval}
                      onChangeText={(text) => (interval = text)}
                      style={[Style.text, Style.input, { flex: 1 }]}
                    />
                    <Text
                      style={[
                        Style.text,
                        {
                          marginLeft: Constraints.Margin,
                          marginRight: Constraints.Margin,
                        },
                      ]}
                    >
                      Mins
                    </Text>
                  </View>
                </View>
              );
            },
            submit: {
              text: "Submit",
              function: () => {
                storage.data.preferences.breakSetting.time = parseInt(duration);
                storage.data.preferences.breakSetting.interval =
                  parseInt(interval);
                storage.update();
                return true;
              },
            },
          });
        }}
      >
        <Text style={Style.labelText}>Breaks for</Text>
        <Text style={Style.text}>
          {timeIntegerToString(
            storage.data.preferences.breakSetting.time,
            true
          )}
        </Text>
        <Text style={Style.labelText}>every</Text>
        <Text style={Style.text}>
          {timeIntegerToString(
            storage.data.preferences.breakSetting.interval,
            true
          )}
        </Text>
      </TouchableOpacity>
    );
  };

  const SubjectsCard = () => {
    const Slot = ({ index }: { index: number }) => {
      let { name, importance } = storage.data.preferences.subjects[index];
      return (
        <TouchableOpacity
          onPress={() => {
            AskInput({
              Element: () => {
                return (
                  <View style={{ padding: Constraints.Margin }}>
                    <Text
                      style={[
                        Style.heading,
                        {
                          marginTop: 0,
                          marginBottom: 10,
                          textAlign: "center",
                          fontSize: 22,
                        },
                      ]}
                    >
                      Subject
                    </Text>
                    <Text
                      style={[Style.text, { marginTop: 0, marginBottom: 10 }]}
                    >
                      Subject name
                    </Text>
                    <TextInput
                      style={[Style.text, Style.input, Style.inputContainer]}
                      maxLength={20}
                      defaultValue={name}
                      onChangeText={(value) => (name = value)}
                    />
                    <Text
                      style={[Style.text, { marginTop: 10, marginBottom: 10 }]}
                    >
                      Importance
                    </Text>
                    <View style={Style.inputContainer}>
                      <Slider
                        style={{ width: "100%", height: 40 }}
                        value={importance}
                        minimumValue={0}
                        maximumValue={1}
                        step={0.1}
                        onSlidingComplete={(value) => (importance = value)}
                        minimumTrackTintColor={Colors.blue}
                        maximumTrackTintColor={Colors.orange}
                        thumbTintColor={Colors.dark}
                      />
                      <View
                        style={{
                          margin: Constraints.Margin / 2,
                          marginTop: 0,
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Text style={[Style.labelText, { fontSize: 12 }]}>
                          Slightly Important
                        </Text>
                        <Text style={[Style.labelText, { fontSize: 12 }]}>
                          Highly Important
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              },
              submit: {
                text: "Submit",
                function: () => {
                  storage.data.preferences.subjects[index] = {
                    name,
                    importance,
                  };
                  storage.update();
                  return true;
                },
              },
            });
          }}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderColor: Colors.dark,
            borderBottomWidth: 1,
            borderRadius: 1,
            height: 32,
            marginBottom: 6,
          }}
        >
          <Text style={Style.text}>{name}</Text>
          <Text style={Style.labelText}>
            {
              ["Slightly Important", "Fairly Important", "Very Important"][
                Math.round(importance * 2)
              ]
            }
          </Text>
        </TouchableOpacity>
      );
    };

    return (
      <View
        style={{
          padding: Constraints.Margin,
          paddingBottom: Constraints.Margin / 2,
          borderRadius: Constraints.BorderRadius / 2,
          borderWidth: 2,
          borderColor: Colors.dark,
        }}
      >
        <FlatList
          data={[...Array(storage.data.preferences.subjects.length).keys()]}
          renderItem={({ item: index }) => <Slot index={index} />}
        />
      </View>
    );
  };

  const elements = [];

  return (
    <View style={{ flex: 1 }}>
      <Header title="Settings"></Header>
      <View
        style={{
          padding: Constraints.Margin,
          paddingTop: 10,
          marginBottom: 80,
        }}
      >
        <Text style={Style.heading}>Profile</Text>
        <ProfileCard />
        <Text style={Style.heading}>Study Slot</Text>
        <StudySlotsCard />
        <Text style={Style.heading}>Break Settings</Text>
        <BreakCard />
        <Text style={Style.heading}>Subjects</Text>
        <SubjectsCard />
      </View>
    </View>
  );
}
