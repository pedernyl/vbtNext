import Link from 'next/link';

import Layout from '../components/Layout/Layout';
import classes from '../styles/AmI.module.css';


export default function AdultChildren() {
    const laundryListItems = [
        'We became isolated and afraid of people and authority figures.',
        'We became approval seekers and lost our identity in the process.',
        'We are frightened by angry people and any personal criticism.',
        'We either become alcoholics, marry them or both, or find another compulsive personality such as a workaholic to fulfill our sick abandonment needs.',
        'We live life from the viewpoint of victims and we are attracted by that weakness in our love and friendship relationships.',
        'We have an overdeveloped sense of responsibility and it is easier for us to be concerned with others rather than ourselves; this enables us not to look too closely at our own faults, etc.',
        'We get guilt feelings when we stand up for ourselves instead of giving in to others.',
        'We became addicted to excitement.',
        'We confuse love and pity and tend to “love” people we can “pity” and “rescue.”',
        'We have “stuffed” our feelings from our traumatic childhoods and have lost the ability to feel or express our feelings because it hurts so much (Denial).',
        'We judge ourselves harshly and have a very low sense of self-esteem.',
        'We are dependent personalities who are terrified of abandonment and will do anything to hold on to a relationship in order not to experience painful abandonment feelings, which we received from living with sick people who were never there emotionally for us.',
        'Alcoholism* is a family disease; and we became para-alcoholics** and took on the characteristics of that disease even though we did not pick up the drink.',
        'Para-alcoholics** are reactors rather than actors.'
    ];
    return (
        <Layout title="Meetings">
            <div className={classes.AmIboard}>
                <br />
                <div className={classes.AmINote}>

                        <a href='https://adultchildren.org'>From aca:s webpage</a>
                    <p className="AmILaundry">
                        The 14 Traits of an Adult Child, also known as The Laundry List, are shown below.  If you identify with any of these Traits, you may find a home in our Program. We welcome you.
                         <ol>
                             {laundryListItems.map(item => <li>{item}</li>)}
                         </ol>
                        Tony A., 1978
                    </p>


                    <h3>Welcome to us</h3>
                </div>
            </div>
        </Layout>
    );
}