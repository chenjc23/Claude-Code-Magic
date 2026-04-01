import * as React from 'react';
import { Box, Text } from '../../ink.js';

export type ClawdPose = 'default' | 'arms-up' | 'look-left' | 'look-right';

type Props = {
  pose?: ClawdPose;
};

// Huawei 8-petal flower logo in ASCII block art
// Two overlapping diamond shapes forming the characteristic flower pattern
const LOGO_LINES = [
  '    _     ____   ___  _   _ ',
  '   / \\   / ___| / _ \\| \\ | |',
  '  / _ \\  \\___ \\| | | |  \\| |',
  ' / ___ \\  ___) | |_| | |\\  |',
  '/_/   \\_\\|____/ \\___/|_| \\_|',
  '                             ',
];

export function Clawd(_props: Props) {
  return (
    <Box flexDirection="column">
      {LOGO_LINES.map((line, i) => (
        <Text key={i} color="red">{line}</Text>
      ))}
    </Box>
  );
}
