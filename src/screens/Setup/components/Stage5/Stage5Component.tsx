import { useEffect, useState } from "react"
import { View } from "react-native"

import { Style } from "../../../../../assets/Global"
import { BlockComponent } from "../../../../components/Block/BlockComponent"
import { TextComponent } from "../../../../components/Text/TextComponent"
import { TextInputComponent } from "../../../../components/TextInput/TextInputComponent"
import { System } from "../../../../System"
import { SetupStyle } from "../../SetupStyle"

export function Stage5Component({
  system,
  stage,
  buttonData,
}: {
  system: System;
  stage: number;
  buttonData: any;
}) {
  const settings = system.storage.data.settings;

  const [breakInterval, setBreakInterval] = useState(settings.break.interval);

  useEffect(() => {
    buttonData.setCanNext(false);
  });

  function verifyData() {
    if (
      (parseInt(settings.break.interval.min) > 0 ||
        parseInt(settings.break.interval.hr) > 0) &&
      parseInt(settings.break.interval.min) < 60 &&
      parseInt(settings.break.interval.hr) < 4
    ) {
      buttonData.setCanNext(true);
    } else buttonData.setCanNext(false);
  }

  return (
    <View>
      <BlockComponent>
        <TextComponent style={SetupStyle.questionBorderBox}>
          What should be the gap between your study sessions?
        </TextComponent>
      </BlockComponent>

      <BlockComponent
        style={[SetupStyle.answerBorderBox, SetupStyle.buttonInputOuter]}
      >
        {stage === 5 ? (
          <TextInputComponent
            autoFocus={true}
            defaultValue={breakInterval.hr}
            type="numeric"
            maxLength={2}
            style={SetupStyle.center}
            onChange={(newValue) => {
              breakInterval.hr = newValue;

              settings.break.interval.hr =
                breakInterval.hr.replace(/\D/g, "") || "00";

              setBreakInterval(breakInterval);
              verifyData();
            }}
          />
        ) : (
          <TextComponent type="value" style={SetupStyle.center}>
            {breakInterval.hr}
          </TextComponent>
        )}
        <TextComponent type="button">Hours</TextComponent>
        {stage === 5 ? (
          <TextInputComponent
            defaultValue={breakInterval.min}
            type="numeric"
            maxLength={2}
            style={SetupStyle.center}
            onChange={(newValue) => {
              breakInterval.min = newValue;

              settings.break.interval.min =
                breakInterval.min.replace(/\D/g, "") || "00";
              setBreakInterval(breakInterval);
              verifyData();
            }}
          />
        ) : (
          <TextComponent type="value" style={SetupStyle.center}>
            {breakInterval.min}
          </TextComponent>
        )}
        <TextComponent type="button">Minute</TextComponent>
      </BlockComponent>
    </View>
  );
}
