import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Courses.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import img1 from '../public/Web Assets-24.png'
import img2 from '../public/Web Assets-01.png'
import img3 from '../public/Web Assets-19.png'
import img4 from '../public/Web Assets-21.png'
import img5 from '../public/Web Assets-23.png'
import img6 from '../public/Web Assets-01.png'
import img7 from '../public/Course-04.png'
import img8 from '../public/Course-12.png'
import img9 from '../public/Web Assets-06.png'
import img10 from '../public/Web Assets-25.png'
import img11 from '../public/Our Journey - Justin-31.png'
import img12 from '../public/Web Assets-23.png'

export default function Courses() {
	return (
		<>
			<Header />
			<div>
				<Head>
					<title>DST - Courses</title>
					<meta name="description" 
					content="DSTA | Blended learning LMS Courses
					DSTA | NDIS specific e-learning transformed 
					DSTA | Accredited NDIS specific online learning" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<div className={styles.coursesLibrary} id="coursesLibrary">
					<div>
						<h1>Our Courses Library</h1>
						<p>NDIS specific courses for all learning styles</p>
						<a href="https://dstaus.talentlms.com/catalog" target="_blank" rel="noreferrer">View Our Courses</a>
					</div>
					<div>
						<div><Image src={img12} alt="Vercel Logo" objectFit='contain' /></div>
					</div>
					<a href="#section1">
						<FontAwesomeIcon icon={faChevronDown} size="3x" />
					</a>
				</div>
				<div className={styles.section1} id="section1">
					<div><Image src={img1} alt="Vercel Logo" objectFit='contain' /></div>
					<div>
						<h2><span className={styles.darkBlue}>DSTA&apos;s</span><br />
						Accreditation<br />
						Program</h2>
						<p>Comprehensive NDIS health care training success</p>
						<Link href="/demo">Book a demo</Link>
						<Link href="#section2" passHref={true}>
							<FontAwesomeIcon icon={faChevronDown} size="2x" />
						</Link>
					</div>
					<div><Image src={img2} alt="Vercel Logo" objectFit='contain' /></div>
				</div>

				<div className={styles.section2} id="section2">
					<div>
						<em><h2>A New<br />
						<span className={styles.lightgreen}>Industry</span><br />
						<span className={styles.darkgreen}>Benchmark</span></h2></em>
						<h3>Become leaders of <span className={styles.underline}>quality care</span> practice</h3>
						<p>The future of your organisations&apos; learning &amp;
						development, compliance solutions, all in one place
						with ESL approved courses.</p>
						<Link href="/demo">Sign up now!</Link>
					</div>
					<div><Image src={img3} alt="Vercel Logo" objectFit='contain' /></div>
					<div>
						<p>&quot;We noticed a significant increase in audit standards within the NDIS industry
							for quality care and are here to provide training solutions through our innovative 
							accreditation programs&quot;
							<br />
							-Michael, L. DST Founder.
						</p>
					</div>
				</div>

				<div className={styles.section3} id="section3">
					<div>
						<div>
							<h2><span className={styles.white}>Mitigating</span><br />
							<span className={styles.darkBlue}>Risks.</span></h2>
							<div className={styles.flex}>
								<p>We found only,</p>
								<h2><span className={styles.statBlue}>1</span> in <span className={styles.statWhite}>5</span></h2>
							</div>
						</div>
						<div className={styles.img}><Image src={img4} alt="Vercel Logo" objectFit='contain' /></div>
						<p>of new recruits obtain a disability-related qualification </p>
					</div>
					<div>
						<div className={styles.img}><Image src={img11} alt="Vercel Logo" objectFit='contain' /></div>
						<p>Accreditations equip support workers with the skills &amp; confidence to meet their NDIS clients quality of life requirements.</p>
						<p>Eliminate the risk audits &amp; invest in your organisations&apos; learning and development future, today!</p>
						<Link href="/demo">Book a demo</Link>
						<Link href="/insights#section6">
							<a>Learn more</a>
						</Link>
					</div>
				</div>

				<div className={styles.section4} id="section4">
					<div>
						<em><h2>Be <span className={styles.lightgreen}>rewarded</span><br />
						for your<br />
						<span className={styles.darkgreen}>development</span></h2></em>
						<h3>Learning outcomes for all.</h3>
						<p>Flexible subscriptions that suit your organisation&apos;s learning and development needs and requirements.</p>
						<p>Choose from our basic course fundamentals or join our onboard specialist success program, the option is entirely <span className={styles.underline}>yours.</span></p>
						<Link href="/demo">Enrol Now!</Link>
					</div>
					<div><Image src={img3} alt="Vercel Logo" objectFit='contain' /></div>
					<div>
						<p className={styles.lightgreen}>&quot;Upskilling your workforce with accreditations gives your clients real confidence to delivery
							both high-quality care and set a new standard for care criteria within the NDIS.&quot;
						</p>
						<p>Unsure what courses suit your business needs?</p>
						<p>Lets chat!</p>
					</div>
				</div>

				<div className={styles.section5} id="section5">
					<div>
						<h2><span className={styles.white}>User Friendly,</span><br />
						Learning</h2>
						<h3>For Managers and Employees</h3>
						<p className={styles.white}>
							Intuitive O-LMS (Online-Learning Management Software) designed for our comprehensive Learning and 
							Development Training Programs. 
						</p>
						<ul>
							<li><FontAwesomeIcon icon={faCircleRight} size="2x" /><span>Track, measure, report and respond to progress through our Smart-Dashboard.</span></li>
							<li><FontAwesomeIcon icon={faCircleRight} size="2x" /><span>Assessment Management</span></li>
							<li><FontAwesomeIcon icon={faCircleRight} size="2x" /><span>Reporting Tools</span></li>
							<li><FontAwesomeIcon icon={faCircleRight} size="2x" /><span>Mobile Friendly App Support</span></li>
							<li><FontAwesomeIcon icon={faCircleRight} size="2x" /><span>Video and Conferences</span></li>
						</ul>
					</div>
					<div>
						<div><Image src={img5} alt="Vercel Logo" objectFit='contain' /></div>
						<Link href="/demo">Experience a demo today!</Link>
					</div>
					<a href="#section7">
						<FontAwesomeIcon icon={faChevronDown} size="3x" />
					</a>
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

				<div className={styles.section6} id="section6">
					<div><Image src={img1} alt="Vercel Logo" objectFit='contain' /></div>
					<div>
						<h2><span className={styles.accredBlue}>DSTA&apos;s</span><br />
						Accreditation Program.</h2>
						<p>
							Risk Management<br />
							Learning &amp; Development<br />
							<span className={styles.underline}>Success for your workforce.</span><br />
						</p>
					</div>
					<div><Image src={img6} alt="Vercel Logo" objectFit='contain' /></div>
				</div>


				<div className={styles.section8} id="section8">
					<div><Image src={img10} alt="Vercel Logo" objectFit='contain' /></div>
					<p>&quot;We want to help organisations with core quality-training skills, that support NDIS client wellbeing.&quot;<br />
					- Michael,<br />
					DST Founder.</p>
				</div>
			</div>
			<Footer />
		</>
	)
}