import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    stateProp: {
      options: ["mixed", "selected", "unselected"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    stateProp: "mixed",
    active: true,
    label: true,
    className: {},
  },
};
