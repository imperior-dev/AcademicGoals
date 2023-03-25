import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  StyleSheet,
  ImageBackground,
} from "react-native";

import Colors from "../../assets/Colors";
import Images from "../../assets/Images";

export default function Header({ title }: { title: string }) {
  return (
    <View>
      <ImageBackground source={Images.header}>
        <View style={styles.backgroundOverlay}></View>
        <View
          style={
            Platform.OS === "android" && StatusBar.currentHeight !== undefined
              ? { height: StatusBar.currentHeight / 2 }
              : {}
          }
        ></View>
        <SafeAreaView>
          <View style={styles.body}>
            <Text
              style={{ fontSize: 24, fontWeight: "900", color: Colors.white }}
            >
              {title}
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <View style={styles.line}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    marginTop: 4,
    height: 4,
    backgroundColor: Colors.blue,
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    opacity: 0.8,
    backgroundColor: Colors.blue,
  },
  body: {
    height: 64,
    justifyContent: "center",
    alignItems: "center",
  },
});
