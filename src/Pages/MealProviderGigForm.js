import React, { useState } from 'react'
import '../CSS/MealProviderGigForm.css' 
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer'

function MealProviderGigForm() {
  const [Name, setName] = useState('');
  const [Meal, setMeal] = useState('Breakfast');
  const [Type, setType] = useState('Vegetarian');
  const [Items, setItems] = useState('');
  const [Entry, setEntry] = useState([]);
  const handleAdd=()=>{
    const abc=[...Entry,[]]
    setEntry(abc)
  }
  const handleChange = (onChangeValue,i) =>{
    const inputData = [...Entry]
    inputData[i] = onChangeValue.target.value;
    setEntry(inputData)
  }
  // handling deletion
  const handleDelete=(i)=>{
    const deleteEntry = [...Entry]
    deleteEntry.splice(i,1)
    setEntry(deleteEntry)
  }
  console.log(Entry,"data")
  // const [Entry1, setEntry1] = useState('');
  // const [Entry2, setEntry2] = useState('');
  // const [Entry3, setEntry3] = useState('');
  // const [Entry4, setEntry4] = useState('');
  // const [Entry5, setEntry5] = useState('');

  // Submit results
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {Name, Meal, Type, Items, Entry};
    console.log(blog);
  }

  return (
  <div>
    <NavBar/>
    <div className='MealProviderGigForm'>
      <h3>Add your Gig</h3>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
        type='text'
        required
        value={Name}
        onChange={(e) => setName(e.target.value)}
        />
         <label>Meal:</label>
        <select>
          value = {Meal}
          onChange={(e) => setMeal(e.target.value)}
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <label>Type:</label>
        <select>
          value={Type}
          onChange={(e) => setType(e.target.value)}
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
        </select>
        <label>Regular Items:</label>
        <textarea
         required
         value={Items}
         onChange={(e) => setItems(e.target.value)}
        ></textarea>
        <h2>Menu</h2>

        {/* Adding text fields whenever necessary by clicking */}
        <div className='Add'>
        <button onClick={()=>handleAdd()}>Add</button>
        </div>
          {Entry.map((data,i)=>{
              return(
                <div className='addMenu'>
                  <input value={data} onChange={e=>handleChange(e,i)}></input>
                  <div className='close'>
                  <button onClick={()=>handleDelete(i)}>X</button>
                  </div>
                </div>
              )
          })}

        {/* <label>Entry 1</label>
        <textarea
         required
         value={Entry1}
         onChange={(e) => setEntry1(e.target.value)}
        ></textarea>
        <label>Entry 2</label>
        <textarea
         required
         value={Entry2}
         onChange={(e) => setEntry2(e.target.value)}
        ></textarea>
        <label>Entry 3</label>
        <textarea
         required
         value={Entry3}
         onChange={(e) => setEntry3(e.target.value)}
        ></textarea>
        <label>Entry 4</label>
        <textarea
         required
         value={Entry4}
         onChange={(e) => setEntry4(e.target.value)}
        ></textarea>
        <label>Entry 5</label>
        <textarea
         required
         value={Entry5}
         onChange={(e) => setEntry5(e.target.value)}
        ></textarea> */}
        <button className='Submit'>Submit</button>
      </form>
      
    </div>
    <Footer/>
  </div>
  )
}

export default MealProviderGigForm
