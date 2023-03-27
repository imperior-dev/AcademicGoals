import { View, Text, FlatList, StyleSheet } from "react-native";
import { dataType } from "../../Storage";

export default function Leaderboard({
  user,
  leaderboard,
}: {
  user: dataType["user"];
  leaderboard: dataType["leaderboard"];
}) {
  return <View style={styles.container}></View>;
}

function Card({
  rank,
  name,
  exp,
}: {
  rank: number;
  name: string;
  exp: number;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    height: 240,
  },
});
