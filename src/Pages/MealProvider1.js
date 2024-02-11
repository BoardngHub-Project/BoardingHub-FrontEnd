import { ButtonList } from "../Helpers/ButtonList";
import ButtonItem from '../Component/ButtonItem';
import Footer from "../Component/Footer";
import NavigationBar from "../Component/NavigationBar";
import '../CSS/Home.css';
import '../CSS/MealProvider1.css';

export default function MealProvider1() {
    return (
      <div>
        <NavigationBar/>
        <div>
          <div className="para">
            <p>
              <h2 className="first">Choose Your Flavorful Adventure: Breakfast, Lunch, or Dinner... </h2>
              <h3>Your Tasty Exploration Starts Here!</h3>
            </p>
          </div>
          <div className='ButtonList'>
          {ButtonList.map((buttonItem, key ) => {
              return <ButtonItem key={key} name={buttonItem.name} image={buttonItem.image}/>
    
          })}
          </div>
        <Footer/>  
        </div>
      </div>
    )
  }