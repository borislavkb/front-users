import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';
import "./SingleUserPage.css";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


export default function SingleUserPage({userID}){

        const notify = () => toast("User deleted!", { 
            className: "custom-toast",
            draggable: true, 
            position: toast.POSITION.TOP_CENTER});

        const updateNotify = () => toast("User updated!", {
        className: "custom-toast",
        draggable: true, 
        position: toast.POSITION.TOP_CENTER})

        let history = useNavigate();
        const { id } = useParams();
        const [dataUser, setDataUser] = useState({});
        const [update, setUpdate] = useState(false);

        const [isActive, setActive] = useState(false);

        const schema = yup.object({
          firstName: yup.string().required(),
          secondName: yup.string().required(), 
          titel: yup.string().required(),
          gender: yup.string().required(),
          birthDate: yup.date().required()
        }).required();

        const URL = `https://backend-project-2022.herokuapp.com/user/${id}`;

        useEffect(()=> {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                setDataUser(data);
                console.log(data)
                
                })
                .catch((err) => {
                console.log(err)
                })
            }, []);

      useEffect(() => {
        fetch(URL)
        .then((res) => res.json())
                .then((data) => {
                setDataUser(data);
                console.log(data)
                
                })
                .catch((err) => {
                console.log(err)
                })
            }, [update]);

    function handleDelete(){
              const URL = `https://backend-project-2022.herokuapp.com/user/${id}`;
                fetch(URL, {method: 'DELETE', 
              headers: { 'Content-Type' : 'application/json'},
            
              body: null})
              .then((response) => {
                return response.json()
              })
              .then((data) => {
                console.log(data);
                setUpdate(true);
              })
              notify();
            };

    function toggleClass(){
              setActive(!isActive);
        
            }
    
        const { register, handleSubmit, formState:{ errors } } = useForm({
              resolver: yupResolver(schema)
            });
            
            const onSubmit = updateUser => 
              fetch(URL, {
                  method: "PATCH",
                  headers: {
                      "Content-Type" : "application/json",
                  },
                  body: JSON.stringify(updateUser)
              
              })
              .then((res) => res.json())
              .then(() => {
                setUpdate(true);
                updateNotify()
                
              });
            

    return (
      
      <div>
        <ToastContainer />
        <section className="container" update={update}>
          <h2 className="text">Name: {dataUser.firstName} {dataUser.secondName}</h2>
          <p className="text">Gender: {dataUser.gender}</p>
          <p className="text">Titel: {dataUser.titel}</p>
          <p className="text">Birthdate: {dataUser.birthDate}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={toggleClass}>Bearbeiten</button>
          <div className={isActive ? "hidden-on" : "hidden-off"}>

          <div className="edit-form-container">
        <form className="Edit-form" onSubmit={handleSubmit(onSubmit)}>



        <label> Edit First Name: </label>
          <input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
          <label>Edit Second Name: </label>
          <input {...register("secondName")} />
          <p>{errors.firstName?.message}</p>
            
            <label> Edit Titel: </label>
          <select {...register("titel")}>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="Prof. Dr.">Prof. Dr.</option>
            <option >no titel</option>
          </select>
        
            <label> Edit Gender: </label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
         
         <label> Edit Birthdate: </label>
         <input type="date" {...register("birthDate")}></input>
    
          <label>Edit user:</label>
          <input className="submit-btn" type="submit" />
        </form>
        </div>

          </div>
        </section>
      </div>
    )
}