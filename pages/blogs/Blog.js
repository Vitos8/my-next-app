import Head from "next/head";
import styles from "../../styles/Home.module.scss";

const Blog = () => {

	
	return(
		<div className={styles.container}>
			<Head>
				<title>Blog</title>
				<link rel="icon" href="/Avatar.png" />
			</Head>
			<div>
				Blog
			</div>
		</div>
	)
};

export default Blog;