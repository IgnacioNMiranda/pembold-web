import { Story, Meta } from '@storybook/react';
import { AtButton, AtButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: AtButton,
} as Meta;

const Template: Story<AtButtonProps> = (args) => <AtButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => ({}),
};

export const FormButton = Template.bind({});
FormButton.args = {
  children: 'Button',
  onClick: () => ({}),
  type: 'form',
};

export const FormButtonLoading = Template.bind({});
FormButtonLoading.args = {
  children: 'Submit',
  onClick: () => ({}),
  type: 'form',
  isLoading: true,
};
