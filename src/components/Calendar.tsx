import { View, StyleSheet } from "react-native";
import Header from "./Header";

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Header title="Calendar"></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
