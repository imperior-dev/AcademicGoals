import { View, Text, FlatList } from "react-native";
import Header from "../components/Header";

import { Constraints, Style } from "../../assets/Global";
import Colors from "../../assets/Colors";

import { timeIntegerToString } from "../Functions";
import * as Storage from "../Storage";

export default function Settings({
  data: { preferences, user },
}: {
  data: any;
}) {
  const ProfileCard = () => {
    return (
      <View
        style={{
          padding: Constraints.Margin,
          borderRadius: Constraints.BorderRadius / 2,
          backgroundColor: "pink",
        }}
      >
        <Text
          style={{
            color: Colors.white,
          }}
        >
          {user.name}
        </Text>
      </View>
    );
  };

  const BreakCard = () => {
    return (
      <View
        style={{
          padding: Constraints.Margin,
          borderRadius: Constraints.BorderRadius / 2,
          backgroundColor: "pink",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text>A break for</Text>
        <Text>{timeIntegerToString(preferences.breakSetting.time, true)}</Text>
        <Text>every</Text>
        <Text>
          {timeIntegerToString(preferences.breakSetting.interval, true)}
        </Text>
      </View>
    );
  };

  const StudySlotsCard = () => {
    const Slot = ({ from, to }: { from: number; to: number }) => {
      return (
        <View
          style={{
            borderColor: Colors.white,
            borderBottomWidth: 2,
            borderRadius: 1,
            flexDirection: "row",
          }}
        >
          <Text style={{ flex: 5 }}>From</Text>
          <Text style={{ flex: 5 }}>{timeIntegerToString(from)}</Text>
          <View style={{ flex: 4 }}></View>
          <Text style={{ flex: 5 }}>To</Text>
          <Text style={{ flex: 5 }}>{timeIntegerToString(to)}</Text>
        </View>
      );
    };
    return (
      <View
        style={{
          padding: Constraints.Margin,
          borderRadius: Constraints.BorderRadius / 2,
          backgroundColor: "pink",
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
            borderColor: Colors.white,
            borderBottomWidth: 2,
            borderRadius: 1,
          }}
        >
          <Text>{name}</Text>
          <Text>{importance}</Text>
        </View>
      );
    };

    return (
      <View
        style={{
          padding: Constraints.Margin,
          borderRadius: Constraints.BorderRadius / 2,
          backgroundColor: "pink",
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

  return (
    <View style={{ flex: 1 }}>
      <Header title="Settings"></Header>
      <View
        style={{
          padding: Constraints.Margin,
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
