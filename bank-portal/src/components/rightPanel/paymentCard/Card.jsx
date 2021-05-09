import {makeStyles} from "@material-ui/core/styles";
import {Icon} from '@material-ui/core';
import Chip from "../../../svg/CrediCardChip.svg";
import MasterCardLogo from "../../../svg/MasterCardLogo.svg";
const useStyles = makeStyles((theme) => ({
    cardSection:{
        padding:"20px"
    },
    card:{
        width:"200px",
        height:"125px",
        backgroundColor:'lightgrey',
        margin:"auto",
        borderRadius:"10px",
        boxShadow:"1px 25px 20px lightgrey;",
        backgroundImage: "linear-gradient(to right, #4E5050 , #22202A);",
    },
    cardNumber:{
        lineHeight:"10px",
        fontSize:"12px",
        fontWeight:"600",
        marginLeft:"15px",
        color: "white"
    },
    cardName:{
        fontSize:"12px",
        marginLeft:"15px",
        color: "white"
    },
    chip:{
        marginLeft:"15px",
        marginTop:"15px"
    },
    cardBottom:{
        display:"inline-Flex",
        width:"180px"
    },
    masterLogo:{
        marginLeft:"30px",
        width:"40px",
        height:"80px",
    }
}));



function Card(){
    const classes = useStyles();
    return(
        <div className={classes.cardSection}>
            <div className={classes.card}>
                <Icon>
                    <img src={Chip} height={20} width={20}  alt="Credit Card Chip" className={classes.chip}/>
                </Icon>
                <p className={classes.cardNumber}>4562 1122 4595 7852</p>
                <div className={classes.cardBottom}>
                    <p className={classes.cardName}>Ronald Leopole</p>
                    <Icon className={classes.masterLogo}>
                        <img src={MasterCardLogo} height={50} width={50}  alt="Credit Card Chip" />
                    </Icon>
                </div>
            </div>
            
        </div>
    );
}
export default Card;