type dataType = {
  user: {
    name: string;
    password: string;
    id: number;
    token: number;
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
  leaderboard: Array<{ name: string; exp: number }>;
};

export default dataType;