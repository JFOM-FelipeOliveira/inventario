import React from "react";
import Navbar from "../../components/navbar/navbar";
import useAuth from "../../hooks/useAuth";


const Home = () => {
  const  {user} = useAuth();

  return (
    <div>
      <Navbar />
      <h2> {user.email} </h2>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
