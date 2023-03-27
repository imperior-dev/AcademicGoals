import { View, Text, StyleSheet } from "react-native";
import { Constraints } from "../../../assets/Global";

export default function HomeworkCard({
  subject,
  timeRequired,
  dueDate,
}: {
  subject: string;
  timeRequired: number;
  dueDate: number;
}) {
  const dateObject = new Date(dueDate);
  const dateString = dateObject.getDate() + "/" + (dateObject.getMonth() + 1);

  return (
    <View style={styles.container}>
      <View style={styles.valueContainer}>
        <Text style={styles.subject}>{subject}</Text>
        <Text style={styles.time}>{timeRequired}</Text>
        <Text style={styles.date}>{dateString}</Text>
      </View>
      <View style={styles.textContainer}>
        <View style={{ flex: 1 }} />
        <Text style={{ flex: 1, textAlign: "center" }}>Time Required</Text>
        <Text style={{ flex: 1, textAlign: "center" }}>Due Date</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: Constraints.Margin,
    marginBottom: 0,
    height: 72,
    borderRadius: Constraints.BorderRadius,
    overflow: "hidden",
    backgroundColor: "pink",
  },
  valueContainer: {
    flex: 10,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  subject: { flex: 1, textAlign: "center" },
  time: { flex: 1, textAlign: "center" },
  date: { flex: 1, textAlign: "center" },
  textContainer: {
    flex: 6,
    flexDirection: "row",
  },
});
