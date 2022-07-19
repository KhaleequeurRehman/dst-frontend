import Head from "next/head";
import { useContext, useEffect } from "react";
import {useRouter} from "next/router"
import styles from "../components/adminPanel/Categories_cmp.module.css";
import CategoriesCmp from "../components/adminPanel/CategoriesCmp";
import Header from "../components/adminPanel/Header";
import LeftNavbar from "../components/adminPanel/LeftNavbar";
import { CommonFlagContext } from "../components/contexts/commonContext";

const Categories = () => {

	const router = useRouter()
	// const flagCheck = useContext(CommonFlagContext)

	useEffect(() => {
		if(!JSON.parse(localStorage.getItem("user"))){
			router.push("/")
		}
		else if(JSON.parse(localStorage.getItem("user")).role !== "admin") {
			router.push("/")
		}
		
	// const check = localStorage.getItem("user")
	//   if(!check){
	// 	router.push("/")
	//   }
	
	}, [router])
	
  return (
    // <div className={styles.container}>
    	<>
			<Head>
				<title>Dst Categories</title>
				<meta name="description" content="Dst Dashboard" />
				<link rel="icon" href="/pro.ico" />
			</Head>
				<LeftNavbar />
				<Header />
                <div className={styles.contentcontainerfirst}>
				<CategoriesCmp />
                </div>
		</>
	// </div>
  )
}

export default Categories