import RecentActivityTab from "./ActivityTab";

function ActivitySection(props){
    return(
        <div style={{padding:"5px"}}>
            <h3 style={{marginLeft:"10px"}}>{props.title}</h3>
            <p style={{marginLeft:"10px", marginTop:"-10px"}}>{props.date}</p>
            <div>
                <RecentActivityTab />
            </div>
            <div style={{marginTop:"-25px"}}>
                <RecentActivityTab />
            </div>
            <div style={{marginTop:"-25px"}}>
                <RecentActivityTab />
            </div>
            <div style={{marginTop:"-25px"}}>
                <RecentActivityTab />
            </div>
        </div>
    );
}

export default ActivitySection;