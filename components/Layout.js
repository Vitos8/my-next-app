import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.scss";

const Layout = ({children}) => {

	return (
		<div className={styles.wrapper}>
			<Header/>
			<div className={styles.children}>
				{children}
			</div>
			<Footer/>
		</div>
	)
};

export default Layout;