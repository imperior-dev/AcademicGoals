import * as FileSystem from "expo-file-system";

const templateData: dataType = {
  user: {
    name: "Aoi",
    password: "1234", //TODO
    id: 1234, //TODO
    token: 5678, //TODO
  },
  preferences: {
    breakSetting: {
      time: 45, //In custom time format
      interval: 120, //In custom time format
    },
    studySlots: [
      {
        from: 120, //In custom time format
        to: 360, //In custom time format
      },
    ],
    subjects: [
      { name: "Math", importance: 1 },
      { name: "English", importance: 0.5 },
    ],
  },
  homework: [
    {
      subject: "English",
      timeRequired: 45,
      dueDate: 1679836205344, //TODO Format for dates ?
    },
  ],
  tasks: [
    {
      subject: "Math",
      start: 120,
      end: 165,
      status: 1,
    },
  ],
  stats: [
    {
      date: 1679836205344, //TODO Format for dates ?
      exp: 356,
      subjects: [
        {
          name: "Math",
          time: 45,
          status: 0.5,
        },
      ],
      homework: [
        {
          name: "English",
          time: 30,
          status: 1,
        },
      ],
    },
  ],
  leaderboard: [{ name: "Pie", exp: 123 }],
};

type dataType = {
  user: {
    name: string;
    password: string; //TODO
    id: number; //TODO
    token: number; //TODO
  };
  preferences: {
    breakSetting: {
      time: number; //In custom time format
      interval: number; //In custom time format
    };
    studySlots: Array<{
      from: number; //In custom time format
      to: number; //In custom time format
    }>;
    subjects: Array<{ name: string; importance: number }>;
  };
  homework: Array<{
    subject: string;
    timeRequired: number;
    dueDate: number; //TODO Format for dates ?
  }>;
  tasks: Array<{
    subject: string;
    start: number;
    end: number;
    status: number;
  }>;
  stats: Array<{
    date: number;
    exp: number;
    subjects: Array<{
      name: string;
      time: number;
      status: number;
    }>;
    homework: Array<{
      name: string;
      time: number;
      status: number;
    }>;
  }>;
  leaderboard: [{ name: string; exp: number }];
};

export class Storage {
  private fileUri: string;
  public data: dataType | undefined;
  constructor() {
    this.fileUri = FileSystem.documentDirectory + "data.json";

    // FileSystem.writeAsStringAsync(
    //   this.fileUri,
    //   JSON.stringify(templateData, null, 4)
    // );

    FileSystem.readAsStringAsync(this.fileUri)
      .then((contents) => {
        this.data = JSON.parse(contents);
      })
      .catch((error) => {
        if (error.toString().endsWith("ENOENT (No such file or directory)")) {
          FileSystem.writeAsStringAsync(
            this.fileUri,
            JSON.stringify(templateData, null, 4)
          )
            .then(() => {
              this.data = templateData;
            })
            .catch((error) => console.error("Error writing file:", error));
        }
      });
  }
  update() {
    if (this.data == undefined) return false;
    FileSystem.writeAsStringAsync(
      this.fileUri,
      JSON.stringify(this.data, null, 4)
    )
      .then(() => {
        return true;
      })
      .catch((error) => {
        console.error("Error writing file:", error);
        return false;
      });
  }
}

export { dataType };