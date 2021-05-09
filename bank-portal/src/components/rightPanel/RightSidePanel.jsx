import React from "react";
import {withStyles} from "@material-ui/core/styles";
import TopMenu from "./TopMenu";
import Card from "./paymentCard/Card";
import RecentActivitySection from "./RecentActivitySection";
import UpcomingPaymentSection from "./UpcomingPaymentSection";
const useStyles = theme => ({
    section:{
        width:"230px",
        backgroundColor:"#ECECF6"
    }
});
class RightSidePanel extends React.Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.section}>
                <TopMenu/>
                <Card />
                <RecentActivitySection />
                <br/>
                <UpcomingPaymentSection />
            </div>
        );
    }
}

const withStylesRightSideMenu = withStyles(useStyles)(RightSidePanel);

export default withStylesRightSideMenu;