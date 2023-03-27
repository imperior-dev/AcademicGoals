import { View, Text, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";

import { Constraints } from "../../assets/Global";
import * as Storage from "../Storage";

export default function Homework({ data: { homework } }: { data: any }) {
  const HomeworkCard = ({ subject, timeRequired, dueDate }: any) => {
    const dateObject = new Date(dueDate);
    const dateString = dateObject.getDate() + "/" + (dateObject.getMonth() + 1);

    return (
      <View
        style={{
          margin: Constraints.Margin,
          marginBottom: 0,
          height: 72,
          borderRadius: Constraints.BorderRadius,
          overflow: "hidden",
          backgroundColor: "pink",
        }}
      >
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text style={{ flex: 1, textAlign: "center" }}>{subject}</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>{timeRequired}</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>{dateString}</Text>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }} />
          <Text style={{ flex: 1, textAlign: "center" }}>Time Required</Text>
          <Text style={{ flex: 1, textAlign: "center" }}>Due Date</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header title="Homework"></Header>
      <FlatList
        data={homework}
        renderItem={({
          item: { subject, timeRequired, dueDate },
        }: {
          item: Storage.Type["homework"][0];
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
