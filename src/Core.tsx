import * as FileSystem from "expo-file-system";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StatusBar } from "react-native";

import dataType from "./types/data";
import {
  dayType,
  inputType,
  pageType,
  screenType,
  statusType,
} from "./types/core";

const devDataTemplate: dataType = {
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
    studySlots: {
      mon: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
      tue: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
      wed: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
      thus: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
      fri: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
      sat: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
      sun: [
        {
          from: 120, //In custom time format
          to: 360, //In custom time format
        },
        {
          from: 720, //In custom time format
          to: 840, //In custom time format
        },
      ],
    },
    subjects: [
      { name: "Math", importance: 1 },
      { name: "English", importance: 0.5 },
    ],
  },
  homework: [
    {
      subject: "English",
      timeRequired: 45,
      dueDate: 1679836205344,
    },
    {
      subject: "Math",
      timeRequired: 45,
      dueDate: 1679836205344,
    },
    {
      subject: "SST",
      timeRequired: 45,
      dueDate: 1679836205344,
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
      date: 1679836205344,
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
  leaderboard: [
    { name: "Pie", exp: 123 },
    { name: "Cat", exp: 100 },
  ],
};

const DEV_MODE = false;
const CLEAR_DATA = false;
const RESET_TEMPLATE = false;

const fileURI = FileSystem.documentDirectory + "data.json";

export default class Core {
  public data: dataType;
  public status: statusType;
  public screen: screenType;
  public page: pageType;
  public input: {
    type: inputType;
    data: {
      index?: number;
      day?: dayType;
    };
  };
  private setScreen?: React.Dispatch<React.SetStateAction<screenType>>;
  private setPage?: React.Dispatch<React.SetStateAction<pageType>>;

  constructor() {
    this.log("[Info] Core Generated!");
    this.data = {} as dataType;

    this.status = "loading";
    this.screen = "home";
    this.page = "home";
    this.input = {
      type: "profile",
      data: {},
    };

    SplashScreen.preventAutoHideAsync();
    StatusBar.setBarStyle("light-content");
  }

  log(statement: string, log?: any) {
    console.log(statement);
    if (log) console.log(log);
  }

  navigateTo(page: pageType) {
    if (!this.setPage || !this.setScreen) return;
    this.page = page;
    this.setPage(this.page);
    this.screen = page == "home" ? "home" : "other";
    this.setScreen(this.screen);

    this.log(`[Info] Navigating to ${page}`);
  }

  attachScreenHook(hook: React.Dispatch<React.SetStateAction<screenType>>) {
    this.setScreen = hook;
  }

  attachPageHook(hook: React.Dispatch<React.SetStateAction<pageType>>) {
    this.setPage = hook;
  }

  requestInput(type: inputType, data?: { index?: number; day?: dayType }) {
    if (this.setScreen) {
      this.log("[Info] Requesting Input");
      this.input = {
        type,
        data: data || {},
      };
      this.setScreen("input");
    }
  }

  cancelInput() {
    if (this.setScreen) {
      this.log("[Info] Canceling Input");
      this.input.data = {};
      this.setScreen(this.page == "home" ? "home" : "other");
    }
  }

  async updateDate() {
    try {
      await FileSystem.writeAsStringAsync(
        fileURI,
        JSON.stringify(this.data, null, 4)
      );
      return true;
    } catch (error) {
      this.log("[Error] Updating data.", error);
      return false;
    }
  }

  async startLoad(setStatus: React.Dispatch<React.SetStateAction<statusType>>) {
    const [dataLoaded, fontsLoaded] = await Promise.all([
      this.loadData(),
      this.loadFont(),
    ]);
    if (!fontsLoaded) return false;
    if (!dataLoaded) {
      this.screen = "setup";
    }
    setStatus("loaded");
    SplashScreen.hideAsync();
  }

  async loadData(): Promise<boolean> {
    try {
      if (CLEAR_DATA) {
        await FileSystem.writeAsStringAsync(fileURI, "{}");
      }

      if (RESET_TEMPLATE) {
        await FileSystem.writeAsStringAsync(
          fileURI,
          JSON.stringify(devDataTemplate, null, 4)
        );
      }

      this.data = JSON.parse(await FileSystem.readAsStringAsync(fileURI));

      return true;
    } catch (error) {
      this.log("[Error] Loading data.", error);
      if (!DEV_MODE) {
        return false;
      }

      await FileSystem.writeAsStringAsync(
        fileURI,
        JSON.stringify(devDataTemplate, null, 4)
      );
      // console.log("Loading Data");
      return await this.loadData();
    }
  }

  async loadFont() {
    try {
      await Font.loadAsync({
        Sora: require("../assets/fonts/Sora.ttf"),
      });
      return true;
    } catch (error) {
      this.log("[Error] Loading font.", error);
      return false;
    }
  }
}
