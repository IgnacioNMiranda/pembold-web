import React from "react";
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from '.';

export default {
  component: Button,
  title: 'Atoms/Button'
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => {},
}

export const FormButton = Template.bind({});
FormButton.args = {
  children: 'Button',
  onClick: () => {},
  type: 'form'
};

export const BigButton = Template.bind({});
BigButton.args = {
  children: 'Button',
  onClick: () => {},
  type: 'big'
};