import { getClassesFromString } from '../../../utils/helpers';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Colors } from '../../../utils/colors';

const atLinkTypes = {
  navigation: styles.navigation,
  big: styles.big,
};

export interface AtLinkProps {
  type?: keyof typeof atLinkTypes;
  color?: Colors;
  href: string;
  label: string;
  className?: string;
}

export const AtLink = ({ type, color, href, label, className }: AtLinkProps) => {
  const classes = `${styles.link} ${color ? styles[color] : styles.default} ${
    type ? atLinkTypes[type] : ''
  } ${getClassesFromString(className, styles)}`;

  return (
    <Link href={href}>
      <a className={classes}>{label}</a>
    </Link>
  );
};
