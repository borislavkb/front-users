import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from 'react';

export default function SingleUserPage(){
        let history = useNavigate();
        const { id } = useParams();
        const [dataUser, setDataUser] = useState({});
        const URL = `http://localhost:7000/:${id}`;

        useEffect(()=> {
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                setDataUser(data);
                
                })
                .catch((err) => {
                console.log(err)
                })
            }, [URL]);


    


    return (
      <div>
        <section>
          <h2>{dataUser.firstName}</h2>
          <p>{dataUser.secondName}</p>
        </section>
      </div>
    )
}