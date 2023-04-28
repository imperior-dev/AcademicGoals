import { View } from "react-native"

import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { SetupStyle } from "../../SetupStyle"

export function Stage8Component() {
  return (
    <View>
      <BlockComponent>
        <TextComponent style={SetupStyle.questionBorderBox}>
          All Set!
        </TextComponent>
      </BlockComponent>
    </View>
  );
}
