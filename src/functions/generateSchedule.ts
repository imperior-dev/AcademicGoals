import { System } from "../System"
import { ScheduleType, SubjectType, TaskType } from "../types/DataType"
import { convertMinutesToTime, convertTimeToMinutes } from "./time"

const HARD_SUBJECT_STUDY_TIME = 45;
const EASY_SUBJECT_STUDY_TIME = 20;
const EXTRA_TIME = 0;
const WEEKENDS = [0, 6]; //SUNDAY SATURDAY
const BUFFER = 5;

export class Schedule {
  private storage;
  private subjects;
  private schedule;
  private subjectOccurances;
  constructor(system: System) {
    this.storage = system.storage;
    this.schedule = system.storage.data.schedule;
    this.subjects = system.storage.data.settings.subjects;
    console.log(JSON.stringify(this.schedule, null, 4));
    if (!this.todaysScheduleExists()) {
      this.subjectOccurances = this.getOccurances();
      system.log("info", "Schedule Not Found. Generating a new schedule");
      this.generateSchedule();
    }
  }

  generateSchedule() {
    const slots =
      this.storage.data.settings.timings[
        WEEKENDS.includes(new Date().getDay()) ? "weekends" : "weekdays"
      ];

    const hardSubjects = this.subjects.filter((subject) => subject.difficult);
    const easySubjects = this.subjects.filter((subject) => !subject.difficult);

    const tasks: TaskType[] = [];
    let id = 0;

    try {
      const previousTasks = this.schedule[this.schedule.length - 2].tasks;
      const lastId = previousTasks[previousTasks.length - 1].id;
      id = lastId;
      console.log(id);
    } catch {}

    slots.map((slot) => {
      const fromMinutes = convertTimeToMinutes(slot.from);
      const toMinutes = convertTimeToMinutes(slot.to);
      let duration = toMinutes - fromMinutes;
      if (duration < 0) {
        duration += 1440; // add 24 hours in minutes
      }

      const hardSubjectTime = Math.floor(
        (duration * (HARD_SUBJECT_STUDY_TIME * hardSubjects.length)) /
          (HARD_SUBJECT_STUDY_TIME * hardSubjects.length +
            EASY_SUBJECT_STUDY_TIME * easySubjects.length)
      );
      const easySubjectTime = duration - hardSubjectTime;

      let hardSubjectCount = Math.floor(
        hardSubjectTime / HARD_SUBJECT_STUDY_TIME
      );
      let easySubjectCount = Math.floor(
        easySubjectTime / EASY_SUBJECT_STUDY_TIME
      );

      let timeLeft =
        duration -
        hardSubjectCount * HARD_SUBJECT_STUDY_TIME -
        easySubjectCount * EASY_SUBJECT_STUDY_TIME;

      if (timeLeft >= HARD_SUBJECT_STUDY_TIME + EXTRA_TIME) {
        if (
          hardSubjects.length > easySubjects.length &&
          new Date().getDate() % 2 === 0
        ) {
          hardSubjectCount++;
          timeLeft -= HARD_SUBJECT_STUDY_TIME;
        } else {
          easySubjectCount++;
          timeLeft -= EASY_SUBJECT_STUDY_TIME;
        }
      } else if (timeLeft >= EASY_SUBJECT_STUDY_TIME + EXTRA_TIME - BUFFER) {
        easySubjectCount++;
        timeLeft -= EASY_SUBJECT_STUDY_TIME;
      } //TODO Do something with no easy subjects if the time is 1 hour or less.

      const selectedSubjectsId = [];

      for (let h = 0; h < hardSubjectCount; h++) {
        selectedSubjectsId.push(this.selectSubject(hardSubjects));
      }

      for (let e = 0; e < easySubjectCount; e++) {
        selectedSubjectsId.push(this.selectSubject(easySubjects));
      }

      for (let i = 1; i <= selectedSubjectsId.length / 2; i++) {
        [selectedSubjectsId[i], selectedSubjectsId[i - 1]] = [
          selectedSubjectsId[i - 1],
          selectedSubjectsId[i],
        ];
      }

      const extraTime =
        (duration -
          (HARD_SUBJECT_STUDY_TIME * hardSubjectCount +
            EASY_SUBJECT_STUDY_TIME * easySubjectCount)) /
        (hardSubjectCount + easySubjectCount);

      let startTime = fromMinutes;

      selectedSubjectsId.forEach((subjectId) => {
        const duration =
          (hardSubjects.filter(({ id }) => (id = subjectId)).length > 0
            ? HARD_SUBJECT_STUDY_TIME
            : EASY_SUBJECT_STUDY_TIME) + extraTime;
        tasks.push({
          id,
          from: convertMinutesToTime(startTime),
          duration,
          subjectId,
          statusPercentage: 0,
        });
        id++;
        startTime += duration;
      });
    });

    const date = new Date();

    const schedule: ScheduleType = {
      date: {
        day: date.getDate().toString(),
        month: date.getMonth().toString(),
        year: date.getFullYear().toString(),
      },
      tasks,
    };

    this.schedule.push(schedule);
    this.storage.write();
  }

  selectSubject(subjects: SubjectType[]) {
    let lowestOccuranceValue = 10000;
    subjects.forEach((subject) => {
      if (
        this.subjectOccurances &&
        this.subjectOccurances[subject.id] < lowestOccuranceValue
      ) {
        lowestOccuranceValue = this.subjectOccurances[subject.id];
      }
    });
    const lowestOccuranceSubjects = subjects.filter(
      ({ id }) =>
        this.subjectOccurances &&
        this.subjectOccurances[id] === lowestOccuranceValue
    );

    const subjectPickedId =
      lowestOccuranceSubjects[
        Math.round(Math.random() * (lowestOccuranceSubjects.length - 1))
      ].id;

    if (this.subjectOccurances) this.subjectOccurances[subjectPickedId]++;

    return subjectPickedId;
  }

  todaysScheduleExists() {
    if (this.schedule.length === 0) return false;

    //Check if todays schedule already exists;
    const date = new Date();
    const day = date.getDate().toString();
    const month = date.getMonth().toString();
    const year = date.getFullYear().toString();
    const todaysDate = { day, month, year };

    if (
      JSON.stringify(this.schedule[this.schedule.length - 1].date) ===
      JSON.stringify(todaysDate)
    ) {
      return true;
    }
  }

  getOccurances() {
    const subjectOccurances = [];

    for (const subject of this.subjects) {
      subjectOccurances[subject.id] = 0;
    }

    const lastIndex = this.storage.data.schedule.length - 1;

    for (let i = lastIndex; i >= 0 && i >= lastIndex - 7; i--) {
      for (const task of this.storage.data.schedule[i].tasks) {
        if (subjectOccurances[task.subjectId] !== undefined) {
          subjectOccurances[task.subjectId]++;
        }
      }
    }

    return subjectOccurances;
  }
}
