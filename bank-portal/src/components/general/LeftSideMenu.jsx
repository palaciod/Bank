import React from "react";
import {withStyles} from "@material-ui/core/styles";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import InsertChartOutlinedOutlinedIcon from '@material-ui/icons/InsertChartOutlinedOutlined';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import WhereToVoteOutlinedIcon from '@material-ui/icons/WhereToVoteOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
const useStyles = theme => ({
    menu:{
        width:"100px",
        backgroundColor:"#DFDFF0"
    },
    firstMenuItem:{
        textAlign:"center",
        marginTop:"150px"
    },
    menuItem:{
        textAlign:"center",
        marginTop:"50px"
    }
});
class LeftSideMenu extends React.Component{
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.menu}>
                <div className={classes.firstMenuItem}>
                    <HomeOutlinedIcon fontSize="large"/>
                </div>
                <div className={classes.menuItem}>
                    <InsertChartOutlinedOutlinedIcon fontSize="large"/>
                </div>
                <div className={classes.menuItem}>
                    <AssignmentOutlinedIcon fontSize="large"/>
                </div>
                <div className={classes.menuItem}>
                    <WhereToVoteOutlinedIcon fontSize="large"/>
                </div>
                <div className={classes.menuItem}>
                    <ReceiptOutlinedIcon fontSize="large"/>
                </div>
                
            </div>
        );
    }
}

const withStylesLeftSideMenu = withStyles(useStyles)(LeftSideMenu);

export default withStylesLeftSideMenu;