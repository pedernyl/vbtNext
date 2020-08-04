import Layout from '../components/Layout/Layout';

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

const eventTags = [];
let i = 0;
eventsArray.forEach((event) => {
     eventTags.push(
         <div className={classes.Event} key={i+'eventDiv'}>
             <h3 key={i+'event_title'}>
                 {event.title}
             </h3>
             <p key={i+'event_desc'}>{event.description}</p>
         </div>
        );


     i++;
});

export default function events() {
    return (
        <Layout title="Events">
            <div className={classes.Events}>
                {eventTags}
            </div>
        </Layout>
    );
}