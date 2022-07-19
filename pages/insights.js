import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import styles from '../styles/Insights.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faX, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import img1 from '../public/Web Assets-18.png';
import img2 from '../public/Web Assets-25.png';
import img3 from '../public/web-assets-28.png';

import img4 from '../public/Web Assets-20.png'

import img5 from '../public/Web Assets-24.png'
import img6 from '../public/Web Assets-01.png'

//Section 7
import img7 from '../public/Course-04.png'
import img8 from '../public/Course-12.png'
import img9 from '../public/Web Assets-06.png'

export default function About() {
	return (
		<>
			<Header />
			<div>
				<Head>
					<title>DST - Insights</title>
					<meta name="description"
					content="DSTA | ESL approved courses and accreditations advantage" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div id="section1" className={styles.section1}>
					<div>
						<p>Insights <span className={styles.underline}>&amp; <span className={styles.blue}>Resources</span></span></p>
						<p>Find out how accreditations help <span className={styles.underline}>you!</span></p>
					</div>
					<div>
						<Image src={img1} alt="Vercel Logo" objectFit='contain' />
					</div>
					<a href="#section2">
						<FontAwesomeIcon icon={faChevronDown} size="3x" />
					</a>
				</div>
				<div id="section2" className={styles.section2}>
					<p>&quot;Disability Support Training Australia&apos;s Accreditation program is a tool to enhance the quality of the disability sector.&quot;</p>
				</div>
				<div id="section3" className={styles.section3}>
					<div>
						<Image src={img2} alt="Vercel Logo" objectFit='contain' />
					</div>
					<div>
						<p className={styles.quote1}>&quot;There is consistent evidence that shows that accreditation programs improve the process of care provided by healthcare services. There is considerable evidence to show that accreditation programs improve clinical outcomes of a wide spectrum of clinical conditions.&quot;</p>
						<p className={styles.byline1}>(Alkhenizan, A., & Shaw, C. (2011). Impact of Accreditation on the Quality of Healthcare Services)</p>
						<p className={styles.quote2}>&quot;Our Accreditation in Support Worker skills, aligned with NDIS Practice Standards gives participants and providers confidence.</p>
						<p className={styles.quote2}>We work with Providers to be &apos;leaders of change&apos; in the most vulnerable industry being people with disability.&quot;</p>
						<p className={styles.byline2}>-Michael, L. <br />
						Founder of DST, Australia.</p>
						<a className={styles.button} href="#section5">How does DST stack up against others?</a>
					</div>
					<div>
						<Image src={img3} alt="Vercel Logo" objectFit='contain' />
					</div>
				</div>

				<div id="section4" className={styles.section2}>
					<p>Specialised training courses &amp; much more!</p>
				</div>

				<div id="section5" className={styles.section5}>
					<div>
						<h2>Make the <br />
						<span className={styles.green}>switch</span></h2>

						<h4><em>The DSTA Advantage</em></h4>
						<ul>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Comprehensive NDIS specific course assurance</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Specialised for NDIS support workers</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Full course quality assurance</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Pathways leading to accreditation and certifications</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Flexible, Online &amp; App Platform Support</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Blended &amp; engaging learning experiences</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Intuitive &amp; Innovative LMS tools.</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Subscription-Based - Affordable Pricing</li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" />Prompt Course Delivery</li>
						</ul>
						<Link href="/demo">Book a Demo Today!</Link>
					</div>
					<div>
						<h4><em>Other Providers</em></h4>
						<ul>
							<li><FontAwesomeIcon icon={faX} size="2x" />General health-based courses</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />Un-specalised to NDIS support worker needs &amp; requirements</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />Limited Quality Course Assurance</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />Limited Online Software Functionality</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />Limited Learning experiences*</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />Limited Support Services</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />Expensive and outdated</li>
							<li><FontAwesomeIcon icon={faX} size="2x" />No option for subscription-based pricing</li>
						</ul>
					</div>
					<div className={styles.section5img}>
						<Image src={img4} alt="Vercel Logo" objectFit='contain' />
					</div>
				</div>

				<div className={styles.section8} id="section8">
					<div><Image src={img5} alt="Vercel Logo" objectFit='contain' /></div>
					<div>
						<h2><span className={styles.darkBlue}>DSTA&apos;s</span><br />
						Accreditation Program.</h2>
						<p>NDIS Training &amp; Success for your workforce.</p>
						<Link href="/demo">Talk to an expert today</Link>
					</div>
					<div><Image src={img6} alt="Vercel Logo" objectFit='contain' /></div>
				</div>

				<div id="section6" className={styles.section6}>
					<div>
						<h2>Make the <br />
						<span className={styles.green}>switch</span></h2>

						<h4><em>DST Training</em></h4>
						<ul>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Developed &amp; Tested by experts</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Comprehensive NDIS specific training courses</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Blended Learning Experiences</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Pathways to Accreditation</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Flexible, Online App Support</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Intuitive &amp; Innovative Platform.</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>Subscription-Based - Affordable Pricing</h3></li>
							<li><FontAwesomeIcon icon={faCheck} size="2x" /><h3>24/7 Access, anytime anywhere!</h3></li>
						</ul>
						<Link href="/demo">Book a Demo Today!</Link>
					</div>
					<div>
						<p>Improving <br />
						Wellbeing.</p>
						<p className={styles.blue}>Quality Training<br />
						Solutions.</p>
						<p>Commited to a<br />
						<span className={styles.underline}>brighter future.</span></p>
					</div>
					<div className={styles.section6img}>
						<Image src={img4} alt="Vercel Logo" objectFit='contain' />
					</div>
				</div>

				<div className={styles.section7} id="section7">
					<p>View our</p>
					<a href="https://dstaus.talentlms.com/catalog" target="_blank" rel="noreferrer"><h3>Popular Courses</h3></a>
					<div className={styles.section7images}>
						<a href="https://dstaus.talentlms.com/catalog/info/id:130" target="_blank" rel="noreferrer"><div><Image src={img7} alt="Vercel Logo" objectFit='contain' /></div></a>
						<a href="https://dstaus.talentlms.com/catalog/info/id:125" target="_blank" rel="noreferrer"><div><Image src={img8} alt="Vercel Logo" objectFit='contain' /></div></a>
						<a href="https://dstaus.talentlms.com/catalog/info/id:126" target="_blank" rel="noreferrer"><div><Image src={img9} alt="Vercel Logo" objectFit='contain' /></div></a>
					</div>
				</div>

				<div className={styles.section9} id="section9">
					<div><Image src={img2} alt="Vercel Logo" objectFit='contain' /></div>
					<p>&quot;We want to help organisations with core quality-training skills, that support NDIS client wellbeing.&quot;<br />
					- Michael,<br />
					DST Founder.</p>
				</div>
			</div>
			<Footer />
		</>
	)

}