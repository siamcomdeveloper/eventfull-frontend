import { LoginGroup } from ".";

export default {
  title: "Components/LoginGroup",
  component: LoginGroup,
  argTypes: {
    whiteLogin: {
      options: ["orange-login", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    whiteLogin: "orange-login",
    className: {},
  },
};
