import React from "react";
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AvatarBadge from "../general/AvatarBadge";
import {withStyles} from "@material-ui/core/styles";
import IconButton from '@material-ui/core/IconButton';
const useStyles = theme => ({
    section:{
        width:"150px",
        margin:"auto",
        marginTop:"50px",
    },
    menuSection:{
        display:"inline-flex",
    },
    menuItem:{
        width: "30px",
    },
    menuItemInner:{
        width: "30px",
        marginLeft:"25px"
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    }
});

class TopMenu extends React.Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.section}>
                <div className={classes.menuSection}>
                    <div className={classes.menuItem}>
                        <IconButton>
                            <DateRangeOutlinedIcon style={{fontSize:"30px"}}/>
                        </IconButton>
                    </div>
                    <div className={classes.menuItemInner}>
                        <IconButton>
                            <NotificationsNoneOutlinedIcon style={{fontSize:"30px"}}/>
                        </IconButton>
                    </div>
                    <div className={classes.menuItemInner} style={{marginTop:"-3px", marginLeft:"25px"}}>
                        <AvatarBadge/>
                    </div>
                </div>
            </div>
        );
    }
}

const withStylesTopMenu = withStyles(useStyles)(TopMenu);

export default withStylesTopMenu;
