import style from './Box.module.css'

export default function Box() {


  return (
    <>
    <div className={style.container}>
        <div className={style.img}>
            <img src="photo.jpg" alt="photo" />
        </div>
        <div className={style.item}>
            <h1>Food</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt ipsa mollitia, soluta tenetur</p>
            <p className={style.paragraph}>$200</p>
        </div>
    </div>
      
    </>
  )
}
