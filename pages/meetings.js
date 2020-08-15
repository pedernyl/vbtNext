import Layout from '../components/Layout/Layout';
import classes from '../styles/Meetings.module.css';
import VbtMap from '../components/VbtMap/VbtMap';



export default function announcements() {

    return (
        <Layout title="Meetings">
            <div className={classes.Meetingsboard}>
                <br />
                <div className={classes.MeetingNote}>
                    <p className="meetingTime">
                    We have meetings every sunday at 17.30.
                    You can find us at
                    </p>
                    <VbtMap />
                    <p className="meetingAdressAndInfo">
                    The adress is Kjøpmannsgata 41.
                    Enter at the gas station and you find us at 7th floor at the AA room.</p>

                    <h3>Welcome to us</h3>
                </div>
            </div>
        </Layout>
    );
}