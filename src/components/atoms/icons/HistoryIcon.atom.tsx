import React from 'react';
import { BaseIcon } from './BaseIcon.atom';

export const HistoryIcon = (props: React.ComponentProps<typeof BaseIcon>) => (
  <BaseIcon {...props} style={{ transform: 'scaleY(-1)', ...props.style }}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M12 7v5l4 2" />
  </BaseIcon>
);

export default HistoryIcon;
