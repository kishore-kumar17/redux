import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
    const [roomname, setroomname] = useState("");


    const change =(e)=>{
        e.preventDefault();
        setroomname(e.target.value);

    }
  return (
    <div style={{backgroundColor:'lightgray',minHeight:'100vh'}}>
        <h2>SOCKET IO</h2>
        <div style={{textAlign:'center',margin:'200px',}}>
        <textarea  type="text" placeholder='room' onChange={change} value={roomname}></textarea>
        <br/>

        <Link to={`/${roomname}`}> 
        <Button variant='warning'  style={{margin:'50px'}}>JOIN ROOM</Button></Link>
        </div>
    </div>
  )
}

export default Home;