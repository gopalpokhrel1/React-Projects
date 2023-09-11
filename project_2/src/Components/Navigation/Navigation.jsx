import style from './Navigation.module.css'

export default function Navigation() {
 

  return (
    <>
      <nav >
        <div className={`${style.container} global  `}>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <ul>
                <li>Home</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </div>
      </nav>
    </>
  )
}
