import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const Constraints = {
  IsLandscape: width > height * 0.7,
  Margin: 20,
  BorderRadius: 20,
};

export { Constraints };
