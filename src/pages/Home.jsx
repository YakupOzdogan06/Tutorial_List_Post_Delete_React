import React from "react";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [tutorial, setTutorial] = useState([]);

  const url = "https://635182583e9fa1244e608e5e.mockapi.io/api/repeated";

  const getTutor = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorial(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutor();
  }, []);

  return (
    <div>
      <AddTutorial getTutor={getTutor} />
      <TutorialList tutorial={tutorial} getTutor={getTutor} />
    </div>
  );
};

export default Home;
