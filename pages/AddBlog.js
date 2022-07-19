import Head from "next/head";
import { useContext, useEffect } from "react";
import {useRouter} from "next/router"
import styles from "../components/adminPanel/AddBlogcmp.module.css";
import AddBlogCmp from "../components/adminPanel/AddBlogCmp";
import Header from "../components/adminPanel/Header";
import LeftNavbar from "../components/adminPanel/LeftNavbar";
import { CommonFlagContext } from "../components/contexts/commonContext";

const AddBlog = () => {

	const router = useRouter()
	// const flagCheck = useContext(CommonFlagContext)

	useEffect(() => {
		const check = localStorage.getItem("user")
	  if(!check){
		router.push("/")
	  }
	
	}, [router])
	
  return (
    	<>
			<Head>
				<title>Dst Add Blog</title>
				<meta name="description" content="Dst Dashboard" />
				<link rel="icon" href="/pro.ico" />
			</Head>
				<LeftNavbar />
				<Header />
                <div className={styles.contentcontainerfirst}>
				<AddBlogCmp />
                </div>
		</>
  )
}

export default AddBlog

