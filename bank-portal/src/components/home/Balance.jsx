import {makeStyles} from "@material-ui/core/styles";
import BarChart from "./BarChart";
const useStyles = makeStyles((theme) => ({
    section:{
        
    },
    subHeader:{
        fontSize:"25px",
        marginLeft:"25px",
        color:"darkgrey"
    },
    header: {
        fontSize:"40px",
        fontWeight: "900",
        marginLeft:"25px",
    },
    rightSubHeader:{
        fontSize:"18px",
        marginLeft:"25px",
        color:"darkgrey",
        textAlign:"right", marginTop:"-30px", marginRight:"25px"
    }
}));

function Balance(props){
    const classes = useStyles();
    return(
        <div className={classes.section}>
            <div className={classes.subHeader}>Balance</div>
            <div className={classes.header}>${props.balance}</div>
            <div className={classes.rightSubHeader}>PAST 30 DAYS</div>
            <BarChart />
        </div>
    );
}

export default Balance;