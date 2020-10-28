import React from 'react';

import Layout from '../components/Layout/Layout';
import ListItem from '../components/ListItem/ListItem';

import classes from '../styles/Events.module.css';

const announcementsArray = [
    {
        title: 'All live meetings are closed until 2021',
        description: 'We will only have online meetings rest of 2020. ' +
              'We welcome you to our reopening event or our online meetings. Meeting room will be announced later'
    },
    {
        title: 'Reopening',
        description: 'We reopen our meetings now - hurra!!!!'
    },
    {
        title: 'Closed becouse of corona',
        description: 'Until the virus has been under controll we close all our meetings'
    }
];

let nr = 0;
const listItems = [];
announcementsArray.forEach((event) => {
    listItems.push(
        <ListItem key={nr+'announcement'} nr={nr} title={event.title} description={event.description} />
    );
    nr++;
});

export default function announcements() {
    return (
        <Layout title="Announcements">
            <div className={classes.Events}>
                {listItems}
            </div>
        </Layout>
    );
}