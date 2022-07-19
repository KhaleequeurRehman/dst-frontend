import Image from "next/image"
import Link from "next/link"
import mainImg from "../../public/Web Assets-20.png"

import Container from "../layout/Container"
import BookButton from "../BookButton"
import styles from "../../styles/Home.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function ChooseDST() {
	return (
		<Container className={styles.section1} id="section1">
			<div className={styles.twoColumn}>
				<div>
					<h1>Why Choose <strong>Disability Support Training Australia?</strong></h1>
					<ul>
						<li><FontAwesomeIcon icon={faCircleRight} size="1x" />NDIS Specific E-Courses available for all learning styles including Accreditations</li>
						<li><FontAwesomeIcon icon={faCircleRight} size="1x" />Developed by industry trained NDIS, health-aligned Professionals</li>
						<li><FontAwesomeIcon icon={faCircleRight} size="1x" />Learn. Train. Manage. Anytime, Anywhere with e-learning.</li>
					</ul>
					<h3>Start improving the wellbeing of others today!</h3>
				</div>
				<div><Image src={mainImg} alt="Vercel Logo" objectFit="contain"/></div>
			</div>
			<div className={styles.moreInfo}>
				<a href="https://dstaus.talentlms.com/catalog" target="_blank" rel="noreferrer">Course Catalogue</a>
				<BookButton />
			</div>
			<a href="#section2">
				<FontAwesomeIcon icon={faChevronDown} size="3x" />
			</a>
		</Container>
	)
}