import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import {
  AnalyticsIcon,
  CalendarIcon,
  HomeIcon,
  HomeworkIcon,
  SettingsIcon,
} from "../../assets/Icons";
import Colors from "../../assets/Colors";
import Images from "../../assets/Images";

import Core from "../Core";
import { pageType } from "../types/core";

const IconColor = "white";
const IconFadeOpacity = 0.7;

export default function Navbar({ core }: { core: Core }) {
  const icons: { [key: string]: Function } = {
    analytics: AnalyticsIcon,
    homework: HomeworkIcon,
    home: HomeIcon,
    schedule: CalendarIcon,
    setting: SettingsIcon,
  };

  return (
    <View style={styles.container}>
      <View style={styles.line}></View>

      <ImageBackground source={Images.navbar}>
        <View style={styles.body}>
          <View style={styles.backgroundOverlay}></View>
          <View style={styles.list}>
            {Object.keys(icons).map((iconName) => {
              const Icon = icons[iconName];
              return (
                <TouchableOpacity
                  key={iconName}
                  style={[
                    styles.iconContainer,
                    {
                      opacity: iconName == core.page ? IconFadeOpacity : 1,
                    },
                  ]}
                  onPress={() => {
                    core.navigateTo(iconName as pageType);
                  }}
                >
                  <Icon color={IconColor} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  line: {
    height: 4,
    marginBottom: 4,
    backgroundColor: Colors.orange,
  },
  body: {
    height: 64,
    position: "relative",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: Colors.orange,
    opacity: 0.9,
  },
  list: {
    flex: 1,
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
