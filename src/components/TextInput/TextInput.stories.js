import { TextInput } from ".";

export default {
  title: "Components/TextInput",
  component: TextInput,
  argTypes: {
    state: {
      options: ["focused", "error", "default"],
      control: { type: "select" },
    },
    icon: {
      options: ["none", "right", "left"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "focused",
    icon: "none",
    placeholder: true,
    helperText: true,
    className: {},
    baseTextInputDivClassName: {},
    baseTextInputText: "Placeholder",
    text: "Helper text",
  },
};
