import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./Form.css"

const schema = yup.object({
    firstName: yup.string().required(),
    secondName: yup.string().required(), 
    titel: yup.string().required(),
    gender: yup.string().required(),
    birthDate: yup.date().required()
  }).required();

export default function Form(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const url = "https://server-test-bb.herokuapp.com/users"
      const onSubmit = newUser => 
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(newUser)
        
        })
        .then((res) => res.json())
    
        
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
            <option value>no titel</option>
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
        </div>
    )
}