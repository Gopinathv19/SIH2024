import React from 'react';
import CardComponent from '../pages/subact';
import { useNavigate } from 'react-router-dom';

const Editactivity= () => {
   const navigate=useNavigate();
  const activities = [
    {
      title: 'Speech Therapy Activity 1',
      content: 'This activity helps with speech articulation.',
      url: 'https://www.planetebook.com/free-ebooks/pride-and-prejudice.pdf'
    },
    {
      title: 'Speech Therapy Activity 2',
      content: 'This activity improves pronunciation skills.',
      url: 'https://youtu.be/Nq0W9g5dj-I?si=J5Em0atAO9vC-HqU'
    },
    {
      title: 'Speech Therapy Activity 3',
      content: 'This activity aids in fluency development.',
      url: 'https://www.planetebook.com/free-ebooks/frankenstein.pdf'
    },
   
  ];
  
  return (
    <div className="container mt-5">
    <button style={{position:"absolute",top:"10px",right:"10px",backgroundColor:"aqua",borderRadius:"3px",boxShadow:"2px -2px 5px aqua",width:"50px",height:"auto",padding:"2px"}} onClick={()=>{activityform}}>Add</button>
      <div className="row">
        {activities.map((activity, index) => (
          <div className="col-md-4 mb-4" key={index} style={{height:"200px",width:"300px"}}>
            <CardComponent 
              title={activity.title} 
              content={activity.content} 
              url={activity.url} 
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editactivity;
