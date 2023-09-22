import { useRecoilValue } from 'recoil';

import { Stack, Typography } from '@mui/material';

import { settingsState } from 'state/settings';

export default function WaterMark() {
  const { theme } = useRecoilValue(settingsState);
  
  return (
    <Stack mx="auto">
      <Typography fontSize="12px" color={theme === 'light' ? 'text.secondary' : 'text.primary'}>
        BMO Code Interpreter
      </Typography>
    </Stack>
  );
}
