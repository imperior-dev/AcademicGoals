import { ScrollView, View } from "react-native"

import Colors from "../../../assets/Colors"
import { BlockComponent } from "../../components/Block/BlockComponent"
import { TextComponent } from "../../components/Text/TextComponent"
import { TextInputComponent } from "../../components/TextInput/TextInputComponent"
import { SetupStyle as Style } from "./SetupStyle"

export function SetupComponent() {
  return (
    <View style={Style.outer}>
      <ScrollView>
        <BlockComponent>
          <TextComponent style={{ fontSize: 28, marginBottom: 6 }}>
            Hello!
          </TextComponent>
          <TextComponent>Lets setup the app for you.</TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.questionBorderBox}>
          <TextComponent>What's your name?</TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.answerBorderBox}>
          <TextInputComponent autoFocus={true} />
        </BlockComponent>

        <BlockComponent style={Style.questionBorderBox}>
          <TextComponent>
            Pleased to meet you Aoi. What are your subjects?
          </TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.answerBorderBox}>
          <TextComponent type="value">English</TextComponent>
          <View
            style={{
              height: 1,
              backgroundColor: Colors.grey,
              marginVertical: 8,
            }}
          ></View>
          <TextComponent type="value">Hindi</TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.answerBorderBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <TextInputComponent autoFocus={true} />
            <TextComponent>Add</TextComponent>
          </View>
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            Are these subject hard or time consuming?
          </TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.answerBorderBox}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <TextComponent type="value">English</TextComponent>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TextComponent>Yes</TextComponent>
              <TextComponent>No</TextComponent>
            </View>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: Colors.grey,
              marginVertical: 8,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 10,
            }}
          >
            <TextComponent type="value">Hindi</TextComponent>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <TextComponent>Yes</TextComponent>
              <TextComponent>No</TextComponent>
            </View>
          </View>
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            Subjects are all set. Now lets make your schedule.
          </TextComponent>
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            How long breaks do you need while studying?
          </TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.answerBorderBox}>
          <TextInputComponent autoFocus={true} />
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            What should be the gap between breaks?
          </TextComponent>
        </BlockComponent>

        <BlockComponent style={Style.answerBorderBox}>
          <TextInputComponent autoFocus={true} />
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            Time to add your study timings. Lets start with weekdays.
          </TextComponent>
        </BlockComponent>

        <BlockComponent
          style={[
            Style.answerBorderBox,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          ]}
        >
          <TextComponent>From</TextComponent>
          <TextComponent type="value">4:00 PM</TextComponent>
          <TextComponent>To</TextComponent>
          <TextComponent type="value">6:30 PM</TextComponent>
          <TextComponent style={{ marginRight: 5 }}>Add</TextComponent>
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            What about weekends?
          </TextComponent>
        </BlockComponent>

        <BlockComponent
          style={[
            Style.answerBorderBox,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            },
          ]}
        >
          <TextComponent>From</TextComponent>
          <TextComponent type="value">4:00 PM</TextComponent>
          <TextComponent>To</TextComponent>
          <TextComponent type="value">6:30 PM</TextComponent>
          <TextComponent style={{ marginRight: 5 }}>Add</TextComponent>
        </BlockComponent>

        <BlockComponent>
          <TextComponent style={Style.questionBorderBox}>
            All Set!
          </TextComponent>
        </BlockComponent>

        <View style={{ height: 64 }}></View>
      </ScrollView>
    </View>
  );
}
