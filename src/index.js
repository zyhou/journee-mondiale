import React from 'react';
import format from 'date-fns/format';
import { startOfToday, addDays } from 'date-fns';
import locale from 'date-fns/locale/fr';
import { render, Box, Text } from 'ink';
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

const daysArguments = cli.flags.days;
const today = startOfToday();
const date = daysArguments ? addDays(today, -daysArguments) : today;

const longDay = format(date, 'iiii d MMMM yyyy', { locale });
const shortDay = format(date, 'LL-dd');

const day = days[shortDay];

const MondialDays = () => (
    <React.Fragment>
        <Box marginTop={1}>
            <Text color="cyan">Nous sommes le {longDay}</Text>
        </Box>
        {day && day.map((day) => <Text key={day.text}>{day.text}</Text>)}
        {!day && <Text>Pas de jour</Text>}
    </React.Fragment>
);

render(<MondialDays />);
