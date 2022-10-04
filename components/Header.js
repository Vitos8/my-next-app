import styles from "../styles/Header.module.scss";
import Navbar from "./Navbar";

const Header = () => {

	
	return(
		<header className={styles.header}>
			<div className='container'>
				<Navbar/>
			</div>
		</header>
	)
};

export default Header;