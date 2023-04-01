import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Colors from "../../assets/Colors";
import { Constraints, Style } from "../../assets/Global";

import Header from "../components/Header";
import { Type } from "../Storage";

export default function Analytics({ data }: any) {
  const Leaderboard = () => {
    const leaderboardList = [
      ...data.leaderboard,
      { name: data.user.name, exp: data.stats[data.stats.length - 1].exp },
    ];

    leaderboardList.sort((a, b) => {
      if (a.exp < b.exp) return 1;
      if (a.exp > b.exp) return -1;
      return 0;
    });

    let rankCounter = 0;

    return (
      <View style={{ maxHeight: 300 }}>
        <FlatList
          data={leaderboardList}
          contentContainerStyle={{ gap: Constraints.Margin / 2 }}
          renderItem={({ item: { name, exp } }) => {
            rankCounter++;
            return (
              <View
                style={{
                  flexDirection: "row",
                  padding: Constraints.Margin / 2,
                  borderRadius: Constraints.BorderRadius / 2,
                  alignItems: "center",
                  borderWidth: 2,
                  borderColor: Colors.dark,
                }}
              >
                <Text style={[{ flex: 1 }, Style.text]}>
                  {"#" + rankCounter}
                </Text>
                <Text style={[Style.text, { flex: 5 }]}>{name}</Text>
                <Text style={[Style.text, { flex: 0, fontSize: 14 }]}>
                  {exp + " Exp"}
                </Text>
              </View>
            );
          }}
        />
      </View>
    );
  };

  const TodaysReport = () => {
    const { subjects, homework } = data.stats[data.stats.length - 1];

    const status = {
      subject: {
        completed: 0,
        left: 0,
      },
      homework: {
        completed: 0,
        left: 0,
      },
    };

    subjects.forEach((subject: { status: number }) => {
      if (subject.status == 1) {
        status.subject.completed++;
        return;
      }
      status.subject.left++;
    });

    homework.forEach((homework: { status: number }) => {
      if (homework.status == 1) {
        status.homework.completed++;
        return;
      }
      status.homework.left++;
    });

    const styles = StyleSheet.create({
      row: {
        flex: 1,
        gap: Constraints.Margin / 2,
        flexDirection: "row",
      },
      block: {
        flex: 1,
        padding: Constraints.Margin / 2,
        alignItems: "center",
        borderRadius: Constraints.BorderRadius / 2,
        borderWidth: 2,
        borderColor: Colors.dark,
      },
      text: {
        fontFamily: "Sora",
        fontWeight: "300",
        fontSize: 12,
      },
      value: {
        fontFamily: "Sora",
        fontSize: 16,
      },
    });

    return (
      <View style={{ gap: Constraints.Margin / 2 }}>
        <View style={styles.row}>
          <View style={styles.block}>
            <Text style={[Style.text, styles.text]}>Subjects Completed</Text>
            <Text style={[Style.text, styles.value]}>
              {status.subject.completed}
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={[Style.text, styles.text]}>Subjects Left</Text>
            <Text style={[Style.text, styles.value]}>
              {status.subject.left}
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.block}>
            <Text style={[Style.text, styles.text]}>Homeworks Completed</Text>
            <Text style={[Style.text, styles.value]}>
              {status.homework.completed}
            </Text>
          </View>
          <View style={styles.block}>
            <Text style={[Style.text, styles.text]}>Homeworks Left</Text>
            <Text style={[Style.text, styles.value]}>
              {status.homework.left}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const WeeksReport = () => {
    const styles = StyleSheet.create({
      bar: {
        margin: 10,
        marginBottom: 0,
        flex: 1,
        borderWidth: 2,
        height: 5,
        borderRadius: Constraints.BorderRadius,
        borderColor: Colors.black,
      },
      text: {
        flex: 1,
        textAlign: "center",
        fontSize: 14,
      },
    });

    const date = new Date(data.stats[data.stats.length - 1].date);

    return (
      <View
        style={{
          height: 170,
          borderRadius: Constraints.BorderRadius / 2,
          padding: Constraints.Margin / 1.5,
          paddingBottom: 0,
          borderWidth: 2,
          borderColor: Colors.dark,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
          }}
        >
          <View style={[styles.bar, { marginBottom: 120 }]}></View>
          <View style={[styles.bar, { marginBottom: 100 }]}></View>
          <View style={[styles.bar, { marginBottom: 80 }]}></View>
          <View style={[styles.bar, { marginBottom: 60 }]}></View>
          <View style={[styles.bar, { marginBottom: 40 }]}></View>
          <View style={[styles.bar, { marginBottom: 20 }]}></View>
          <View style={[styles.bar, { marginBottom: 0 }]}></View>
        </View>
        <View style={{ height: 1, backgroundColor: Colors.dark }}></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: 24,
          }}
        >
          <Text style={[Style.text, styles.text]}>Mon</Text>
          <Text style={[Style.text, styles.text]}>Tue</Text>
          <Text style={[Style.text, styles.text]}>Web</Text>
          <Text style={[Style.text, styles.text]}>Thus</Text>
          <Text style={[Style.text, styles.text]}>Fri</Text>
          <Text style={[Style.text, styles.text]}>Sat</Text>
          <Text style={[Style.text, styles.text]}>Sun</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      <Header title="Analytics"></Header>
      <View style={styles.container}>
        <Text style={Style.heading}>Leaderboard</Text>
        <Leaderboard />
        <ScrollView>
          <Text style={Style.heading}>Today's Report</Text>
          <TodaysReport />
          <Text style={Style.heading}>Week's Report</Text>
          <WeeksReport />
          {/* <Text style={Style.heading}>Month's Report</Text> */}
          {/* <MonthsReport /> */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Constraints.Margin,
  },
});
