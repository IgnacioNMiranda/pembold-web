import { Story, Meta } from '@storybook/react';
import { AtButton, AtButtonProps } from '.';

export default {
  title: 'Atoms/Button',
  component: AtButton,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: '#000',
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<AtButtonProps> = (args) => <AtButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
  onClick: () => ({}),
};

export const DefaultPrimaryLight = Template.bind({});
DefaultPrimaryLight.args = {
  children: 'Button',
  color: 'primary-light',
  onClick: () => ({}),
};

export const DefaultSecondary = Template.bind({});
DefaultSecondary.args = {
  children: 'Button',
  color: 'secondary',
  onClick: () => ({}),
};

export const DefaultTertiary = Template.bind({});
DefaultTertiary.args = {
  children: 'Button',
  color: 'tertiary',
  onClick: () => ({}),
};

export const DefaultFormButton = Template.bind({});
DefaultFormButton.args = {
  children: 'Button',
  onClick: () => ({}),
  type: 'form',
};

export const ThirdPartyPrimaryLightButton = Template.bind({});
ThirdPartyPrimaryLightButton.args = {
  children: 'Github',
  onClick: () => ({}),
  type: 'thirdParty',
  color: 'primary-light',
};

export const ThirdPartySecondaryButton = Template.bind({});
ThirdPartySecondaryButton.args = {
  children: 'Github',
  onClick: () => ({}),
  type: 'thirdParty',
  color: 'secondary',
};

export const ThirdPartyTertiaryButton = Template.bind({});
ThirdPartyTertiaryButton.args = {
  children: 'Github',
  onClick: () => ({}),
  type: 'thirdParty',
  color: 'tertiary',
};

export const FormPrimaryLightButton = Template.bind({});
FormPrimaryLightButton.args = {
  children: 'Button',
  onClick: () => ({}),
  type: 'form',
  color: 'primary-light',
};

export const FormSecondaryButton = Template.bind({});
FormSecondaryButton.args = {
  children: 'Button',
  onClick: () => ({}),
  type: 'form',
  color: 'secondary',
};

export const FormTertiaryButton = Template.bind({});
FormTertiaryButton.args = {
  children: 'Button',
  onClick: () => ({}),
  type: 'form',
  color: 'tertiary',
};

export const FormButtonLoading = Template.bind({});
FormButtonLoading.args = {
  children: 'Submit',
  onClick: () => ({}),
  type: 'form',
  isLoading: true,
};
