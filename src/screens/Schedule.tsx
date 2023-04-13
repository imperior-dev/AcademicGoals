import { View, Text, FlatList, StyleSheet } from "react-native";

import Colors from "../../assets/Colors";
import { Constraints } from "../../assets/Global";
import { EditsIcon } from "../../assets/Icons";
import { timeIntegerToString } from "../Functions";

import Header from "../components/Header";
import Core from "../Core";

export default function Schedule({ core }: { core: Core }) {
  const TaskBlock = ({
    start,
    end,
    subject,
  }: {
    start: number;
    end: number;
    subject: string;
  }) => {
    const duration = end - start;
    const cardHeight = duration < 30 ? 64 : Math.floor((duration / 30) * 64);

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
        borderColor: Colors.dark,
        borderRightWidth: 2,
        borderLeftWidth: 2,
        alignItems: "center",
        justifyContent: "space-between",
      },
      startTime: {
        marginTop: 13,
        fontFamily: "Sora",
        fontSize: 12,
        color: Colors.black,
      },
      endTime: {
        marginBottom: 13,
        fontFamily: "Sora",
        fontSize: 12,
        color: Colors.black,
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
        borderWidth: 2,
        borderLeftWidth: 0,
        borderColor: Colors.dark,
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
        color: Colors.black,
        fontSize: 22,
        fontWeight: "bold",
      },
      time: {
        color: Colors.black,
        fontSize: 16,
        fontWeight: "bold",
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.timeBlock}>
          <Text style={styles.startTime}>{timeIntegerToString(start)}</Text>
          <View style={styles.timeDivider} />
          <Text style={styles.endTime}>{timeIntegerToString(end)}</Text>
        </View>
        <View style={styles.taskContainer}>
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
              <EditsIcon color={Colors.dark} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Header title="Schedule"></Header>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            marginLeft: Constraints.Margin,
            maxHeight: 16,
            width: 64,
            backgroundColor: Colors.white,
            borderColor: Colors.dark,
            borderRightWidth: 2,
            borderLeftWidth: 2,
          }}
        ></View>
        <View style={{ maxHeight: "100%" }}>
          <FlatList
            data={core.data.tasks}
            renderItem={({ item: { start, end, subject } }) => (
              <TaskBlock start={start} end={end} subject={subject} />
            )}
          />
        </View>
        <View
          style={{
            flexGrow: 1,
            marginLeft: Constraints.Margin,
            width: 64,
            backgroundColor: Colors.white,
            borderColor: Colors.dark,
            borderRightWidth: 2,
            borderLeftWidth: 2,
          }}
        ></View>
      </View>
    </View>
  );
}
