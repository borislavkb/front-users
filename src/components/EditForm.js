import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./EditForm.css"

const schema = yup.object({
    firstName: yup.string().required(),
    secondName: yup.string().required(), 
    titel: yup.string().required(),
    gender: yup.string().required(),
    birthDate: yup.date().required()
  }).required();

export default function EditForm(id){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const url = `http://localhost:7000/user/${id}`;
      const onSubmit = updateUser => 
        fetch(url, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(updateUser)
        
        })
        .then((res) => res.json())
    
        
    return (
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
            <option value>no titel</option>
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
    )
}