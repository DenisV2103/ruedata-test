// Dependencies
import React from "react";

const FormComponent = ({
  formData,
  handleDescription,
  handleName,
  handleType,
}) => {
  return (
    <>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          formData(e);
        }}
      >
        <div className="input-List">
          <h3 className="text">Name:</h3>
          <input
            className="input"
            type="text"
            placeholder="Enter Name"
            name="type"
            onChange={handleName}
          ></input>
          <h3 className="text">Description:</h3>
          <input
            className="input"
            type="text"
            placeholder="Enter Description"
            name="description"
            onChange={handleDescription}
          ></input>
          <h3 className="text">Age:</h3>
          <input
            className="input"
            type="number"
            placeholder="Enter Age"
            name="type"
            onChange={handleType}
          ></input>
          <div className="div-button">
            <button className="button">Create</button>
          </div>
        </div>
      </form>
    </>
  );
};
export default FormComponent;
