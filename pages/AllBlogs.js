import Head from "next/head";
import { useContext, useEffect } from "react";
import {useRouter} from "next/router"
import styles from "../components/adminPanel/Categories_cmp.module.css";
import AllBlogsCmp from "../components/adminPanel/AllBlogsCmp";
import Header from "../components/adminPanel/Header";
import LeftNavbar from "../components/adminPanel/LeftNavbar";

const AllBlogs = () => {

	const router = useRouter()

	useEffect(() => {
		if(!JSON.parse(localStorage.getItem("user"))){
			router.push("/")
		}
		else if(JSON.parse(localStorage.getItem("user")).role !== "admin") {
			router.push("/")
		}
	
	}, [router])
	
  return (
    // <div className={styles.container}>
    	<>
			<Head>
				<title>Dst Blogs</title>
				<meta name="description" content="Dst Dashboard" />
				<link rel="icon" href="/pro.ico" />
			</Head>
				<LeftNavbar />
				<Header />
                <div className={styles.contentcontainerfirst}>
				<AllBlogsCmp />
                </div>
		</>
	// </div>
  )
}

export default AllBlogs