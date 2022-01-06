import './App.css';
import FormPage from "./pages/FormPage"
import {Routes, Route} from 'react-router-dom';
import SingleUserPage from './pages/SingleUserPage';
import UsersPage from './pages/UsersPage';
import Nav from './components/Nav';
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  

  return (
    <div>
      <Nav />
      <Routes>
      <Route path="/" element={<UsersPage />}>
         </Route>
      <Route path="/add-user" element={<FormPage/>}>
       </Route>
       <Route path="/user/:id" element={<SingleUserPage />}>

       </Route>
    </Routes>
    <ToastContainer notify={toast}/>

    </div>
    
  )
    

  }
