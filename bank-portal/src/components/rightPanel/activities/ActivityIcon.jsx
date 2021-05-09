import {makeStyles} from "@material-ui/core/styles";
import OpacityIcon from '@material-ui/icons/Opacity';
import FlashOnOutlinedIcon from '@material-ui/icons/FlashOnOutlined';
const useStyles = makeStyles((theme) => ({
    icon:{
        backgroundColor:"white",
        width:"40px",
        borderRadius:"10px",
        padding:"3px",
        height:"40px",
        marginTop:"25px"
    }

}));

function ActivityIcon(props){
    const classes = useStyles();
    return(
        <div className={classes.icon}>
            <div style={{textAlign:'center'}}>
                <OpacityIcon style={{ fontSize:"30px", marginTop:"4px"}}/>
            </div>
        </div>
    );
}

export default ActivityIcon;