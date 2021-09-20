import styles from '../icons.module.scss';

export interface ShowPasswordIconProps {
  onClick: () => void;
  isPasswordHidden: boolean;
}

export const ShowPasswordIcon = ({ onClick, isPasswordHidden }: ShowPasswordIconProps) => {
  return (
    <button type="button" className={styles.iconButton} onClick={onClick}>
      {isPasswordHidden ? (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <g data-name="Layer 2">
            <g data-name="eye">
              <path d="M21.87 11.5c-.64-1.11-4.16-6.68-10.14-6.5-5.53.14-8.73 5-9.6 6.5a1 1 0 000 1c.63 1.09 4 6.5 9.89 6.5h.25c5.53-.14 8.74-5 9.6-6.5a1 1 0 000-1zM12.22 17c-4.31.1-7.12-3.59-8-5 1-1.61 3.61-4.9 7.61-5 4.29-.11 7.11 3.59 8 5-1.03 1.61-3.61 4.9-7.61 5z" />
              <path d="M12 8.5a3.5 3.5 0 103.5 3.5A3.5 3.5 0 0012 8.5zm0 5a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" />
            </g>
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
          <path
            d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
            fill="none"
            fillRule="evenodd"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      )}
    </button>
  );
};
