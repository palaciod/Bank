import React from "react";
import {withStyles} from "@material-ui/core/styles";
import Dashboard from "./Dashboard";
import TransferOptions from "./TransferOptions";
import BarChart from "./BarChart";
const useStyles = theme => ({
    section:{
        width:"1110px",
        backgroundColor:"#f5f5fd",
        margin:"auto",
        fontFamily: "acumin-pro, sans-serif",
        fontWeight: "400",
        fontStyle: "normal",
        paddingTop:"50px"
    },
    transfers:{
        margin:"auto",
        marginTop: "40px",
        textAlign:"center"
    }
});

class Home extends React.Component {
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.section}>
                <Dashboard/>
                <div className={classes.transfers}>
                    <TransferOptions />
                </div>
                <BarChart />
            </div>
        );
    }
}
const withStylesHome = withStyles(useStyles)(Home)
export default withStylesHome;