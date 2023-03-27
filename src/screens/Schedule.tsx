import { View, FlatList, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";
import { Constraints } from "../../assets/Global";

import Header from "../components/Header";
import TaskBlock from "../components/TaskBlock";
import { dataType } from "../Storage";

const data = [
  {
    start: 0,
    end: 45,
    name: "English",
    id: 0,
  },
  {
    start: 60,
    end: 120,
    name: "Math",
    id: 1,
  },
  {
    start: 120,
    end: 150,
    name: "SST",
    id: 2,
  },
  // {
  //   start: 60,
  //   end: 120,
  //   name: "Math",
  //   id: 3,
  // },
  // {
  //   start: 120,
  //   end: 150,
  //   name: "Math",
  //   id: 4,
  // },
  // {
  //   start: 120,
  //   end: 150,
  //   name: "Math",
  //   id: 5,
  // },
];

export default function Schedule({ data: { tasks } }: { data: dataType }) {
  return (
    <View style={styles.container}>
      <Header title="Schedule"></Header>
      <View style={{ flex: 1 }}>
        <View style={styles.extraTop}></View>
        <View style={{ maxHeight: "100%" }}>
          <FlatList
            data={tasks}
            renderItem={({
              item: { start, end, subject },
            }: {
              item: dataType["tasks"][0];
            }) => <TaskBlock start={start} end={end} subject={subject} />}
          />
        </View>
        <View style={styles.extraBottom}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  extraTop: {
    flex: 1,
    marginLeft: Constraints.Margin,
    maxHeight: 16,
    width: 64,
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  extraBottom: {
    flexGrow: 1,
    marginLeft: Constraints.Margin,
    width: 64,
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
});
