import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CharacterAllegiancePortrait } from "./eveImages";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Images/CharacterAllegiancePortrait",
  component: CharacterAllegiancePortrait,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CharacterPortrait>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CharacterAllegiancePortrait> = (args) => (
  <CharacterAllegiancePortrait {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  character: {
    character_id: 755166922,
    corporation_id: 98628563,
    alliance_id: 1354830081,
  },
  size: 256,
};
