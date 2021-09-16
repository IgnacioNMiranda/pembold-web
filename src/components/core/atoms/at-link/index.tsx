import { getClassesFromString } from '../../../utils/helpers';
import Link from 'next/link';
import styles from './styles.module.scss';

const atLinkTypes = {
  default: styles.default,
  navigation: styles.navigation,
  tertiary: styles.tertiary,
  big: styles.big,
};

export interface AtLinkProps {
  type?: keyof typeof atLinkTypes;
  href: string;
  label: string;
  classes?: string;
}

export const AtLink = ({ type = 'default', href, label, classes }: AtLinkProps) => {
  const extraClasses = getClassesFromString(classes, styles);

  const className = `${styles.link} ${atLinkTypes[type]} ${extraClasses}`;

  return (
    <Link href={href}>
      <a className={className}>{label}</a>
    </Link>
  );
};
