import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Constraints } from "../../assets/Global";

import { H3, H4, H5 } from "../../assets/Font";

const homeworks = [
  {
    subject: "Math",
    time: "30 Mins",
    date: "30/4/2023",
  },
  {
    subject: "English",
    time: "15 Mins",
    date: "30/4/2023",
  },
  {
    subject: "SST",
    time: "25 Mins",
    date: "30/4/2023",
  },
  {
    subject: "Science",
    time: "45 Mins",
    date: "30/4/2023",
  },
  // {
  //   subject: "Arts",
  //   time: "30 Mins",
  //   date: "30/4/2023",
  // },
  // {
  //   subject: "Biology",
  //   time: "15 Mins",
  //   date: "30/4/2023",
  // },
  // {
  //   subject: "Chemistry",
  //   time: "25 Mins",
  //   date: "30/4/2023",
  // },
  // {
  //   subject: "History",
  //   time: "45 Mins",
  //   date: "30/4/2023",
  // },
  // {
  //   subject: "Hindi",
  //   time: "30 Mins",
  //   date: "30/4/2023",
  // },
];

export default function Homework() {
  if (Constraints.IsLandscape) {
    return <View style={landscapeStyle.container}></View>;
  }
  return (
    <View style={portraitStyle.container}>
      <SafeAreaView>
        <ScrollView>
          {homeworks.map(({ subject, time, date }) => {
            return (
              <HomeworkCard
                subject={subject}
                time={time}
                date={date}
                key={subject}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const landscapeStyle = StyleSheet.create({
  container: {},
});

const portraitStyle = StyleSheet.create({
  container: {},
});

function HomeworkCard(props: { subject: string; time: string; date: string }) {
  return (
    <View style={homeworkCardStyle.container}>
      <View style={homeworkCardStyle.body}>
        <View style={homeworkCardStyle.subjectContainer}>
          <H3>{props.subject}</H3>
        </View>
        <View style={homeworkCardStyle.timeContainer}>
          <H4>{props.time}</H4>
          <View style={homeworkCardStyle.values}>
            <H5>Time Remaining</H5>
          </View>
        </View>
        <View style={homeworkCardStyle.dateContainer}>
          <H4>{props.date}</H4>
          <View style={homeworkCardStyle.values}>
            <H5>Due Date</H5>
          </View>
        </View>
      </View>
    </View>
  );
}

const homeworkCardStyle = StyleSheet.create({
  container: {
    margin: 20,
    marginBottom: 0,
  },
  body: {
    width: "100%",
    aspectRatio: 4 / 1,
    borderRadius: Constraints.BorderRadius,
    backgroundColor: "pink",
    flexDirection: "row",
  },
  subjectContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  timeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  values: {
    // marginBottom: 8,
  },
});
