import Image from "next/image"
import Link from "next/link";
import Head from "next/head";
import styles from '../styles/About.module.css'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { useEffect, useState } from "react";

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import DesktopTimeline from "../components/about/DesktopTimeline";
import MobileTimeline from "../components/about/MobileTimeline";

//Images
import img1 from '../public/Web Assets-27.png';
import img2 from '../public/web-assets-28.png';

import img6 from '../public/Web Assets-26.png'
import img7 from '../public/Web Assets-01.png'
import img8 from '../public/Course-04.png'
import img9 from '../public/Course-12.png'
import img10 from '../public/Web Assets-06.png'
import img11 from '../public/Web Assets-25.png';
import img12 from '../public/Our Journey-29.png';

export default function About() {

	const [width, setWidth] = useState(null)
	const breakpoint = 640;

	useEffect(() => {
		setWidth(window.innerWidth);
	}, [])

	return (
		<>
			<Header />
			<div>
				<Head>
					<title>DST - About</title>
					<meta name="description" content="About | DSTA" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className={styles.section1} id="section1">
					<div>
						<h1>About <span className={styles.blueUnderline}>Us</span></h1>
						<h2>Learning outcomes for <span className={styles.blueUnderline}>everyone.</span></h2>
						<p>&quot;Our mission is to provide NDIS funded organisations and support workers alike with accredited clinical care
							fundamental training programs that act as a solution to reducing the occurence of workplace-related carer incidents.&quot;
						</p>
					</div>
					<div>
						<Image src={img1} alt="Vercel Logo" objectFit='contain' />
					</div>
					<a href="#section2">
						<FontAwesomeIcon icon={faChevronDown} size="3x" />
					</a>
				</div>
				<div className={styles.section2} id="section2">
					<div className={styles.intro}>
						<div>
							<h1>Our <span className={styles.darkblue}>Journey</span></h1>
							<p>
								In 2020 founders Michael Langley &amp; Guy Mckinnon (medical training experts), 
								embarked on their journey to resolve NDIS provider related incidents by creating 
								comprehensive learning, training and development programs, for NDIS providers and support workers a-like.
							</p>
						</div>
						<div>
							<Image src={img12} alt="Vercel Logo" objectFit='contain' />
						</div>
					</div>
					<div className={styles.timeline}>
						{width > breakpoint ? <DesktopTimeline /> : <MobileTimeline />}
					</div>
					<p className={styles.futureLearning}>Future learning outcomes, made today!</p>
				</div>
				<div className={styles.section3} id="section3">
					<div>
						<h1>Our <span className={styles.darkblue}>Mission:</span></h1>
						<h2><span className={styles.darkblue}>A</span> bright <span className={styles.darkblue}>NDIS</span> <span className={styles.underline}>future.</span></h2>
						<h3>Commited to better NDIS future</h3>
						<p>
							Our vision at DSTA is to create a learning resource platform that supports equal opportunity in the effort of driving strong learning and development
							outcomes for careers in the NDIS. 
							<br />
							<br />
							We belive through a high value platform that supports the dynamic environment of support worker education and training - we can collectively respond and reduce
							the significance of clinical worker related incidents.
						</p>
					</div>
					<div>
						<Image src={img2} alt="Vercel Logo" objectFit='contain' />
					</div>
					<a href="#section4">
						<FontAwesomeIcon icon={faChevronDown} size="3x" />
					</a>
				</div>

				<div className={styles.section4} id="section4">
					<div><Image src={img6} alt="Vercel Logo" objectFit='contain' /></div>
					<div>
						<h2><span className={styles.darkBlue}>DSTA&apos;s</span><br />
						Accreditation Program.</h2>
						<p>Become a provider of real quality care &amp; choice today.</p>
						<Link href="/demo">Let&apos;s have a chat!</Link>
					</div>
					<div><Image src={img7} alt="Vercel Logo" objectFit='contain' /></div>
				</div>

				<div className={styles.section5} id="section5">
					<p>View our</p>
					<a href="https://dstaus.talentlms.com/catalog" target="_blank" rel="noreferrer"><h3 className={styles.lightblueUnderline}>Popular Courses</h3></a>
					<h4>All within our simple, comprehensive library of growing course content!</h4>
					<div className={styles.section5images}>
						<a href="https://dstaus.talentlms.com/catalog/info/id:130" target="_blank" rel="noreferrer"><div><Image src={img8} alt="Vercel Logo" objectFit='contain' /></div></a>
						<a href="https://dstaus.talentlms.com/catalog/info/id:125" target="_blank" rel="noreferrer"><div><Image src={img9} alt="Vercel Logo" objectFit='contain' /></div></a>
						<a href="https://dstaus.talentlms.com/catalog/info/id:126" target="_blank" rel="noreferrer"><div><Image src={img10} alt="Vercel Logo" objectFit='contain' /></div></a>
					</div>
				</div>

				<div className={styles.section6} id="section6">
					<div><Image src={img11} alt="Vercel Logo" objectFit='contain' /></div>
					<p>&quot;We want to help organisations with core quality-training skills, that support NDIS client wellbeing.&quot;<br />
					- Michael,<br />
					DST Founder.</p>
				</div>
			</div>
			<Footer />
		</>
	)
}