import Slider from "@react-native-community/slider";
import Colors from "../../assets/Colors";

export default function InputSlider({
  minimumValue,
  maximumValue,
  defaultValue,
  onChange,
  steps,
}: {
  minimumValue: number;
  maximumValue: number;
  defaultValue: number;
  onChange: (value: number) => void;
  steps?: number;
}) {
  return (
    <Slider
      style={{ height: 36, flex: 1 }}
      minimumValue={minimumValue}
      maximumValue={maximumValue}
      value={defaultValue}
      step={steps}
      onSlidingComplete={onChange}
      minimumTrackTintColor={Colors.blue}
      maximumTrackTintColor={Colors.orange}
      thumbTintColor={Colors.dark}
    />
  );
}
