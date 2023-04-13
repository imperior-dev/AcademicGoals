import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Slider from "@react-native-community/slider";

import Header from "../components/Header";

import { Constraints, Style } from "../../assets/Global";
import Colors from "../../assets/Colors";

import { timeIntegerToString } from "../Functions";
import * as Storage from "../Storage";
import Core from "../Core";

export default function Settings({ core }: { core: Core }) {
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
        <ProfileCard core={core} />
        <Text style={Style.heading}>Study Slots</Text>
        <StudySlotsCard core={core} />
        <Text style={Style.heading}>Break Settings</Text>
        <BreakCard core={core} />
        <Text style={Style.heading}>Subjects</Text>
        <SubjectsCard core={core} />
      </View>
    </View>
  );
}

function ProfileCard({ core }: { core: Core }) {
  return (
    <TouchableOpacity
      onPress={() => {
        //TODO Edit Profile
      }}
    >
      <View style={profileStyles.profileContainer}>
        <Text style={profileStyles.nameText}>{core.data.user.name}</Text>
        <Text style={profileStyles.expText}>
          {core.data.stats[core.data.stats.length - 1].exp} Exp
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const profileStyles = StyleSheet.create({
  profileContainer: {
    borderRadius: Constraints.BorderRadius / 2,
    padding: Constraints.Margin / 2,
    paddingHorizontal: Constraints.Margin,
    flexDirection: "row",
    alignItems: "center",
    height: 64,
    borderWidth: 2,
    borderColor: Colors.dark,
  },
  nameText: {
    flex: 1,
    fontFamily: "Sora",
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
  expText: {
    fontFamily: "Sora",
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.black,
  },
});

function StudySlotsCard({ core }: { core: Core }) {
  const StudySlot = ({ from, to }: { from: number; to: number }) => {
    return (
      <View style={studySlotsCardStyles.studySlotContainer}>
        <Text style={[studySlotsCardStyles.labelText, Style.labelText]}>
          From
        </Text>
        <Text style={[studySlotsCardStyles.text, Style.text]}>
          {timeIntegerToString(from)}
        </Text>
        <View style={{ flex: 1 }}></View>
        <Text style={[{ flex: 2 }, Style.labelText]}>To</Text>
        <Text style={[{ flex: 0 }, Style.text]}>{timeIntegerToString(to)}</Text>
      </View>
    );
  };

  return (
    <View style={studySlotsCardStyles.studySlotsCardContainer}>
      <FlatList
        data={core.data.preferences.studySlots}
        renderItem={({ item }: { item: { from: number; to: number } }) => (
          <StudySlot from={item.from} to={item.to} />
        )}
      />
    </View>
  );
}

const studySlotsCardStyles = StyleSheet.create({
  studySlotContainer: {
    borderColor: Colors.dark,
    borderBottomWidth: 1,
    borderRadius: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 32,
  },
  labelText: {
    flex: 3,
  },
  text: {
    flex: 5,
  },
  studySlotsCardContainer: {
    borderRadius: Constraints.BorderRadius / 2,
    padding: Constraints.Margin,
    borderWidth: 2,
    borderColor: Colors.dark,
  },
});

function BreakCard({ core }: { core: Core }) {
  return (
    <TouchableOpacity
      style={breakCardStyles.breakCardContainer}
      onPress={() => {
        //TODO Edit breaks
      }}
    >
      <Text style={Style.labelText}>Breaks for</Text>
      <Text style={Style.text}>
        {timeIntegerToString(core.data.preferences.breakSetting.time, true)}
      </Text>
      <Text style={Style.labelText}>every</Text>
      <Text style={Style.text}>
        {timeIntegerToString(core.data.preferences.breakSetting.interval, true)}
      </Text>
    </TouchableOpacity>
  );
}

const breakCardStyles = StyleSheet.create({
  breakCardContainer: {
    padding: Constraints.Margin,
    borderRadius: Constraints.BorderRadius / 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 2,
    borderColor: Colors.dark,
  },
});

function SubjectsCard({ core }: { core: Core }) {
  const Slot = ({ index }: { index: number }) => {
    let { name, importance } = core.data.preferences.subjects[index];
    return (
      <TouchableOpacity
        onPress={() => {
          //TODO Edit Subject
        }}
        style={subjectsCardStyles.subjectSlotContainer}
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
    <View style={subjectsCardStyles.subjectsCardContainer}>
      <FlatList
        data={[...Array(core.data.preferences.subjects.length).keys()]}
        renderItem={({ item: index }) => <Slot index={index} />}
      />
    </View>
  );
}

const subjectsCardStyles = StyleSheet.create({
  subjectsCardContainer: {
    padding: Constraints.Margin,
    paddingBottom: Constraints.Margin / 2,
    borderRadius: Constraints.BorderRadius / 2,
    borderWidth: 2,
    borderColor: Colors.dark,
  },
  subjectSlotContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: Colors.dark,
    borderBottomWidth: 1,
    borderRadius: 1,
    height: 32,
    marginBottom: 6,
  },
});
