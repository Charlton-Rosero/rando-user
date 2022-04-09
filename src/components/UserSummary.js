import { useState } from "react";

function UserSummary(props){
    const data = props.currentUser;
    const [moreInfo, setMoreInfo]= useState(false)

    // EHH I'll DO THIS TOMORROW


    if(data){
        return(
            <div>
                <p>{data.name.title}. {data.name.first} {data.name.last}</p> 
                <p>{data.email}</p>
            </div>


        )
    }

    else{
        return(
            <div>
              There is no user data
            </div>
        )
    }
}


export default UserSummary