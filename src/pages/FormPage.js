import React from "react";
import Form from "../components/Form";
import {Link} from "react-router-dom";
import "./FormPage.css"

export default function FormPage(){
    return (<div className="form-page">
        <Form />
        <button><Link to="/">Back to list of users</Link></button>
        </div>
    )
}
