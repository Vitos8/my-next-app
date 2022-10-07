import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/pages-styles/Works.module.scss";
import workImg from "../../public/vercel.svg";
import React from 'react';

const Works = ({works}) => {


	return(
		<div className="blue">
			<div className="container">
				<Head>
					<title>Works</title>	
					<link rel="icon" href="/Avatar.png"/>
				</Head>	
				<section className={styles.works} >
					<h2 className={styles.worksTitle}>Works</h2>
					<div className={styles.row}>
					{works?.map((work) => (
						<Link href={`/works/${work.id}`}>
							<div key={work.id} className={styles.item} >
								<Image src={workImg} alt='work-img' width={246} height={180}/>
								<div className={styles.itemText}>
									<h4 className={styles.itemTitle}>{work.title}</h4>
										<div className={styles.itemRow}>
											<i className={styles.itemYear}>2020</i>
											<i className={styles.itemType}>Typography</i>
										</div>
										<p className={styles.itemSubtitle}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
									</div>
								</div>
							</Link> 
					))}
					</div>
				</section>
			</div>
		</div>
	)
};
export default Works;

export async function getStaticProps() {
  const url = 'https://jsonplaceholder.typicode.com/photos';
  const res = await fetch(url);
  const data = await res.json();
	data.length = 10; 

  return {
    props: {
      works: data,
    },
  };
}
