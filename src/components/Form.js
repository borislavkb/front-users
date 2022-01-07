import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./Form.css";
import {ToastContainer, toast} from 'react-toastify';

const schema = yup.object({
    firstName: yup.string().required(),
    secondName: yup.string().required(), 
    titel: yup.string().required(),
    gender: yup.string().required(),
    birthDate: yup.date().required()
  }).required();

export default function Form({onClick}){

  const userCreated = () => {
    toast("User added to Database !", {
      className: "custom-toast",
      draggable: true, 
      position: toast.POSITION.TOP_CENTER,
    })
  }
    
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const url = "https://backend-project-2022.herokuapp.com/"
      const onSubmit = newUser => {
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newUser)
        
        })
        .then((res) => {res.json()
        .catch((error) => console.error(error))
      ;});
      userCreated();
      
        }
    
      
        
    return (
        <div className="form-container">
        <form className="App-form" onSubmit={handleSubmit(onSubmit)}>



        <label>First Name: </label>
          <input {...register("firstName")} />
          <p>{errors.firstName?.message}</p>
          <label>Second Name: </label>
          <input {...register("secondName")} />
          <p>{errors.firstName?.message}</p>
            
            <label>Titel: </label>
          <select {...register("titel")}>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
            <option value="Prof. Dr.">Prof. Dr.</option>
            <option >no titel</option>
          </select>
        
            <label>Gender: </label>
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
         
         <label>Birthdate: </label>
         <input type="date" {...register("birthDate")}></input>
    
          <label>Create user:</label>
          <input className="submit-btn" type="submit" />
        </form>
        <ToastContainer />
         
        </div>
    )
}