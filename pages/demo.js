import Image from "next/image"
import Head from "next/head";
import styles from '../styles/Demo.module.css'
import img1 from '../public/Web Assets-25.png';
import { useState } from "react";

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Demo() {

	const [formState, setFormState] = useState({
		fname: '',
		lname: '',
		email: '',
		org: '',
		size: '',
		state: 'nsw',
		phone: '',
		info: ''
	})

	const [responseMessage, setResponseMessage] = useState('');

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const { fname, lname, org, size, state, phone, email, info } = formState
		if (fname && email && phone && org && size) {
		  try {
			// await API.graphql({
			// 	query: createCandidate,
			// 	variables: {
			// 	  input: {
			// 		fname,
			// 		lname,
			// 		email,
			// 		phone,
			// 		org,
			// 		size,
			// 		state,
			// 		info
			// 	  },
			// 	},
			//   })
	
			  setResponseMessage('Submission sent successfully')
		  } catch (e) {
			  console.log(e);
			  setResponseMessage('There was an error processing your submission. Please email training@dsta.com.au');
		  }
		} else {
			// TODO: Fields not filled out
			console.log('Fields missing');
		}
	  }

	return (
		<>
			<Header />
			<div className={styles.demo}>
				<Head>
					<title>DST - Book a Demo</title>
					<meta name="description" content="DST Australia book a demo" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1>Book a Demo</h1>
				<h2>
					Interested?<br />
					Let&apos;s re-build NDIS Care Criteria <span className={styles.underline}>Together</span>!
				</h2>
				<p>Whether it&apos;s for personal development, compliance, onboarding or a bit of everything...</p>
				<p>DST is committed to equipping workers with skills and confidence through eLearning &amp; accreditations.</p>
				<p>Reach out now and experience our fully comprehensive platform demo!</p>

				<form className={styles.form} onSubmit={handleFormSubmit}>
					<label htmlFor="fname">First name*</label>
					<input type="text" id="fname" name="fname" value={formState.fname} required
					onChange={(e) =>
						setFormState({ ...formState, fname: e.target.value })
					}
					/>

					<label htmlFor="lname">Last name</label>
					<input type="text" id="lname" name="lname" value={formState.lname}
					onChange={(e) =>
						setFormState({ ...formState, lname: e.target.value })
					}
					/>

					<label htmlFor="org">Organisation*</label>
					<input type="text" id="org" name="org" value={formState.org} required
					onChange={(e) =>
						setFormState({ ...formState, org: e.target.value })
					}
					/>

					<label htmlFor="size">Organisation Size*</label>
					<input type="number" id="size" name="size" value={formState.size} required
					onChange={(e) =>
						setFormState({ ...formState, size: e.target.value })
					}
					/>

					<label htmlFor="state">State*</label>
					<select name="state" id="state"
					onChange={(e) =>
						setFormState({ ...formState, state: e.target.value })
					}
					>
						<option value="nsw">New South Wales</option>
						<option value="act">Australian Capital Territory</option>
						<option value="nt">Northern Territory</option>
						<option value="qld">Queensland</option>
						<option value="sa">South Australia</option>
						<option value="tas">Tasmania</option>
						<option value="vic">Victoria</option>
						<option value="wa">Western Australia</option>
					</select>

					<label htmlFor="phone">Phone*</label>
					<input type="text" id="phone" name="phone" value={formState.phone} required
					onChange={(e) =>
						setFormState({ ...formState, phone: e.target.value })
					}
					/>

					<label htmlFor="email">Email*</label>
					<input type="email" id="email" name="email" value={formState.email} required
					onChange={(e) =>
						setFormState({ ...formState, email: e.target.value })
					}
					/>

					<label htmlFor="info">Additional Information</label>
					<textarea id="info" name="info" value={formState.info} 
					placeholder="Questions, preferred contact times, organisation requirements..."
					onChange={(e) =>
						setFormState({ ...formState, info: e.target.value })
					}
					/>

					<button>Book a Demo</button>
				</form>

				<p id="formResponse">{responseMessage}</p>

				<p>We&apos;d love to hear your feedback &amp; our support team are happily ready to answer any questions or queries!</p>

				<div className={styles.section8} id="section8">
					<div><Image src={img1} alt="Vercel Logo" objectFit='contain' /></div>
					<p>&quot;We want to help organisations with core quality-training skills, that support NDIS client wellbeing.&quot;<br />
					- Michael,<br />
					DST Founder.</p>
				</div>
			</div>
			<Footer />
		</>

	)
}