import Head from "next/head";
import styles from "../../styles/pages-styles/Blogs.module.scss";

const Blogs = ({blogs}) => {

	
	return(
		<div className="blue">
			<div className="container">
				<Head>
					<title>Blogs</title>
					<link rel="icon" href="/Avatar.png" />
				</Head>
				<div className={styles.blogs}>
					<h2 className={styles.blogsTitle}>Blogs</h2>
					{blogs.map(blog => (
						<div key={blog.id} className={styles.item}>
							<h4 className={styles.itemTitle}>{blog.title}</h4>
							<div className={styles.itemRow}>
								<i className={styles.itemDate}>12 Feb 2019</i>
								<i className={styles.itemType}>Express, Handlebars</i>
							</div>
							<p className={styles.itemSubtitle}>{blog.body}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};

export default Blogs;

export async function getStaticProps() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(url);
  const data = await res.json();
	data.length = 10; 

  return {
    props: {
      blogs: data,
    },
  };
}