import Image from "next/image"
import Head from "next/head";
import styles from '../styles/Demo2.module.css'
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import Swal from 'sweetalert2'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

export default function Signup() {

	const [formState, setFormState] = useState({
        firstName:'',
        userName:'',
        lastName:'',
		email: '',
		password:'',
	})

	const [responseMessage, setResponseMessage] = useState('');

	const handleFormSubmit = async (e) => {
		e.preventDefault()
		const { password, email , userName, firstName, lastName} = formState
		if (email && password && firstName && lastName && userName) {
		  try {
				console.log("formState signup => ", formState)
				// const res_data = await  axios.post('http://localhost:8080/api/v1/register',
				// const res_data = await  axios.post('https://dstbackend.herokuapp.com/api/v1/register',
				const res_data = await  axios.post('https://dst-backend.herokuapp.com/api/v1/register',
				{password, email , userName, firstName, lastName})
				console.log("res_data => ", res_data)
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						// text: 'Registered Successfully',
						text: res_data.data.message,
						icon: 'success',
						confirmButtonText: 'Close'
					  })
				}
				// setResponseMessage('Submission sent successfully')
		  } catch (e) {
			  console.log(e);
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to Register',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
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
			<div className={styles.demo2}>
				
				<Head>
					<title>DST - Signup</title>
					<meta name="description" content="DST Australia book a demo" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<h1>Signup</h1>
				<form className={styles.form} onSubmit={handleFormSubmit}>
					
					<label htmlFor="firstName">First name*</label>
					<input type="text" id="firstName" name="firstName" value={formState.firstName} required
					// placeholder="First Name"
					onChange={(e) =>
						setFormState({ ...formState, firstName: e.target.value })
					}
					/>

					<label htmlFor="lastName">Last name*</label>
					<input type="text" id="lastName" name="lastName" value={formState.lastName} required
					// placeholder="Last Name"
					onChange={(e) =>
						setFormState({ ...formState, lastName: e.target.value })
					}
					/>

					<label htmlFor="userName">User name*</label>
					<input type="text" id="userName" name="userName" value={formState.userName} required
					// placeholder="UserName"
					onChange={(e) =>
						setFormState({ ...formState, userName: e.target.value })
					}
					/>

					<label htmlFor="email">Email*</label>
					<input type="email" id="email" name="email" value={formState.email} required
					// placeholder="Email"
					onChange={(e) =>
						setFormState({ ...formState, email: e.target.value })
					}
					/>

					<label htmlFor="password">Password*</label>
					<input type="password" id="password" name="password" value={formState.password} required
					// placeholder="Password"
					onChange={(e) =>
						setFormState({ ...formState, password: e.target.value })
					}
					/>
					
					<p style={{textAlign:'start',fontSize:'14px',paddingTop:'5px'}}>Already have an account? <Link href="/login"><a style={{textDecoration:'underline',}}>Login</a></Link></p>
					<button>Signup</button>
				</form>

				<p id="formResponse">{responseMessage}</p>
			</div>
			<Footer />
		</>

	)
}