import {makeStyles} from "@material-ui/core/styles";
import Avatar from '@material-ui/core/Avatar';
import Michael01 from "../../images/Michael01.jpg";
const useStyles = makeStyles((theme) => ({
    section:{
        width:"1000px",
        backgroundColor:"white",
        marginLeft:"25px",
        padding:"10px",
        borderRadius:"10px",
        display:"inline-flex"
    },
    avatar:{
        marginLeft:"30px"
    },
    name:{
        marginLeft:"130px",
    }

}));

function TransactionViewSmall(){
    const classes = useStyles();
    return(
        <div className={classes.section}>
            <Avatar alt="Remy Sharp" src={Michael01} className={classes.avatar}/>
            <div className={classes.name}>
                <span style={{lineHeight:"40px"}}>Carl Shelding</span>
            </div>
            <div className={classes.name}>
                <span style={{lineHeight:"40px"}}>12:42:00 PM</span>
            </div>
            <div className={classes.name}>
                <span style={{lineHeight:"40px"}}>$1200</span>
            </div>
            <div className={classes.name}>
                <span style={{lineHeight:"40px"}}>Completed</span>
            </div>
        </div>
    );
}

export default TransactionViewSmall;