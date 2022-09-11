import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AllianceLogo } from './eveImages';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/AllianceLogo',
  component: AllianceLogo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AllianceLogo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AllianceLogo> = (args) => <AllianceLogo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  alliance_id: 1900696668,
  size: 256
};
