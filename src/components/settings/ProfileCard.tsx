import { View, Text, StyleSheet } from "react-native";
import Colors from "../../../assets/Colors";
import { Constraints } from "../../../assets/Global";

export default function ProfileCard({ name }: { name: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constraints.Margin,
    borderRadius: Constraints.BorderRadius / 2,
    backgroundColor: "pink",
  },
  name: {
    color: Colors.white,
  },
});
