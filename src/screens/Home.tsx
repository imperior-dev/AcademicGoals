import { View, Text, StyleSheet } from "react-native";

import Colors from "../../assets/Colors";
import { Constraints, Style } from "../../assets/Global";
import Core from "../Core";

export default function Home({ core }: { core: Core }) {
  const { subjects, homework } = core.data.stats[core.data.stats.length - 1];

  const tasks = [...subjects, ...homework];

  let progressBarWidth = (() => {
    const progress = {
      completed: 0,
      total: 0,
    };

    tasks.forEach((task: { status: number }) => {
      if (task.status == 1) {
        progress.completed++;
      }
      progress.total++;
    });

    if (progress.completed == 0) return "5%";

    return Math.round((progress.completed / progress.total) * 100) + "%";
  })();

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: progressBarWidth }]} />
        <View style={styles.borderContainer} />
      </View>
      <Text style={Style.heading}>Today's Progress</Text>
      <View style={styles.taskContainer}>
        <View style={styles.taskTextContainer}>
          <View>
            <Text style={[styles.taskHeading, { color: Colors.white }]}>
              English
            </Text>
            <Text style={[styles.taskText, { color: Colors.white }]}>
              25 Minutes Remaining
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 12,
            backgroundColor: Colors.white,
            opacity: 0.5,
            width: "50%",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
  },
  progressContainer: {
    height: 16,
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: 32,
  },
  progressBar: {
    backgroundColor: Colors.pink,
  },
  borderContainer: {
    flex: 1,
    borderWidth: 2,
    borderLeftWidth: 0,
    borderColor: Colors.dark,
    borderTopRightRadius: 32,
    borderBottomRightRadius: 32,
  },
  taskContainer: {
    backgroundColor: Colors.blue,
    aspectRatio: 5 / 2,
    borderRadius: Constraints.BorderRadius / 2,
  },
  taskTextContainer: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: Constraints.Margin * 2,
  },
  taskHeading: {
    color: Colors.white,
    fontSize: 26,
    marginBottom: 0,
    marginTop: 0,
  },
  taskText: {
    color: Colors.white,
    fontSize: 14,
  },
});
