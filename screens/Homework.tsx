import { View, StyleSheet } from "react-native";
import Header from "./Global/Header";

export default function Homework() {
  return (
    <View style={styles.container}>
      <Header></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
});
