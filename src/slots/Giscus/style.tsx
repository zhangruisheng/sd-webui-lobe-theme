import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => ({
  container: css`
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 60vh !important;
  `,
}));
