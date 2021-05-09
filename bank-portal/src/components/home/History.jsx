import Header from "./Header";
import {makeStyles} from "@material-ui/core/styles";
import Transaction from "../transactions/TransactionViewSmall";
const useStyles = makeStyles((theme) => ({
    transactionSection:{
        marginTop:"20px"
    }

}));

function History(){
    const classes = useStyles();
    return(
        <div>
            <Header title="History" subTitle="Transactions in the last 6 months"/>
            <div className={classes.transactionSection}>
                <Transaction/>
            </div>
            <div className={classes.transactionSection}>
                <Transaction/>
            </div>
            <div className={classes.transactionSection}>
                <Transaction/>
            </div>
        </div>
    );
}

export default History;