import { MyLabel } from "../../components/MyLabel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "UI/etiquetas/MyLabel",
  component: MyLabel,
  argTypes: {
    size: { control: "select" },
    color: { control: "select" },
    fontColor: { control: "color" },
    fontBackground: { control: "color" },
  },
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
  <MyLabel {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  label: "Example text",
  color: "primary",
  fontBackground: "orange",
};
export const AllCaps = Template.bind({});
AllCaps.args = { size: "h1", label: "Example text", color: "secondary" };
export const Secondary = Template.bind({});
Secondary.args = {
  size: "h2",
  label: "Example text",
  color: "secondary",
};

export const Terciary = Template.bind({});
Terciary.args = {
  size: "normal",
  label: "Example text",
  color: "secondary",
  allCaps: true,
};

export const CustonFontColor = Template.bind({});
CustonFontColor.args = {
  size: "normal",
  label: "Example text",
  color: "secondary",
  allCaps: true,
  fontBackground: "pink",
};
