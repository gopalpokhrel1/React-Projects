import Button from "../Button/Button";
import style from "./ContactForm.module.css";
import { TbMessageChatbot } from "react-icons/tb";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { useState } from "react";

export default function ContactForm() {

    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [text, setText] = useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        setName(e.target[0].value);
        setEmail(e.target[1]. value);
        setText(e.target[2].value);
       
    }
  return (
    <>
      <div className={style.container}>
        <div className={style.contact_form}>
          <div className={style.top_button}>
            <Button

            
              text="Via support by Chat"
              icon={<TbMessageChatbot fontSize="1rem" />}
            />
            <Button text="Via by Call" icon={<IoIosCall fontSize="1rem" />} />
          </div>
          <Button
            text="Via from Email"
            isoutline={true}
            icon={<MdOutlineMailOutline fontSize="1rem" />}
          />

          <form action="" className={style.form_handler} onSubmit={onSubmit}>
            <div className={style.form_control}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" />
            </div>
            <div className={style.form_control}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" />
            </div>
            <div className={style.form_control}>
                <label htmlFor="text">Text</label>
                <textarea name="text" id="" cols="30" rows="6"></textarea>
            </div>

            <Button text='Submit'/>

            <div>{name + email+ text}</div>
          </form>
        </div>
        <div className={style.contact_img}>

            <img src="/image/img.jpg" alt="Photo" className={style.image} />
        </div>
      </div>
    </>
  );
}
