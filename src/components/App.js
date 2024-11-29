
import React from "react";
import './../styles/App.css';
import UsersList from "./UsersList";
import{BrowserRouter, Route, Routes} from "react-router-dom"
import UserDetail from "./UserDetail";


const data = [
  {
    name: "Shubham",
    username: "qwerty",
    email: "abc@accio.com",
    phone: 9315511606,
    website: "hello.world"
  },
  {
    name: "Aarav",
    username: "aarav_01",
    email: "aarav@accio.com",
    phone: 9876543210,
    website: "aarav.dev"
  },
  {
    name: "Meera",
    username: "meera_m",
    email: "meera@accio.com",
    phone: 9123456789,
    website: "meera.codes"
  },
  {
    name: "Ishaan",
    username: "ishaan.innovate",
    email: "ishaan@accio.com",
    phone: 9988776655,
    website: "ishaan.tech"
  },
  {
    name: "Sanya",
    username: "sanya123",
    email: "sanya@accio.com",
    phone: 9876512345,
    website: "sanya.create"
  },
  {
    name: "Rohit",
    username: "rohit.pro",
    email: "rohit@accio.com",
    phone: 9123456780,
    website: "rohitdev.com"
  },
  {
    name: "Tanya",
    username: "tanya.tech",
    email: "tanya@accio.com",
    phone: 9345612301,
    website: "tanya.dev"
  },
  {
    name: "Anika",
    username: "anika.coder",
    email: "anika@accio.com",
    phone: 9123467890,
    website: "anika.codes"
  },
  {
    name: "Rahul",
    username: "rahul_creator",
    email: "rahul@accio.com",
    phone: 9988776600,
    website: "rahulcreative.tech"
  },
  {
    name: "Sneha",
    username: "sneha.dev",
    email: "sneha@accio.com",
    phone: 9876543299,
    website: "snehadeveloper.com"
  }
];



const App = () => {
  return (
    <BrowserRouter>

      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users/:id" element={<UserDetail />}/>
        </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App



const Home = () => {
  return (
    <>
    <h1>User List</h1>

    <UsersList data={data} />
    </>
  )
}