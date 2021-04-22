import {makeStyles} from "@material-ui/core/styles";
import CreditCardIcon from '@material-ui/icons/CreditCard';
const useStyles = makeStyles((theme) => ({
    box: {
        width:"200px",
        backgroundColor:"white",
        display:"block",
        borderRadius:"60px",
        padding:"10px",
        textAlign:"left"
    },
    text:{
        color:"grey",
        fontSize:"17px",
        marginLeft:"20px",
    },
    icon:{
        marginTop:"15px",
        marginLeft:"20px",
        fontSize:"50px",
    },
    dollarAmount:{
        color:"black",
        fontSize:"30px",
        marginLeft:"20px",
        fontWeight:"600"
    }
}));

function TransferOption(){
    const classes = useStyles();
    return(
        <div className={classes.box}>
            <div>
                <CreditCardIcon className={classes.icon}/>
                <div className={classes.text}>
                    Transfer via Card Number
                </div>
                <br/>
                <div className={classes.text}>
                    Last Transfer: 
                </div>
                <div className={classes.dollarAmount}>
                    $1500
                </div>
                <br/>
            </div>
        </div>
    );
}

export default TransferOption;