import "./UserCard.css";
import {Link} from 'react-router-dom';

export default function UserCard({handleDeleteItemFromList, user}){
    return (
        
<section>
        <Link to={`/users/${user.id}`} className="ItemCard__button right">
           <li className="ItemCard one-edge-shadow" key={user.id}>{user.firstName}</li>
        </Link>
</section>
       
    
    )
}