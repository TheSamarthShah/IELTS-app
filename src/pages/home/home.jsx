import React, {useState} from 'react';
import {useAuth} from '../../components/context/AuthContext';
import { Card, Button, Alert } from 'react-bootstrap';
import'./home.css';
import { useNavigate } from 'react-router-dom';

const Home = () =>{

  const history = useNavigate()
  const {currentUser ,logout} = useAuth()
  const [error, setError] =useState("")
async function handleLogout(){
    setError('')

    try{
      await logout()
      history('/login')
    }catch{
      setError('Error logging out!')
    }
}
  return (
    <>

   {/*} <Card>
      <Card.Body>
        <h2 className="text-center mb-4"></h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email:</strong>{currentUser.email}
      </Card.Body>
  </Card>*/}
    <div className="w-100 text-center mb-2">
      <Button variant="link" onClick={handleLogout}>Log Out</Button>
  </div>
   
   </>
   
  );
}

export default Home;
