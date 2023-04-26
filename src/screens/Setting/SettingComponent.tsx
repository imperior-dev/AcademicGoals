import { ScrollView, View } from "react-native"

import { BlockComponent } from "../../components/Block/BlockComponent"
import { TextComponent } from "../../components/Text/TextComponent"
import { System } from "../../System"
import { BreakComponent } from "./components/Break/BreakComponent"
import { ProfileComponent } from "./components/Profile/ProfileComponent"
import { SlotsComponent } from "./components/Slots/SlotsComponent"
import { SubjectsComponent } from "./components/Subjects/SubjectsComponent"
import { SettingStyle as Style } from "./SettingStyle"

export function SettingComponent({ system }: { system: System }) {
  return (
    <View style={Style.outer}>
      <ScrollView contentContainerStyle={Style.scrollView}>
        <BlockComponent>
          <TextComponent type="heading">Profile</TextComponent>
          <ProfileComponent system={system} />
        </BlockComponent>
        <BlockComponent>
          <TextComponent type="heading">Breaks</TextComponent>
          <BreakComponent system={system} />
        </BlockComponent>
        <BlockComponent>
          <TextComponent type="heading">Study Slots</TextComponent>
          <SlotsComponent system={system} />
        </BlockComponent>
        <BlockComponent>
          <TextComponent type="heading">Subjects</TextComponent>
          <SubjectsComponent system={system} />
        </BlockComponent>
      </ScrollView>
    </View>
  );
}
