import { Menu } from ".";

export default {
  title: "Components/Menu",
  component: Menu,
  argTypes: {
    menuHome: {
      options: ["vendors", "default", "home", "about-us", "pricing"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    menuHome: "vendors",
    className: {},
    divClassName: {},
    divClassNameOverride: {},
    divClassName1: {},
    divClassName2: {},
  },
};
