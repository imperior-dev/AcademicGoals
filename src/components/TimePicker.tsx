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

export default function Header({
  mode,
  defaultValue,
}: {
  mode: "date" | "time" | "duration";
  defaultValue: any;
}) {
  switch (mode) {
    case "date":
    case "time":
    case "duration":
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "black",
          }}
        ></View>
      );
  }
}
