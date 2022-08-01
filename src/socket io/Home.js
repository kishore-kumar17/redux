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
    <div>
        <h2>SOCKET IO</h2>
        <input  type="text" placeholder='room' onChange={change} value={roomname}></input>
        <Link to={`/${roomname}`}> 
        <Button variant='outline-warning'>JOIN ROOM</Button></Link>
    </div>
  )
}

export default Home;