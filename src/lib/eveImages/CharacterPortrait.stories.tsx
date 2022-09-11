import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CharacterPortrait } from './eveImages';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CharacterPortrait',
  component: CharacterPortrait,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof CharacterPortrait>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CharacterPortrait> = (args) => <CharacterPortrait {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  character_id: 755166922,
  size: 256
};
