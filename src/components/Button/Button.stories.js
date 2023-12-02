import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "tertiary"],
      control: { type: "select" },
    },
    size: {
      options: ["large", "extra-small", "medium", "small"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["destructive", "hover", "inactive", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "primary",
    size: "large",
    stateProp: "destructive",
    icon: true,
    iconOnly: true,
    className: {},
    buttonPrimaryIconClassName: {},
    text: "label",
  },
};
