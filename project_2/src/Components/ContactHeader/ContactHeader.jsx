import style from './ContactHeader.module.css'

export default function ContactHeader() {

    console.log(style);
  return (
    <>
     <div className={`${style.contact_section} global`}>
        <h1>Contact us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, animi. Omnis quisquam voluptatem minima, eaque est, hic incidunt expedita consectetur fugit labore, deserunt velit nisi dolorum delectus facilis praesentium vitae laudantium. Veritatis vitae officiis placeat velit minus, ea excepturi quisquam vel architecto, aliquam at quis magni recusandae obcaecati sit sunt.</p>
     </div>
    </>
  )
}
