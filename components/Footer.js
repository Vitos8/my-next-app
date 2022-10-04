import styles from "../styles/Footer.module.scss";


const Footer= () => {

	return(
		<footer className={styles.footer}>
			<div className='container'>
				<span className={styles.title}> Copyright ©2020 All rights reserved </span>
			</div>
		</footer>
	)
};

export default Footer;