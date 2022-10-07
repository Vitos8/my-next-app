import Head from "next/head";
import Image from "next/image";
import styles from "../styles/pages-styles/Home.module.scss";
import AvatarPng from "../public/Avatar.png";

const Home = () => {
      return (
          <div className='container'>
                <Head>
                  <title>Home</title>
                  <meta name="description" content="My first next app"/>
                  <link rel="icon" href="/Avatar.png" />
                </Head>
                <main className={styles.main}>
                  <div className={styles.row}>
                    <div className={styles.text} >
                      <h1 className={styles.title} >Hi, I am John, Creative Technologist</h1>
                      <p className={styles.subtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                      <button className={styles.button} >Download Resume</button>
                    </div>
                    <Image src={AvatarPng} alt="avatar" width={250} height={250}/>
                  </div>
                </main>
          </div>
      );
};

export default Home;
