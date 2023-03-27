import { View, Text, StyleSheet, FlatList } from "react-native";
import Colors from "../../../assets/Colors";
import { Constraints } from "../../../assets/Global";
import { dataType } from "../../Storage";

export default function SubjectsCard({
  subjects,
}: {
  subjects: dataType["preferences"]["subjects"];
}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={subjects}
        renderItem={({ item: { name, importance } }) => (
          <SubjectSlot
            name={name}
            importance={
              ["Very Important", "Fairly Important", "Slightly Important"][
                Math.round(importance * 2)
              ]
            }
          />
        )}
      />
    </View>
  );
}

function SubjectSlot({
  name,
  importance,
}: {
  name: string;
  importance: string;
}) {
  return (
    <View style={styles.slot}>
      <Text>{name}</Text>
      <Text>{importance}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constraints.Margin,
    borderRadius: Constraints.BorderRadius / 2,
    backgroundColor: "pink",
  },
  slot: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.white,
    borderBottomWidth: 2,
    borderRadius: 1,
  },
});
