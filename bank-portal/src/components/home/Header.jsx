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

function Header(props){
    const classes = useStyles();
    return(
        <div >
            <div className={classes.header}>{props.title}</div>
            <div className={classes.subHeader}> {props.subTitle}</div> 
            {/* Transfer updates: */}
        </div>
    );
}

export default Header;

