import { useState } from "react";
import axios from "axios";
import { Routes,Route,Link } from 'react-router-dom';
import { Navigate,useNavigate } from "react-router-dom";

export default function Create(){
    const[inputs,setInputs]=useState({});
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputs(values=>({...values, [name]:value}));
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post('https://cors-everywhere.herokuapp.com/http://3.222.98.25/api/create.php',inputs, {
            headers: {
              
            }
          })
            .then(response => {
              console.log(response.data)
            }).catch(err=>console.log(err));
             navigate('/read');
     }
    return(
        <div>
             <Link to='/'>Show Posts</Link>
        <h1 style={{marginTop:"150px"}}>Create a post</h1>
        <form  onSubmit={handleSubmit}>
            <div className="marginBottom">
            <label className="marginRight" >Title:</label>
            <input type="text" name="title" onChange={handleChange} required></input>
            </div>
            <div className="marginBottom bodyCenter">
            <label className="marginRight">Body:</label>
            <textarea style={{height:"50px"}}type="text" name="body"  onChange={handleChange} required></textarea>
            </div>
<button>submit</button>
        </form>
        </div>

    )
}