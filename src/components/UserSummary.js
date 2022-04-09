

function UserSummary(props){
    const data = props.currentUser;

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