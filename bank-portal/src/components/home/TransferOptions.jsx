import {makeStyles} from "@material-ui/core/styles";
import TransferOption from "./TransferOption";
const useStyles = makeStyles((theme) => ({
    section:{
        display: "inline-flex",
    }
}));

const transfersArray = [1,2,3,4]

function TransferOptions(){
    const classes = useStyles();
    return(
        <div className={classes.section}>
            {transfersArray.map((transferOption) => {
                if(transferOption === 1){
                    return(
                        <TransferOption/>
                    );
                }else{
                    return(
                        <div style={{marginLeft:"35px"}}>
                            <TransferOption/>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default TransferOptions;