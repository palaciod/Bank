import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize:"50px",
        fontWeight: "900",
        marginLeft:"20px",
    },
    subHeader:{
        fontSize:"25px",
        marginLeft:"20px",
        color:"darkgrey"
    }

}));

function Dashboard(){
    const classes = useStyles();
    return(
        <div >
            <div className={classes.header}>Dashboard</div>
            <div className={classes.subHeader}>Transfer updates: </div>
        </div>
    );
}

export default Dashboard;

