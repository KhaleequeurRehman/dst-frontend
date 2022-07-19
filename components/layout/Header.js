import Nav from "./Nav"
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/logo.png"

//Styles
import styles from '../../styles/Header.module.css'

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.navLeft}>
				<Link href="/" passHref={true}><a><Image src={logo} alt="DST Logo"/></a></Link>
				<Nav />
			</div>
			<div className={styles.navRight}>
				<a className={styles.login} href="http://dstaus.talentlms.com" target="_blank" rel="noreferrer">Login</a>
				<div className={styles.contact}>
					<Link href="/demo"><a className={styles.demo}>Book a demo</a></Link>
				</div>
			</div>
		</header>
	)
}