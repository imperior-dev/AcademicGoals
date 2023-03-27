import { View, Text, StyleSheet } from "react-native";
import { Constraints } from "../../../assets/Global";
import { timeIntegerToString } from "../../Functions";

export default function BreakCard({
  time,
  interval,
}: {
  time: number;
  interval: number;
}) {
  return (
    <View style={styles.container}>
      <Text>A break for</Text>
      <Text>{timeIntegerToString(time, true)}</Text>
      <Text>every</Text>
      <Text>{timeIntegerToString(interval, true)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constraints.Margin,
    borderRadius: Constraints.BorderRadius / 2,
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
