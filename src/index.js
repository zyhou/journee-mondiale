import React from 'react';
import format from 'date-fns/format';
import startOfToday from 'date-fns/start_of_today';
import addDays from 'date-fns/add_days';
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

const longDay = format(date, 'dddd Do MMMM YYYY', { locale });
const shortDay = format(date, 'MM-DD');

const day = days[shortDay];

const MondialDays = () => (
    <React.Fragment>
        <Box marginTop={1}>
            <Color cyan>Nous sommes le {longDay}</Color>
        </Box>
        {day && day.map(day => <Box key={day.text}>{day.text}</Box>)}
        {!day && 'Pas de jour'}
    </React.Fragment>
);

render(<MondialDays />);
