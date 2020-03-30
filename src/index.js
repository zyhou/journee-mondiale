import React from 'react';
import format from 'date-fns/format';
import { startOfToday, addDays } from 'date-fns';
import locale from 'date-fns/locale/fr';
import { render, Box, Color } from 'ink';
import meow from 'meow';

import days from './days.json';

const cli = meow({
    flags: {
        days: {
            type: 'string',
            alias: 'd',
        },
    },
});

const daysArgs = cli.flags.days;
const today = startOfToday();
const date = daysArgs ? addDays(today, -daysArgs) : today;

const longDay = format(date, 'iiii d MMMM yyyy', { locale });
const shortDay = format(date, 'LL-dd');

const day = days[shortDay];

const MondialDays = () => (
    <React.Fragment>
        <Box marginTop={1}>
            <Color cyan>Nous sommes le {longDay}</Color>
        </Box>
        {day && day.map((day) => <Box key={day.text}>{day.text}</Box>)}
        {!day && 'Pas de jour'}
    </React.Fragment>
);

render(<MondialDays />);
