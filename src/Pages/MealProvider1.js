import { ButtonList } from "../Helpers/ButtonList";
import ButtonItem from '../Component/ButtonItem';
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import '../CSS/Home.css';

export default function MealProvider1() {
    return (
      <div>
        <NavBar/>
        <div>
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