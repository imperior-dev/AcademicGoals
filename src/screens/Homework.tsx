import { View, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";
import HomeworkCard from "../components/homework/HomeworkCard";
import { dataType } from "../Storage";

export default function Homework({ data: { homework } }: { data: dataType }) {
  return (
    <View style={styles.container}>
      <Header title="Homework"></Header>
      <FlatList
        data={homework}
        renderItem={({
          item: { subject, timeRequired, dueDate },
        }: {
          item: dataType["homework"][0];
        }) => (
          <HomeworkCard
            subject={subject}
            timeRequired={timeRequired}
            dueDate={dueDate}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
