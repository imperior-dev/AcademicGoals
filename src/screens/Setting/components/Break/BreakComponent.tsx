import { View } from "react-native"

import { TextComponent } from "../../../../components/Text/TextComponent"
import { System } from "../../../../System"
import { BreakStyle as Style } from "./BreakStyle"

export function BreakComponent({ system }: { system: System }) {
  system.storage.data.break = {
    duration: 30,
    interval: 30,
  };
  return (
    <View style={Style.outer}>
      <TextComponent>Break for</TextComponent>
      <TextComponent type="value">
        {system.storage.data.break.duration + " Mins"}
      </TextComponent>
      <TextComponent>every</TextComponent>
      <TextComponent type="value">
        {system.storage.data.break.interval + " Mins"}
      </TextComponent>
    </View>
  );
}
