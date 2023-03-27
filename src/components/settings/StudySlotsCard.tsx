import { startTransition } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../../../assets/Colors";
import { Constraints } from "../../../assets/Global";
import { timeIntegerToString } from "../../Functions";
import { dataType } from "../../Storage";

const data = [
  {
    start: "9:30 AM",
    end: "10:30 AM",
    id: 0,
  },
  {
    start: "10:30 AM",
    end: "1:00 AM",
    id: 1,
  },
];

export default function StudySlotsCard({
  studySlots,
}: {
  studySlots: dataType["preferences"]["studySlots"];
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={studySlots}
        renderItem={({
          item: { from, to },
        }: {
          item: dataType["preferences"]["studySlots"][0];
        }) => <SlotCard from={from} to={to} />}
      />
    </View>
  );
}

function SlotCard({ from, to }: { from: number; to: number }) {
  return (
    <View style={styles.card}>
      <Text style={styles.fromText}>From</Text>
      <Text style={styles.fromValue}>{timeIntegerToString(from)}</Text>
      <View style={styles.gap}></View>
      <Text style={styles.toText}>To</Text>
      <Text style={styles.toValue}>{timeIntegerToString(to)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constraints.Margin,
    borderRadius: Constraints.BorderRadius / 2,
    backgroundColor: "pink",
  },
  card: {
    borderColor: Colors.white,
    borderBottomWidth: 2,
    borderRadius: 1,
    flexDirection: "row",
  },
  fromText: { flex: 5 },
  fromValue: { flex: 5 },
  gap: { flex: 4 },
  toText: { flex: 5 },
  toValue: { flex: 5 },
});
