import { ButtonList } from "../Helpers/ButtonList";
import ButtonItem from '../Component/ButtonItem';
import Footer from "../Component/Footer";
import NavigationBar from "../Component/NavigationBar";
import '../CSS/Home.css';

export default function MealProvider1() {
    return (
      <div>
        <NavigationBar/>
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