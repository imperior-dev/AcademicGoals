import { useEffect, useState } from "react"
import { View } from "react-native"

import { Style } from "../../../../../assets/Global"
import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SetupStyle } from "../../SetupStyle"

export function Stage4Component({
  system,
  stage,
  buttonData,
}: {
  system: System;
  stage: number;
  buttonData: any;
}) {
  const settings = system.storage.data.settings;

  const [breakDuration, setBreakDuration] = useState(settings.break.duration);

  useEffect(() => {
    buttonData.setCanNext(false);
  });

  function verifyData() {
    if (
      (parseInt(settings.break.duration.min) > 0 ||
        parseInt(settings.break.duration.hr) > 0) &&
      parseInt(settings.break.duration.min) < 60 &&
      parseInt(settings.break.duration.hr) < 4
    ) {
      buttonData.setCanNext(true);
    } else buttonData.setCanNext(false);
  }

  return (
    <View>
      <BlockComponent>
        <TextComponent style={SetupStyle.questionBorderBox}>
          Subjects are all set. Now lets make your schedule.
        </TextComponent>
      </BlockComponent>

      <BlockComponent>
        <TextComponent style={SetupStyle.questionBorderBox}>
          How long breaks do you need while studying?
        </TextComponent>
      </BlockComponent>

      <BlockComponent
        style={[SetupStyle.answerBorderBox, SetupStyle.buttonInputOuter]}
      >
        {stage === 4 ? (
          <TextInputComponent
            defaultValue={breakDuration.hr}
            type="numeric"
            maxLength={2}
            style={SetupStyle.center}
            onChange={(newValue) => {
              breakDuration.hr = newValue;

              settings.break.duration.hr =
                breakDuration.hr.replace(/\D/g, "") || "00";

              setBreakDuration(breakDuration);
              verifyData();
            }}
          />
        ) : (
          <TextComponent type="value" style={SetupStyle.center}>
            {breakDuration.hr}
          </TextComponent>
        )}
        <TextComponent type="button">Hours</TextComponent>
        {stage === 4 ? (
          <TextInputComponent
            autoFocus={true}
            defaultValue={breakDuration.min}
            type="numeric"
            maxLength={2}
            style={SetupStyle.center}
            onChange={(newValue) => {
              breakDuration.min = newValue;

              settings.break.duration.min =
                breakDuration.min.replace(/\D/g, "") || "00";
              setBreakDuration(breakDuration);
              verifyData();
            }}
          />
        ) : (
          <TextComponent type="value" style={SetupStyle.center}>
            {breakDuration.min}
          </TextComponent>
        )}
        <TextComponent type="button">Minute</TextComponent>
      </BlockComponent>
    </View>
  );
}
