import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ChooseDST from '../components/home/ChooseDST'
import ColumnCard from '../components/home/ColumnCard'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

// const imagesurl = {
//   img1 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591965/dst/images/Web_Assets-20_p75hhx.png",
//   img2 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591961/dst/images/Web_Assets-01_oye9rq.png",
//   img3 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591964/dst/images/Web_Assets-03_uxuwu0.png",
//   img4 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591963/dst/images/Web_Assets-14_y9ljpw.png",
//   img5 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591963/dst/images/Web_Assets-15_mcfkdu.png",
//   img6 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591965/dst/images/Web_Assets-16_ra9yfm.png",
//   img7: "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591957/dst/images/Course-04_mkkyyt.png",
//   img8: "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591957/dst/images/Course-12_kpdmtk.png",
//   img9: "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591961/dst/images/Web_Assets-06_ns1ayr.png",
//   img10 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591965/dst/images/Web_Assets-17_srkk7p.png",
//   img11 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591965/dst/images/Web_Assets-18_afynqw.png",
//   img12 : "https://res.cloudinary.com/ddgrhplyy/image/upload/v1656591965/dst/images/Web_Assets-19_kimckw.png",
// }

import img1 from '../public/Web Assets-21.png'
import img2 from '../public/Web Assets-01.png'
import img3 from '../public/Web Assets-03.png'

//Section 3
import img4 from '../public/Web Assets-14.png'
import img5 from '../public/Web Assets-15.png'
import img6 from '../public/Web Assets-16.png'

// //Section 4 
import img10 from '../public/Web Assets-17.png'


// //Section 6
import img11 from '../public/Web Assets-18.png'
import img12 from '../public/Web Assets-19.png'

//Section 7
import img7 from '../public/Course-04.png'
import img8 from '../public/Course-12.png'
import img9 from '../public/Web Assets-06.png'
import { useState } from 'react'

export default function Home() {


  return (
    <>
      <Header />
      <div>
        <Head>
          <title>DST Australia</title>
          <meta name="description" 
          content="Disability support training Australia  | NDIS specific eLearning courses.
          Disability support training Australia | Blended E learning | reshaping carer criteria
          DSTA | Accredited e learning - reshaping NDIS care-criteria" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ChooseDST />
        <div className={styles.section2} id='section2'>
          <ColumnCard 
            image={{img: img1, alt: 'logo'}} 
            title='Stand-out as Workers'
            description={"Become leaders of change in NDIS quality care practice by supporting new standards in care criteria."}
            cta={{text:"Learn more", href:"/insights"}}
            bgColor='#6ce5e8'
          />
          <ColumnCard 
            image={{img: img2, alt: 'logo'}}
            title='Supportive and Rewarding'
            description={"Enhance (L&D) learning and development outcomes for your employees with on-the-go learning."}
            cta={{text:"Our Program", href:"/courses"}}
            bgColor='#0b5c7f'
          />
          <ColumnCard
            image={{img: img3, alt: 'logo'}}
            title='Improve Quality of Life'
            description={"Real confidence to everyone involved with high-quality care practice and assurance methodology."}
            cta={{text:"Our Mission", href:"/about#section3"}}
            bgColor='#1faade'
          />
        </div>

        <div className={styles.section3} id='section3'>
          <div className={styles.section3row1}>
            <div>
              <span className={styles.secondary}>Designed</span>
              <span className={styles.secondary}>to support</span>
              <span className={styles.primary}>you.</span>
            </div>
            <div>
              <div>
                <Image src={img4} alt="Vercel Logo" objectFit='contain' />
              </div>
              <div>
                <p>Our App gives you and your employees the highest level of convenience, with support readily available</p>
                <Link href="/courses#section5">Learn More</Link>
              </div>
            </div>
          </div>
          <div className={styles.section3row2}>
            <div>
              <p>
              NDIS-ready confidence.<br />
              <span className={styles.underline}>Up-skill.</span><br />
              <span>Anytime.<br />
              Anywhere.</span>
              </p>
              <Image src={img5} alt="Vercel Logo" objectFit='contain' />
            </div>
            <div>
              <Image src={img6} alt="Vercel Logo" objectFit='contain' />
              <div>
                <p>Sign up within seconds and access the best NDIS courses 24/7!</p>
                <Link href="/demo">Book a demo</Link>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section5} id="section5">
          <div>
            <div>
              <p className={styles.mainHeading}>For<br /><span className={styles.supportText}>Support<br />Workers.</span></p>
              <p className={styles.darkText}>It&apos;s <br />Personalised.</p>
              <p>A unique blended learning experience</p>
              <Link href="/courses#section5">
                <a href="#section6" className={styles.buttonStyle}>Learn More Today</a>
              </Link>
            </div>
          </div>
          <div>
            <Image src={img10} alt="Vercel Logo" objectFit='contain' />
            <p>With a customisable learning experience and friendly unique user-engaement features - employees can choose what suits their learning and development needs.</p>
          </div>
        </div>

        <div className={styles.section6} id="section6">
          <div>
            <p className={styles.mainHeading}>It&apos;s <br /><span className={styles.underline}>effective.</span></p>
            <p>Our modules provide employees with <strong>high learning outcomes</strong> through our
              <strong> industry-standard</strong> learning and engagement <strong>programs</strong>.
            </p>
            <div>
              <Image src={img11} alt="Vercel Logo" />
            </div>
            <Link href="/courses#section3">
              <a href="#section7" className={styles.buttonStyle}>Learn More</a>
            </Link>
          </div>
          <div>
            <div>
              <Image src={img12} alt="Vercel Logo" />
            </div>
            <p className={styles.mainHeading}>&amp; more <br /> importantly <span className={styles.underline}>builds confidence.</span></p>
            <p>Boost your employees confidence with DTSA&apos;s  LMS engagement programs and begin supercharging support-worker learning & development needs today!</p>
            <a href="demo" className={styles.buttonStyle}>Upskill Today!</a>
          </div>
        </div>

        <div className={styles.section7} id="section7">
          <p>View our</p>
          <a href="https://dstaus.talentlms.com/catalog" target="_blank" rel="noreferrer"><h3>Popular Courses</h3></a>
          <p>All within our comprehensive &amp; growing library of NDIS training content</p>
          <div className={styles.section7images}>
            <a href="https://dstaus.talentlms.com/catalog/info/id:130" target="_blank" rel="noreferrer"><div><Image src={img7} alt="Vercel Logo" objectFit='contain' /></div></a>
            <a href="https://dstaus.talentlms.com/catalog/info/id:125" target="_blank" rel="noreferrer"><div><Image src={img8} alt="Vercel Logo" objectFit='contain' /></div></a>
            <a href="https://dstaus.talentlms.com/catalog/info/id:126" target="_blank" rel="noreferrer"><div><Image src={img9} alt="Vercel Logo" objectFit='contain' /></div></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
