import Layout from '../components/Layout/Layout';
import ListItem from '../components/ListItem/ListItem';

import classes from '../styles/Events.module.css';

const eventsArray = [
    {
        title: 'Cave meeting',
        description: 'We will have a meeting in our cave - welcome to join us'
    },
    {
        title: 'Reopening',
        description: 'After a while with corona we have a reopening.'
    }
];

let nr = 0;
const listItems = [];
eventsArray.forEach((event) => {
    listItems.push(
        <ListItem key={nr+'announcement'} nr={nr} title={event.title} description={event.description} />
    );
    nr++;
});

export default function events() {
    return (
        <Layout title="Events">
            <div className={classes.Events}>
                {listItems}
            </div>
        </Layout>
    );
}