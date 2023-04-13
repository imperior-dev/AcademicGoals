import { View, Text, FlatList, StyleSheet } from "react-native";

import Header from "../components/Header";

import { Constraints, Style } from "../../assets/Global";
import Colors from "../../assets/Colors";
import * as Storage from "../Storage";
import Core from "../Core";

export default function Homework({ core }: { core: Core }) {
  const HomeworkCard = ({ subject, timeRequired, dueDate }: any) => {
    const dateObject = new Date(dueDate);
    const dateString = dateObject.getDate() + "/" + (dateObject.getMonth() + 1);

    return (
      <View
        style={{
          margin: Constraints.Margin,
          marginTop: 0,
          marginBottom: 0,
          height: 72,
          borderRadius: Constraints.BorderRadius,
          overflow: "hidden",
          borderWidth: 2,
          borderColor: Colors.dark,
        }}
      >
        <View
          style={{
            flex: 10,
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={[
              Style.heading,
              { flex: 1, textAlign: "center", marginBottom: -2 },
            ]}
          >
            {subject}
          </Text>
          <Text style={[Style.text, { flex: 1, textAlign: "center" }]}>
            {timeRequired}
          </Text>
          <Text style={[Style.text, { flex: 1, textAlign: "center" }]}>
            {dateString}
          </Text>
        </View>
        <View
          style={{
            flex: 6,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }} />
          <Text
            style={[Style.text, { flex: 1, textAlign: "center", fontSize: 12 }]}
          >
            Time Required
          </Text>
          <Text
            style={[Style.text, { flex: 1, textAlign: "center", fontSize: 12 }]}
          >
            Due Date
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header title="Homework"></Header>
      <FlatList
        data={core.data.homework}
        contentContainerStyle={{
          paddingTop: Constraints.Margin,
          gap: Constraints.Margin / 2,
        }}
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
