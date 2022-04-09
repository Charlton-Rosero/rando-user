import { useState } from "react";

function UserSummary(props){
    const data = props.currentUser;
    const [moreInfo, setMoreInfo]= useState(false)

    const showMore = async (event) =>{
        setMoreInfo(true)
    }
 
    const showLess= async (event) =>{
        setMoreInfo(false)
    }
    console.log(moreInfo)
    if(data){

        return(
            <div>
                <p>{data.name.title}. {data.name.first} {data.name.last}</p> 
                <p>{data.email}</p>
               <button onClick={(event) => showMore(event)}>More Info</button> 
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