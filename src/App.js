// Dependencies
import React, { useEffect } from "react";
import ReactJsAlert from "reactjs-alert";
// Css
import "./css/App.css";
// Hooks
import { useController } from "./hooks/useController";

// Components
import CardComponent from "./components/Card";
import FormComponent from "./components/Form";

function App() {
  const [
    isOnline,
    openModal,
    elementDeleted,
    data,
    callData,
    deleteData,
    create,
    closeModal,
    handleDescription,
    handleName,
    handleType,
  ] = useController("articles");

  useEffect(() => {
    callData();
  }, [elementDeleted]);

  return (
    <div className="App">
      <FormComponent
        formData={(e) => {
          create(e);
        }}
        handleDescription={handleDescription}
        handleName={handleName}
        handleType={handleType}
      />
      {isOnline
        ? data.map((e) => (
            <CardComponent
              key={e.id}
              name={e.name}
              age={e.age}
              {...e}
              openModal={openModal}
              onclick={() => deleteData(e.id)}
            />
          ))
        : null}
      <ReactJsAlert
        status={openModal}
        type="alert"
        title={`Acabas de eliminar el elemento: ${elementDeleted}`}
        Close={() => closeModal()}
      />
    </div>
  );
}

export default App;
