import Layout from '../components/Layout/Layout';
import ListItem from '../components/ListItem/ListItem';

import classes from '../styles/Events.module.css';

const announcementsArray = [
    {
        title: 'Reopening',
        description: 'We reopen our meetings now - hurra!!!!'
    },
    {
        title: 'Closed becouse of corona',
        description: 'Until the virus has been under controll we close all are meetings'
    }
];

let nr = 0;
const listItems = [];
announcementsArray.forEach((event) => {
    listItems.push(
        <ListItem nr={nr} title={event.title} description={event.description} />
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