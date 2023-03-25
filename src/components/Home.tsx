import { View, Text, StyleSheet } from "react-native";
import Colors from "../../assets/Colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.header}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 10,
    height: "30%", //TODO
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  header: {
    width: 50,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.blue,
  },
});
