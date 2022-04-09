import  axios  from "axios";


export default async function fetchData() {
    //axios call
   const BASE_URL= 'https://api.randomuser.me/'
    try{
        
          let response  = await axios.get(`${BASE_URL}`)
        let result = response.data.results
        return result   

    }
    catch (error) {
        console.log(error)
    }  
   

}
