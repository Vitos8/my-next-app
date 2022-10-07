import styles from "../styles/Header.module.scss";
import Link from "next/link";
import React from 'react';


const links = [
	{
		href: '/',
		text: 'Home',
		key: 3
	},
	{
		href: '/works',
		text: 'Works',
		key: 1
	},
	{
		href: '/blogs',
		text: 'Blogs',
		key: 2
	},
];

const Navbar = () => {
	const [activeLink, setActiveLink] = React.useState(4);


	return(
		<nav className={styles.nav}>
			<span className={styles.logo}>John Carter</span>
			<div className={styles.links}>
				{links.map(link => (
					<Link key={link.key} href={link.href}><a onClick={() => setActiveLink(link.key)} className={`${styles.link} ${activeLink === link.key ?  styles.activeLink  : ''} `}>{link.text}</a></Link>
				))}
			</div>
		</nav>
	)
};

export default Navbar;