import React, { useEffect } from "react";
import axios from "axios";

const Person = () => {
  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      const response = await axios.get("/google/test");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return <div>hello</div>;
};

export default Person;
