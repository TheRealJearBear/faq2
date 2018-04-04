import React, { Component } from 'react';


const QuestionForm = (props)=>{
  let label = props.label;
  let name = props.name;
  let value = props.value;
  let handleChange = props.handleChange

  return(
    <div>
      <label>{label}: </label>
      <input onChange={handleChange} type="text" className={name} name={name} id={name} value={value}/>
    </div>
  )
}




export default QuestionForm;
