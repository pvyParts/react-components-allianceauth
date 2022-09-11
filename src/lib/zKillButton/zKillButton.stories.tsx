import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { default as ZKillButton } from "./zKillButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ZKillButton",
  component: ZKillButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof ZKillButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ZKillButton> = (args) => (
  <ZKillButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  character_name: "AaronKable",
};
