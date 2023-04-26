import { View } from "react-native"

import { TextComponent } from "../../../../components/Text/TextComponent"
import { System } from "../../../../System"
import { ProfileStyle as Style } from "./ProfileStyle"

export function ProfileComponent({ system }: { system: System }) {
  system.storage.data.user = {
    name: "Aoi",
    exp: 234,
  };
  return (
    <View style={Style.outer}>
      <TextComponent style={Style.username}>
        {system.storage.data.user.name}
      </TextComponent>
      <TextComponent style={Style.exp}>
        {system.storage.data.user.exp + " Exp"}
      </TextComponent>
    </View>
  );
}
