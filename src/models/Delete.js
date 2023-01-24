import { useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
export default function Delete(){
    const navigate=useNavigate();
    const {id}=useParams(); 
    const harcode={"id":11};
    useEffect(()=>{
    deletePost();
    },[]);
//currently using hard code but still show same error
 const deletePost=()=>{ 
    axios.delete(`http://localhost:8081/mypost/api/delete.php/?id=${id}`)
    .then(res=>{
     console.log(res.data)
     navigate('/read');
 }).catch(err=>console.log(err))}
    return(
        <h1>Delete my Post</h1>
    )
}