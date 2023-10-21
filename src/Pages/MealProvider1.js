import { ButtonList } from "../Helpers/ButtonList";
import ButtonItem from '../Component/ButtonItem';

export default function MealProvider1() {
    return (
      <div>
        <div className='ButtonList'>
        {ButtonList.map((buttonItem, key ) => {
            return <ButtonItem key={key} name={buttonItem.name} image={buttonItem.image}/>
  
        })}
        </div>
          
        </div>
    )
  }