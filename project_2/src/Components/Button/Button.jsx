
import style from './Button.module.css'

export default function Button(props) {

    const {isoutline, icon, text} =props;  //Destructuring
  return (
    <>
 
    <button className={isoutline ? style.outline : style.button}>
    {icon}
      {text}
      </button>
     
    </>
  )
}
