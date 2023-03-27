import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

import ProfileCard from "../components/settings/ProfileCard";
import StudySlotsCard from "../components/settings/StudySlotsCard";
import BreakCard from "../components/settings/BreakCard";
import SubjectsCard from "../components/settings/SubjectsCard";

import { Constraints } from "../../assets/Global";
import { dataType } from "../Storage";

export default function Settings({
  data: { preferences, user },
}: {
  data: dataType;
}) {
  return (
    <View style={styles.container}>
      <Header title="Settings"></Header>
      <View style={styles.body}>
        <Text style={styles.text}>Profile</Text>
        <ProfileCard name={user.name} />
        <Text style={styles.text}>Study Slot</Text>
        <StudySlotsCard studySlots={preferences.studySlots} />
        <Text style={styles.text}>Break Settings</Text>
        <BreakCard
          time={preferences.breakSetting.time}
          interval={preferences.breakSetting.interval}
        />
        <Text style={styles.text}>Subjects</Text>
        <SubjectsCard subjects={preferences.subjects} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    padding: Constraints.Margin,
  },
  text: {},
});
