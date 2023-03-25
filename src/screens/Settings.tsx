import { View, StyleSheet } from "react-native";
import Header from "../components/Header";

export default function Settings() {
  return (
    <View style={styles.container}>
      <Header title="Settings"></Header>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
