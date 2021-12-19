import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import "./UsersPage.css";

export default function UsersPage(){


    const URL = 'https://server-test-bb.herokuapp.com/users'
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
                       <Link to={`/${user._id}`}>{`${user.firstName} ${user.secondName}`}</Link>
    
                             <li key={user._id}>
                               <p>{user.titel}</p>
                               <p>{user.firstName}</p>
                               <p>{user.secondName}</p>
                               <p>{user.gender}</p>
                               <p>{user.birthDate}</p>
                             </li>
                            <button >Bearbeiten</button>
                           
                     </div>)}))}}
    
                         
    return renderUserList();
}
    
    
                                                
    
  
