import React from 'react';
import format from 'date-fns/format';
import startOfToday from 'date-fns/start_of_today';
import locale from 'date-fns/locale/fr';
import { render, Box, Color } from 'ink';
import days from './days.json';

const today = startOfToday();
const longDay = format(today, 'dddd Do MMMM YYYY', { locale });
const shortDay = format(today, 'MM-DD');

const day = days[shortDay];

const MondialDays = () => {
    return (
        <React.Fragment>
            <Box marginTop={1}>
                <Color cyan>Nous sommes le {longDay}</Color>
            </Box>
            {day && day.map(day => <Box key={day.text}>{day.text}</Box>)}
            {!day && 'Pas de jour'}
        </React.Fragment>
    );
};

render(<MondialDays />);
