import React, { useState } from 'react'
// import { useState } from "react";


const Form = () =>
{
  const [formData, setFormData] = useState({
    name:    "",
    petName: "",
    aptDate: "",
    aptTime: "",
    comment: "",
  });

  const [table, setTable] = useState([]);

  const handleInputChange = (e) =>
  {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const click = () =>
  {
    setTable(prevFormData =>[...prevFormData, formData]);
  };


  const filter = () =>
  {

    
  };

  const deleteEntry = (index) => {
    setTable((prevTable) => prevTable.filter((_, i) => i !== index));
  };

  return (
    <div >
      <h1 class='text-lg font-bold text-navy-700'>Your Appointments</h1>
      <label htmlFor="" >Owner Name</label>
      <input onChange={handleInputChange} type="text" name='name' />
      <label htmlFor="">Pet Name</label>
      <input onChange={handleInputChange} type="text" name='petName' />
      <label htmlFor="">Apt Date</label>
      <input onChange={handleInputChange} type="date" name='aptDate' />
      <label htmlFor="">Apt Time</label>
      <input onChange={handleInputChange} type="time" name='aptTime' />
      <label htmlFor="">Appointment Notes</label>

      <textarea onChange={handleInputChange} cols="30" name='comment' rows="10" placeholder='Detailed comments about the condition'/>
      <button type='submit' onClick={click}>Submit</button>
      <button onClick={filter} >Filter</button>

      {table.map((elm, index) => (
        <div key={index}>
          <li>{elm.name}</li>
          <li>{elm.petName}</li>
          <li>{elm.aptDate}</li>
          <li>{elm.aptTime}</li>
          <li>{elm.comment}</li>
          <button onClick={() => deleteEntry(index)}>Delete</button>

        </div>
      ))}



    </div>
  );
}

export default Form