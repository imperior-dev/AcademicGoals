import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native";

import Colors from "../../assets/Colors";

import {
  AnalyticsIcon,
  CalendarIcon,
  HomeIcon,
  HomeworkIcon,
  SettingsIcon,
} from "../../assets/Icons";

import Images from "../../assets/Images";

const IconColor = "white";
const IconFadeOpacity = 0.7;

export default function Navbar({
  page,
  setPage,
}: {
  page: string;
  setPage: Function;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <ImageBackground source={Images.navbar}>
        <View style={styles.body}>
          <View style={styles.backgroundOverlay}></View>
          <FlatList
            contentContainerStyle={styles.list}
            data={["analytics", "homework", "home", "calendar", "settings"]}
            numColumns={5}
            renderItem={({ item: name }) => (
              <IconContainer name={name} page={page} setPage={setPage} />
            )}
            keyExtractor={(name) => name}
          />
        </View>
      </ImageBackground>
    </View>
  );
}

function IconContainer({
  name,
  page,
  setPage,
}: {
  name: string;
  page: string;
  setPage: Function;
}) {
  return (
    <TouchableOpacity
      style={[
        styles.iconContainer,
        { opacity: page == name ? IconFadeOpacity : 1 },
      ]}
      onPress={() => {
        setPage(name);
      }}
    >
      {
        {
          analytics: <AnalyticsIcon color={IconColor} />,
          homework: <HomeworkIcon color={IconColor} />,
          home: <HomeIcon color={IconColor} />,
          calendar: <CalendarIcon color={IconColor} />,
          settings: <SettingsIcon color={IconColor} />,
        }[name]
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
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
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
