import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar'
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar/>
      <main className={styles.main}>

        <div>
          <p className=' text-2xl font-bold m-2'>SOFTWARE DEVELOPER</p>
          <p className=' text-xl font-bold m-2'>Mahammadakil Saiyad</p>
          <div className=' bg-white text-black p-3 rounded-md font-bold'>
          <code >
            while (noSuccess)&#123;<br></br>
            &nbsp;&nbsp;tryAgain()<br></br>
            &nbsp; if (Dead)&#123;<br></br>
            &nbsp;&nbsp;  break;<br></br>
            &nbsp;&#125;<br></br>
            &#125;
          </code>
          </div>
          <br></br>
          <button className=' bg-red-500 p-2 rounded-md m-2'>Watch Resume</button>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Saiyad Mahammadakil</p>
      </footer>
    </div>
  )
}
