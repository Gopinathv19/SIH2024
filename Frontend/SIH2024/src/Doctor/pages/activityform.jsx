import React, { useState } from 'react';
import '../style/form.css';

const FormPage = () => {
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   alert("activity added sucessfully");

   
    
  };

  return (
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}>
      <div className="form-container">
      <h1 className="form-heading">Activity Details</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea
            id="description"
            className="form-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description here"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="url" className="form-label">URL:</label>
          <input
            type="url"
            id="url"
            className="form-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL here"
            required
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
   </div>
  );
};

export default FormPage;
