import style from './Box.module.css'



export default function Box({name, img, text, price}) {


  return (
    <>
    <div className={style.container}>
        <div className={style.img}>
            <img src={ img} alt="photo" />
        </div>
        <div className={style.item}>
            <h1>{name}</h1>
            <p>{text}</p>
            <p className={style.paragraph}  style={{fontSize:'1rem'}}>${price.toFixed(2)}</p>
        </div>
    </div>
      
    </>
  )
}
