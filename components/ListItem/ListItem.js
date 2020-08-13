import classes from './ListItem.module.css';


const ListItem  = ({ nr, title, description }) => (
    <div className={classes.ListItem} key={nr+'eventDiv'}>
        <h3 key={nr+'event_title'}>{ title }</h3>
        <p key={nr+'event_desc'}>{ description }</p>
    </div>
);

export default ListItem;