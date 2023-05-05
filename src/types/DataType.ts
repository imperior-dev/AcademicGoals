export type UserType = { name: string };

export type SubjectType = { name: string; id: number; difficult: boolean };

export type BreakType = {
  duration: {
    hr: string;
    min: string;
  };
  interval: {
    hr: string;
    min: string;
  };
};

export type SlotType = {
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
};

export type DateType = { day: string; month: string; year: string };

export type TimeType = { hr: string; min: string; am: boolean };

export type TaskType = {
  id: number;
  from: TimeType;
  duration: number;
  subjectId: number;
  statusPercentage: number;
};

export type ScheduleType = {
  date: DateType;
  tasks: TaskType[];
};

export type DataType = {
  settings: {
    user: UserType;
    subjects: SubjectType[];
    break: BreakType;
    timings: {
      weekdays: SlotType[];
      weekends: SlotType[];
    };
  };
  schedule: ScheduleType[];
};
