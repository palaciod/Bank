import {makeStyles} from "@material-ui/core/styles";
import ActivityIcon from "./ActivityIcon";
const useStyles = makeStyles((theme) => ({
    tab:{
        padding:"8px",
        display:"inline-flex",
    },
    activityHeader:{
        fontSize:"15px",
        fontWeight:"600"
    },
    activityStatus:{
        fontSize:"11px",
        marginTop:"-13px"
    },
    activityPayment:{
        fontSize:"15px",
        fontWeight:"900",
        lineHeight:"50px",
        marginLeft:"15px"
    }

}));

function ActivityTab(){
    const classes = useStyles();
    return(
        <div className={classes.tab}>
            <ActivityIcon />
            <div style={{padding:"10px"}}>
                <p className={classes.activityHeader}>Water Bill</p>
                <p className={classes.activityStatus}>Successfully</p>
            </div>
            <p className={classes.activityPayment}>$1500</p>
        </div>
    );
}

export default ActivityTab;