import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Constraints } from "../../assets/Global";

import Header from "../components/Header";

import Leaderboard from "../components/analytics/Leaderboard";
import TodaysReport from "../components/analytics/TodaysReport";
import WeeksReport from "../components/analytics/WeeksReport";
import MonthsReport from "../components/analytics/MonthsReport";
import { dataType } from "../Storage";

export default function Analytics({ data }: { data: dataType }) {
  return (
    <View>
      <Header title="Analytics"></Header>
      <ScrollView style={styles.container}>
        <Text>Leaderboard</Text>
        <Leaderboard user={data.user} leaderboard={data.leaderboard} />
        <Text>Today's Report</Text>
        <TodaysReport />
        <Text>Week's Report</Text>
        <WeeksReport />
        <Text>Month's Report</Text>
        <MonthsReport />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constraints.Margin,
  },
});
