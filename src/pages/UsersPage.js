import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./UsersPage.css";
import EditForm from "../components/EditForm";

export default function UsersPage(){


    const URL = 'http://localhost:7000/'
    const [data, setData] = useState([]);
    
  
    useEffect(()=> {
      fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
    }, []);


  
    function renderUserList(){

      
  
  
        if(data.length === 0){
          return (
            <p>
            There are no users currently stored. Add new users!
          </p>
          )
        } 
        else {
          return (
          data?.map((user, index) => {
                   return (
                     <div className="card">
                     <Link to={`/user/${user._id}`}>{`${user.firstName}, ${user.secondName}`}</Link>
    
                             <li key={user._id}>
                               <p>Title: {user.titel}</p>
                               <p>First name: {user.firstName}</p>
                               <p>Second name: {user.secondName}</p>
                               <p>Gender: {user.gender}</p>
                               <p>Birthday: {user.birthDate.slice(0, 10)}</p>
                             </li>
                            
                           
                     </div>)}))}}
    
                         
    return <div className="container-cards">{renderUserList()}</div>;
}
    
    
                                                
    
  
