// import React from 'react';
// import './ButtonGroup.css';


// const ButtonGroup = () => {
//   return (
//     <div className="button-container">
//       <button className="main-button breakfast-button">Breakfast</button>
//       <button className="main-button lunch-button">Lunch</button>
//       <button className="main-button dinner-button">Dinner</button>
//     </div>
//   );
// }

// export default ButtonGroup;
import React from 'react';
import '../CSS/ButtonGroup.css';

export default function ButtonGroup({name,image}) {
  return (
    <div className='ButtonItem'>
        {<div className='MealImage' style={{ backgroundImage: `url(${image})` }}>
            
        </div>}
        <h3>{name}</h3>
        

    </div>
  )
}
