import { Story, Meta } from '@storybook/react';
import { AtLink, AtLinkProps } from '.';

export default {
  title: 'Atoms/Link',
  component: AtLink,
} as Meta;

const Template: Story<AtLinkProps> = (args) => <AtLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: '#',
  label: 'Link',
};

export const Big = Template.bind({});
Big.args = {
  href: '#',
  label: 'Link',
  type: 'big',
};
