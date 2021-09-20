import { Story, Meta } from '@storybook/react';
import { AtLink, AtLinkProps } from '.';

export default {
  title: 'Atoms/Link',
  component: AtLink,
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: 'lightcoral',
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

const Template: Story<AtLinkProps> = (args) => <AtLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  label: 'Link',
};

export const PrimaryLightButtonLink = Template.bind({});
PrimaryLightButtonLink.args = {
  href: '#',
  label: 'Link',
  color: 'primary-light',
  className: 'button scale',
};

export const SecondaryButtonLink = Template.bind({});
SecondaryButtonLink.args = {
  href: '#',
  label: 'Link',
  color: 'secondary',
  className: 'button scale',
};

export const TertiaryButtonLink = Template.bind({});
TertiaryButtonLink.args = {
  href: '#',
  label: 'Link',
  color: 'tertiary',
  className: 'button scale',
};

export const PrimaryLightBig = Template.bind({});
PrimaryLightBig.args = {
  href: '#',
  label: 'Link',
  color: 'primary-light',
  type: 'big',
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
  href: '#',
  label: 'Link',
  color: 'secondary',
  type: 'big',
};

export const TertiaryBig = Template.bind({});
TertiaryBig.args = {
  href: '#',
  label: 'Link',
  color: 'tertiary',
  type: 'big',
};
