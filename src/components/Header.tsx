import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
} from "react-native";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <View
        style={
          Platform.OS === "android" ? { height: StatusBar.currentHeight } : {}
        }
      ></View>
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={{ fontSize: 26, fontWeight: "900" }}>{title}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  body: {
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
