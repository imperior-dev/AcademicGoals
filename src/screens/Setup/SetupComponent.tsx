import { useEffect, useRef, useState } from "react"
import { ScrollView, TouchableOpacity, View } from "react-native"

import Colors from "../../../assets/Colors"
import { TextComponent } from "../../components/Text/TextComponent"
import { System } from "../../System"
//Stages
import { Stage1Component } from "./components/Stage1/Stage1Component"
import { Stage2Component } from "./components/Stage2/Stage2Component"
import { Stage3Component } from "./components/Stage3/Stage3Component"
import { Stage4Component } from "./components/Stage4/Stage4Component"
import { Stage5Component } from "./components/Stage5/Stage5Component"
import { Stage6Component } from "./components/Stage6/Stage6Component"
import { Stage7Component } from "./components/Stage7/Stage7Component"
import { Stage8Component } from "./components/Stage8/Stage8Component"
import { SetupStyle as Style } from "./SetupStyle"

export function SetupComponent({ system }: { system: System }) {
  const [stage, setStage] = useState(1);
  const button: any = {};

  if (button.setCanNext) button.setCanNext(false);

  function NextButtonComponent() {
    const [canNext, setNext] = useState(false);
    button.setCanNext = setNext;
    return (
      <TouchableOpacity
        style={[
          Style.buttonOuter,
          { backgroundColor: canNext ? Colors.blue : Colors.grey },
        ]}
        onPress={() => {
          if (canNext) setStage(stage + 1);
        }}
      >
        <TextComponent style={Style.buttonText}>Next</TextComponent>
      </TouchableOpacity>
    );
  }

  let scrollViewRef = useRef<ScrollView | null>(null);

  return (
    <View style={Style.outer}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef?.current?.scrollToEnd({ animated: true });
        }}
      >
        {stage > 0 ? (
          <Stage1Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 1 ? (
          <Stage2Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 2 ? (
          <Stage3Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 3 ? (
          <Stage4Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 4 ? (
          <Stage5Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 5 ? (
          <Stage6Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 6 ? (
          <Stage7Component system={system} stage={stage} buttonData={button} />
        ) : null}
        {stage > 7 ? <Stage8Component /> : null}

        <TextComponent style={Style.descriptionText}>
          {
            [
              "Please provide your first name ONLY",
              `Write one subject at once. Use the "Add" button to add multiple subjects.`,
              `Selecting "Hard" will make sure you get more time for those subjects.`,
              `A 15 mins break between constant study is always recomended.`,
              `The longer the gap, the longer will be each study sessions.`,
              `These are going to be your study time slots. Make sure to avoid times when you will prolly be busy or having food.`,
              `It's always best to study more on weekends. Maybe press the "Add" button to add a morning session.`,
            ][stage - 1]
          }
        </TextComponent>
        <NextButtonComponent />
        <View style={{ height: 64 }}></View>
      </ScrollView>
    </View>
  );
}
