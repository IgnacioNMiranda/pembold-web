import { Story, Meta } from '@storybook/react';
import { AtInput, AtInputProps } from '.';

export default {
  title: 'Atoms/Input',
  component: AtInput,
} as Meta;

const Template: Story<AtInputProps> = (args) => <AtInput {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'text',
};

export const Email = Template.bind({});
Email.args = {
  type: 'email',
  required: true,
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  required: true,
};
