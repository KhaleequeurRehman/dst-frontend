import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Footer.module.css"

import linkedin from "../../public/Web Assets-13.png"
import logo from "../../public/logo-footer.png"

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>DST - Disability Support Training Australia, 2022</p>
			<p>DST acknowledges the Traditional Custodians of country throughout Australia
				and their connections to land, sea and community. We pay our respect to 
				their Elders past and present and extend that respect to all Aboriginal 
				and Torres Strait Islander peoples today.
			</p>
			<div>
				<div>
					<p><Link href="/terms-conditions">Privacy</Link> | <Link href="/courses">Courses &amp; Programs</Link></p>
					<p>&copy; Copyright 2022. All rights reserved</p>
				</div>
				<div className={styles.logos}>
          			<div><Image src={logo} alt="LinkedIn Logo" objectFit="contain"/></div>
          			<a href="https://www.linkedin.com/company/optimal-health-training" target="_blank" rel="noreferrer"><div><Image src={linkedin} alt="LinkedIn Logo" objectFit="contain" /></div></a>
				</div>
			</div>
		</footer>
	)
}