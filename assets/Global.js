import { Dimensions, StyleSheet } from "react-native";

const IsLandscape =
  Dimensions.get("window").width > Dimensions.get("window").height;

const fonts = StyleSheet.create({
  h1: {
    color: "white",
    fontSize: IsLandscape ? 120 : 50,
    fontWeight: "bold",
  },
  h2: { color: "black", fontSize: IsLandscape ? 38 : 22, fontWeight: "900" },
  h3: { color: "white", fontSize: IsLandscape ? 38 : 22, fontWeight: "900" },
  h4: { color: "white", fontSize: IsLandscape ? 24 : 16, fontWeight: "900" },
  h5: { color: "white", fontSize: 100 },
});

export default {
  LineWidth: 2,
  IconSize: IsLandscape ? 30 : 20,
  BorderRadius: IsLandscape ? 30 : 20,
  IsLandscape,
  pages: {
    home: "home",
    homework: "homework",
    analytics: "analytics",
    schedule: "schedule",
    settings: "settings",
  },
  fonts,
  margin: IsLandscape ? 20 : 15,
};
