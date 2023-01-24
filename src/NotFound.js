import { Link } from "react-router-dom";

export default function NotFound(){
    
    return(
        <div>
        <h2 style={{marginTop:"300px"}}>sorry, looks like this page is missing, please try other page</h2>
        <Link to='/'>Back home</Link>
        </div>
    )
}