import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { default as EveWhoButton } from "./eveWhoButton";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/EveWhoButton",
  component: EveWhoButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof EveWhoButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EveWhoButton> = (args) => (
  <EveWhoButton {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  character_id: 755166922,
};
