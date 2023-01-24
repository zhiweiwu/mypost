import { useState ,useEffect} from "react";
import axios from "axios";
import { Routes,Route,Link } from 'react-router-dom';
export default function Read(){
    const[posts,setPosts]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8081/mypost/api/read.php')
        .then(res=>{
            console.log(res.data) 
            setPosts(res.data)
        }).catch(err=>console.log(err))
    },[])

    const postsarr= posts.length? posts.map((posts,key)=>{
        return(
            
        <tr key={key}>
            <td>{posts.title}</td>
            <td>{posts.body}</td>
            <td><Link to={`/Update/${posts.id}`}>update</Link></td>
            <td><Link to={`/Delete/${posts.id}`}>delete</Link></td>
        </tr>
    )}) : null;


    return(
        <div >
           <Link to='/create'>Create a post</Link>
        <h1>My Post</h1>
        <table className="center">
          <thead>
            <tr>
             <th> Title</th>  
             <th> Body</th>
             <th>action</th>
             <th>action</th>
            </tr>
           
            
            </thead>
            <tbody>
{postsarr}

</tbody>
    






        </table>

    </div>
    )
}