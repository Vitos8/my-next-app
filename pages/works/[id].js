import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from "../../styles/pages-styles/Works.module.scss";
import workImg from "../../public/vercel.svg";

const work = ({item}) => {
  console.log(item);
  return (
    <div className='container' >
      <Head>
        <title>Work</title>
        <link rel="icon" href="/Avatar.png" />
      </Head>
      <div className={styles.work}>
        <div key={work.id} className={styles.item} >
        <Image src={workImg} alt='work-img' width={400} height={300}/>
        <div className={styles.itemText}>
          <h4 className={styles.itemTitle}>{item.title}</h4>
            <div className={styles.itemRow}>
              <i className={styles.itemYear}>2020</i>
              <i className={styles.itemType}>Typography</i>
            </div>
            <p className={styles.itemSubtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default work;

export async function getServerSideProps(context) {
  const {id} = context.params;
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      item: data,
    },
  };
}