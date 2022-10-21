import axios from "axios";
import { useState } from "react";

const AddTutorial = ({ getTutor }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTutor = { title, description };
    console.log(newTutor);
    addTutorial(newTutor);
    setTitle("");
    setDescription("");
  };

  const addTutorial = async (newTutor) => {
    const url = "https://635182583e9fa1244e608e5e.mockapi.io/api/repeated";

    try {
      await axios.post(url, newTutor);
    } catch (error) {
      console.log(error);
    }
    getTutor();
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary text-center mb-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTutorial;
