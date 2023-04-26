import { View } from "react-native"

import { TextComponent } from "../../../../components/Text/TextComponent"
import { System } from "../../../../System"
import { SlotsStyle as Style } from "./SlotsStyle"

export function SlotsComponent({ system }: { system: System }) {
  system.storage.data.slots = [
    { from: 120, to: 200, id: 0 },
    { from: 120, to: 200, id: 1 },
  ];
  return (
    <View style={Style.outer}>
      {system.storage.data.slots.map(
        ({ from, to, id }: { from: number; to: number; id: number }) => {
          return (
            <View key={id} style={Style.slot}>
              <TextComponent>From</TextComponent>
              <TextComponent type="value">{from + " Mins"}</TextComponent>
              <TextComponent>to</TextComponent>
              <TextComponent type="value">{to + " Mins"}</TextComponent>
            </View>
          );
        }
      )}
    </View>
  );
}
