import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Header from "./Header";
import TransferOptions from "./TransferOptions";
import Balance from "./Balance";
import History from "./History";
import LeftSideMenu from "../general/LeftSideMenu";
import RightSidePanel from "../rightPanel/RightSidePanel";
const useStyles = theme => ({
    sectionWithMenu:{
        display:"inline-flex"
    },
    section:{
        width:"1110px",
        backgroundColor:"#f5f5fd",
        display:"block",
        fontFamily: "acumin-pro, sans-serif",
        fontWeight: "400",
        fontStyle: "normal",
        paddingTop:"50px"
    },
    transfers:{
        margin:"auto",
        marginTop: "40px",
        textAlign:"center"
    },
    balanceSection:{
        marginTop:"40px"
    },
    historySection:{
        marginTop: "30px"
    }
});

class Home extends React.Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.sectionWithMenu}>
                <LeftSideMenu />
                <div className={classes.section}>
                    <Header title="Dashboard" subTitle="Transfer updates:"/>
                    <div className={classes.transfers}>
                        <TransferOptions />
                    </div>
                    <div className={classes.balanceSection}>
                        <Balance balance={"15000"}/>
                    </div>

                    <div className={classes.historySection}>
                        <History />
                    </div>
                </div>
                <RightSidePanel/>

            </div>
        );
    }
}
const withStylesHome = withStyles(useStyles)(Home)
export default withStylesHome;