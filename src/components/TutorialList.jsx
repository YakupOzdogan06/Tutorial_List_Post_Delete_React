import React from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";

const TutorialList = ({ tutorial, getTutor }) => {
  const deleteTutorial = async (id) => {
    const url = "https://635182583e9fa1244e608e5e.mockapi.io/api/repeated";

    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }

    getTutor();
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutorial?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  {/* <FaEdit
                        size={20}
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#edit-modal"
                        className="me-2 text-warning"
                        onClick={() =>
                          editTutorial({
                            id: "1581",
                            title: "UPDATE",
                            description: "UPDATE",
                          })
                        }
                      /> */}
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTutorial(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TutorialList;
