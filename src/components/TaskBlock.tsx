import { View, Text, StyleSheet } from "react-native";

import Colors from "../../assets/Colors";
import { EditsIcon } from "../../assets/Icons";
import { Constraints } from "../../assets/Global";

import { timeIntegerToString } from "../Functions";

const FontColor = "#505050";

export default function TaskBlock({
  start,
  end,
  subject,
}: {
  start: number;
  end: number;
  subject: string;
}) {
  const duration = end - start;
  const cardHeight = duration < 30 ? 64 : Math.floor((duration / 30) * 64);
  return (
    <View style={styles.container}>
      <View style={styles.timeBlock}>
        <Text style={styles.startTime}>{timeIntegerToString(start)}</Text>
        <View style={styles.timeDivider} />
        <Text style={styles.endTime}>{timeIntegerToString(end)}</Text>
      </View>
      <View style={styles.taskContainer}>
        <View style={styles.taskDivider} />
        <View style={[styles.taskCard, { height: cardHeight }]}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{subject}</Text>
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {timeIntegerToString(end - start, true)}
            </Text>
          </View>
          <View style={styles.editIconContainer}>
            <EditsIcon color="white" />
          </View>
        </View>
        <View style={styles.taskDivider} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: Constraints.Margin,
    paddingRight: Constraints.Margin,
    flexDirection: "row",
  },
  timeDivider: {
    height: 1,
    width: "60%",
    backgroundColor: Colors.grey,
  },
  timeBlock: {
    width: 64,
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  startTime: {
    marginTop: 13,
    fontFamily: "Sora",
    fontSize: 12,
    color: FontColor,
  },
  endTime: {
    marginBottom: 13,
    fontFamily: "Sora",
    fontSize: 12,
    color: FontColor,
  },
  taskContainer: {
    flex: 1,
    marginBottom: 5,
  },
  taskDivider: {
    height: 1,
    marginTop: 5,
    width: "100%",
    backgroundColor: Colors.grey,
  },
  taskCard: {
    marginTop: 5,
    flexDirection: "row",
    borderBottomRightRadius: Constraints.BorderRadius / 2,
    borderTopRightRadius: Constraints.BorderRadius / 2,
    backgroundColor: "#0FDA85",
  },
  nameContainer: {
    flex: 1,
    justifyContent: "center",
  },
  timeContainer: {
    justifyContent: "center",
  },
  editIconContainer: {
    flex: 0,
    alignItems: "flex-end",
    paddingTop: 8,
    paddingRight: 8,
  },
  name: {
    marginLeft: 16,
    color: Colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  time: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
