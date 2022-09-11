import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TypeIcon } from './eveImages';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/TypeIcon',
  component: TypeIcon,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TypeIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TypeIcon> = (args) => <TypeIcon {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type_id: 11567,
  size: 256
};
