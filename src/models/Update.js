import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate,useParams } from "react-router-dom";

export default function Update(){
    const[inputs,setInputs]=useState({});
    //const[post,setPost]=useState({});
    const navigate=useNavigate();
    const {id}=useParams();
    useEffect(()=>{
        getSinglePost();
    },[]);

    function getSinglePost(){
        axios.get(`http://34.228.65.41/api/read_single.php?id=${id}`)
        .then(res=>{
            console.log(res.data) 
            setInputs(res.data)
        }).catch(err=>console.log(err))
    }
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values, [name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.put('http://34.228.65.41/api/Update.php',inputs)
            .then(response => {
              console.log(response.data) ;navigate('/read');
            }).catch(err=>console.log(err));
           
     }
    return(
        <div>
             <Link to='/'>Show Posts</Link>
        <h1 style={{marginTop:"150px"}}>Update a post</h1>
        <form  onSubmit={handleSubmit}>
            <div className="marginBottom">
            <label className="marginRight" >Title:</label>
            <input type="text" value={inputs.title} name="title" onChange={handleChange} required></input>
            </div>
            <div className="marginBottom bodyCenter">
            <label className="marginRight">Body:</label>
            <textarea style={{height:"50px"}}type="text" name="body"  value={inputs.body} onChange={handleChange} required></textarea>
            </div>
<button>update</button>
        </form>
        </div>

    )
}