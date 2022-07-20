import Head from "next/head";
import Link from "next/link";
import React, { useState } from 'react'
import styles from "../../styles/updateprofile.module.css";
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import cn from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock
} from "@fortawesome/free-solid-svg-icons";

const Verify = () => {

  return (
    <>
        <Header />
          <Head>
              <title>DST - Account Verification </title>
              <meta name="description" content="DST Australia Update Profile" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <div  className={cn(styles.verifyMsgContainer)}>
            <div  className={cn(styles.verifyMsgBox)}>
               <h1>Account Verification</h1>
               <h2>Congratulations!</h2>
               <h3>Your Account is now verified</h3>
               <Link href="/login"><a>login</a></Link>
               
            </div>
          </div>
        <Footer />
    </>
  )
}

export default Verify



 
               