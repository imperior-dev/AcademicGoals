import { View, Text, StyleSheet } from "react-native";

import Colors from "../../assets/Colors";
import { Constraints, Style } from "../../assets/Global";

import * as Storage from "../Storage";

export default function Home({ data }: { data: any }) {
  const { subjects, homework } = data.stats[data.stats.length - 1];

  const tasks = [...subjects, ...homework];

  let progressBarWidth = (() => {
    const progress = {
      completed: 0,
      total: 0,
    };

    tasks.forEach((task: { status: number }) => {
      if (task.status == 1) {
        progress.completed++;
      }
      progress.total++;
    });

    if (progress.completed == 0) return "5%";

    return Math.round((progress.completed / progress.total) * 100) + "%";
  })();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 10,
      }}
    >
      <View
        style={{
          width: 50,
          height: 4,
          borderRadius: 2,
          alignSelf: "center",
          backgroundColor: Colors.blue,
          marginBottom: 10,
        }}
      />
      <Text style={Style.heading}>Today's Progress</Text>
      <View
        style={{
          height: 16,
          overflow: "hidden",
          flexDirection: "row",
          borderRadius: 32,
        }}
      >
        <View
          style={{
            width: progressBarWidth,
            backgroundColor: Colors.pink,
          }}
        />
        <View
          style={{
            flex: 1,
            borderWidth: 2,
            borderLeftWidth: 0,
            borderColor: Colors.dark,
            borderTopRightRadius: 32,
            borderBottomRightRadius: 32,
          }}
        ></View>
      </View>
      <Text style={Style.heading}>Current Task</Text>
      <View
        style={{
          backgroundColor: Colors.blue,
          aspectRatio: 5 / 2,
          borderRadius: Constraints.BorderRadius / 2,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingLeft: Constraints.Margin * 2,
          }}
        >
          <View>
            <Text
              style={[
                Style.heading,
                {
                  color: Colors.white,
                  fontSize: 26,
                  marginBottom: 0,
                  marginTop: 0,
                },
              ]}
            >
              English
            </Text>
            <Text style={[Style.text, { color: Colors.white, fontSize: 14 }]}>
              25 Minutes Remaining
            </Text>
          </View>
        </View>
        <View
          style={{
            height: 12,
            backgroundColor: Colors.white,
            opacity: 0.5,
            width: "50%",
          }}
        ></View>
      </View>
    </View>
  );
}
