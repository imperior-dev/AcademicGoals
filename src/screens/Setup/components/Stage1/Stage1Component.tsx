import { View } from "react-native"

import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SetupStyle } from "../../SetupStyle"

export function Stage1Component({
  system,
  stage,
  buttonData,
}: {
  system: System;
  stage: number;
  buttonData: any;
}) {
  const settings = system.storage.data.settings;

  function verifyData() {
    if (
      settings.user.name.split(".").length == 1 &&
      settings.user.name.split("").length > 1
    ) {
      if (
        settings.user.name.split(" ").length == 2 &&
        settings.user.name.split(" ")[1] == ""
      ) {
        settings.user.name = settings.user.name.split(" ")[0];
      }
      if (settings.user.name.split(" ").length == 1) {
        buttonData.setCanNext(true);
      } else buttonData.setCanNext(false);
    } else buttonData.setCanNext(false);
  }

  return (
    <View>
      <BlockComponent>
        <TextComponent style={{ fontSize: 28, marginBottom: 6 }}>
          Hello!
        </TextComponent>
        <TextComponent>Lets setup the app for you.</TextComponent>
      </BlockComponent>

      <BlockComponent style={SetupStyle.questionBorderBox}>
        <TextComponent>What's your name?</TextComponent>
      </BlockComponent>

      <BlockComponent style={SetupStyle.answerBorderBox}>
        {stage == 1 ? (
          <TextInputComponent
            autoFocus={true}
            defaultValue={settings.user.name}
            onChange={(newValue) => {
              settings.user.name = newValue;
              verifyData();
            }}
          />
        ) : (
          <TextComponent type="value">{settings.user.name}</TextComponent>
        )}
      </BlockComponent>
    </View>
  );
}
