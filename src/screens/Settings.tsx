import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";

import { Constraints, Style } from "../../assets/Global";
import Colors from "../../assets/Colors";

import { timeIntegerToString } from "../Functions";
import * as Storage from "../Storage";

export default function Settings({
  data: { preferences, user, stats },
  AskInput,
}: {
  data: any;
  AskInput: Function;
}) {
  const ProfileCard = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          AskInput({
            Element: () => {
              let name = user.name;
              return (
                <View style={{ flex: 1 }}>
                  <Text style={Style.heading}>Your Name</Text>
                  <TextInput
                    style={Style.text}
                    maxLength={20}
                    onChangeText={(value) => (name = value)}
                  />
                  <View></View>
                </View>
              );
            },
            submit: {
              text: "Submit",
              function: () => {
                console.log("Submited!");
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
            {user.name}
          </Text>
          <Text
            style={[
              Style.text,
              { width: 70, fontSize: 14, textAlign: "right" },
            ]}
          >
            {stats[stats.length - 1].exp + " Exp"}
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
            height: 32,
          }}
        >
          <Text style={[{ flex: 3 }, Style.text]}>From</Text>
          <Text style={[{ flex: 5 }, Style.text]}>
            {timeIntegerToString(from)}
          </Text>
          <View style={[{ flex: 1 }]}></View>
          <Text style={[{ flex: 2 }, Style.text]}>To</Text>
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
          data={preferences.studySlots}
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
      <View
        style={{
          padding: Constraints.Margin,
          borderRadius: Constraints.BorderRadius / 2,
          flexDirection: "row",
          justifyContent: "space-between",
          borderWidth: 2,
          borderColor: Colors.dark,
        }}
      >
        <Text style={Style.text}>A break for</Text>
        <Text style={Style.text}>
          {timeIntegerToString(preferences.breakSetting.time, true)}
        </Text>
        <Text style={Style.text}>every</Text>
        <Text style={Style.text}>
          {timeIntegerToString(preferences.breakSetting.interval, true)}
        </Text>
      </View>
    );
  };

  const SubjectsCard = () => {
    const Slot = ({
      name,
      importance,
    }: {
      name: string;
      importance: string;
    }) => {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: Colors.dark,
            borderBottomWidth: 1,
            borderRadius: 1,
            height: 32,
            marginBottom: 6,
          }}
        >
          <Text style={Style.text}>{name}</Text>
          <Text style={Style.text}>{importance}</Text>
        </View>
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
          data={preferences.subjects}
          renderItem={({ item: { name, importance } }) => (
            <Slot
              name={name}
              importance={
                ["Very Important", "Fairly Important", "Slightly Important"][
                  Math.round(importance * 2)
                ]
              }
            />
          )}
        />
      </View>
    );
  };

  const elements = [
    <Text style={Style.heading}>Profile</Text>,
    <ProfileCard />,
    <Text style={Style.heading}>Study Slot</Text>,
    <StudySlotsCard />,
    <Text style={Style.heading}>Break Settings</Text>,
    <BreakCard />,
    <Text style={Style.heading}>Subjects</Text>,
    <SubjectsCard />,
  ];

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
        <FlatList data={elements} renderItem={({ item }) => item} />
      </View>
    </View>
  );
}
