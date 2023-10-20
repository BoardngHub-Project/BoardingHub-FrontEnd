import { ButtonList } from "../Helpers/ButtonList";

export default function MealProvider1() {
    return (
      <div>
        <div className='ButtonList'>
        {ButtonList.map((ButtonItem, key ) => {
            return <ButtonItem key={key} name={ButtonItem.name} image={ButtonItem.image}/>
  
        })}
        </div>
          
        </div>
    )
  }