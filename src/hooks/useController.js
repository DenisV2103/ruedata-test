/// Dependencies
import { useState } from "react";

export const useController = (query) => {
  const [isOnline, setIsOnline] = useState(false);
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [elementDeleted, setElemenetDeleted] = useState(null);
  const [name, setName] = useState({});
  const [description, setDescription] = useState({});
  const [type, setType] = useState({});

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleType = (e) => {
    setType(e.target.value);
  };

  const create = (e) => {
    setIsOnline(false);
    fetch(`${process.env.REACT_APP_ENDPOINT}${query}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: "POST",
      body: JSON.stringify({
        name: e.target[0].value,
        description: e.target[1].value,
        age: e.target[2].value,
      }),
    })
      .then((toJson) => toJson.json())
      .then((response) => {
        setData([...data, response]);
        setIsOnline(true);
      });
  };

  const callData = () => {
    fetch(`${process.env.REACT_APP_ENDPOINT}${query}`)
      .then((toJson) => toJson.json())
      .then((response) => {
        setData(response);
        setIsOnline(true);
      });
  };

  const deleteData = (id) => {
    fetch(`${process.env.REACT_APP_ENDPOINT}${query}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((_) => {
        setOpenModal(true);
        setElemenetDeleted(id);
      });
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  return [
    isOnline,
    openModal,
    elementDeleted,
    data,
    callData,
    deleteData,
    create,
    closeModal,
    handleName,
    handleDescription,
    handleType,
  ];
};
