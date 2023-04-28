import * as FileSystem from "expo-file-system"
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import { useState } from "react"
import { StatusBar } from "react-native"

interface ScreensType {
  [key: string]: {
    setState: React.Dispatch<React.SetStateAction<"visible" | "hidden">>;
    Component: Function;
  };
}

const screens: ScreensType = {};

export class System {
  public currentScreen: string | null;
  public setHeader: Function | null;
  public storage: Storage;
  public Screen;
  public mode: "working" | "setup";
  constructor() {
    this.log("info", "System Started");
    this.currentScreen = null;
    this.setHeader = null;
    this.mode = "working";

    this.storage = new Storage();

    this.Screen = ({
      name,
      Component,
    }: {
      name: string;
      Component: Function;
    }) => {
      const [state, setState] = useState<"visible" | "hidden">(
        name === this.currentScreen ? "visible" : "hidden"
      );

      screens[name] = {
        setState,
        Component,
      };

      if (state == "visible") return <Component system={this} />;
      return null;
    };

    SplashScreen.preventAutoHideAsync();
    StatusBar.setBarStyle("light-content");
  }

  log(type: "info" | "error", statement: string, log?: any) {
    console.log(`[${type}] ${statement}`);
    if (log) console.log(log);
  }
  async load() {
    await Promise.all([
      Font.loadAsync({
        Sora: require("../assets/fonts/Sora.ttf"),
      }),
      this.storage.load(),
    ]);
    if (this.storage.exists) this.navigateTo("Home");
    else {
      this.mode = "setup";
      this.navigateTo("Setup");
    }
    SplashScreen.hideAsync();
  }

  navigateTo(newScreen: string) {
    this.currentScreen = newScreen;
    Object.keys(screens).forEach((screen) => {
      if (screen === newScreen) {
        screens[screen].setState("visible");
      } else {
        screens[screen].setState("hidden");
      }
    });
    if (this.setHeader) {
      if (newScreen == "Home") this.setHeader("");
      else this.setHeader(newScreen);
    }
    this.log("info", "Navigating to " + this.currentScreen);
  }
}

const basePath = FileSystem.documentDirectory;
let user = 1;

class Storage {
  public data: {
    settings: {
      user: {
        name: string;
      };
      subjects: Array<{ name: string; id: number; difficult: boolean }>;
      break: {
        duration: {
          hr: string;
          min: string;
        };
        interval: {
          hr: string;
          min: string;
        };
      };
      timings: {
        weekdays: Array<{
          from: {
            hr: string;
            min: string;
            am: boolean;
          };
          to: {
            hr: string;
            min: string;
            am: boolean;
          };
          id: number;
        }>;
        weekends: Array<{
          from: {
            hr: string;
            min: string;
            am: boolean;
          };
          to: {
            hr: string;
            min: string;
            am: boolean;
          };
          id: number;
        }>;
      };
    };
  };
  public exists: boolean;
  constructor() {
    this.exists = false;
    this.data = {
      settings: {
        user: {
          name: "",
        },
        subjects: [
          {
            name: "",
            id: 0,
            difficult: false,
          },
        ],
        break: {
          duration: {
            hr: "00",
            min: "00",
          },
          interval: {
            hr: "00",
            min: "00",
          },
        },
        timings: {
          weekdays: [
            {
              from: {
                hr: "01",
                min: "00",
                am: true,
              },
              to: {
                hr: "01",
                min: "00",
                am: true,
              },
              id: 0,
            },
          ],
          weekends: [
            {
              from: {
                hr: "01",
                min: "00",
                am: true,
              },
              to: {
                hr: "01",
                min: "00",
                am: true,
              },
              id: 0,
            },
          ],
        },
      },
    };
  }
  async load() {
    try {
      var rawData = await FileSystem.readAsStringAsync(
        basePath + `user-${user}.json`
      );
      this.exists = true;
      this.data = JSON.parse(rawData);
    } catch {}
  }

  write() {
    return FileSystem.writeAsStringAsync(
      basePath + `user-${user}.json`,
      JSON.stringify(this.data, null, 4)
    );
  }
}
