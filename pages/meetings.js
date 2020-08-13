import Layout from '../components/Layout/Layout';
import classes from '../styles/Meetings.module.css';



export default function announcements() {
    return (
        <Layout title="Meetings">
            <div className={classes.Meetingsboard}>
                <div className={classes.MeetingNote}>
                    We have meetings every sunday at 16.30.
                    You can find us at
                </div>
            </div>
        </Layout>
    );
}