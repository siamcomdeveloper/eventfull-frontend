import { CalendarDate } from ".";

export default {
  title: "Components/CalendarDate",
  component: CalendarDate,
  argTypes: {
    stateProp: {
      options: ["day-of-week", "available", "selected", "adjacent-month", "unavailable", "hover"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "day-of-week",
    className: {},
    baseCalendarDateBaseCalendarDateClassName: {},
    baseCalendarDateLabelClassName: {},
    baseCalendarDateText: "S",
  },
};
