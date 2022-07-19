import Head from "next/head";
import { useContext, useEffect } from "react";
import {useRouter} from "next/router"
import styles from "../components/adminPanel/AdminPanel.module.css";
import Content from "../components/adminPanel/Content";
import Header from "../components/adminPanel/Header";
import LeftNavbar from "../components/adminPanel/LeftNavbar";
import { CommonFlagContext } from "../components/contexts/commonContext";

const Adminpanel = () => {

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
				<title>Dst Dashboard</title>
				<meta name="description" content="Dst Dashboard" />
				<link rel="icon" href="/pro.ico" />
			</Head>
			{/* <div className={styles.container}> */}
			<>
				<LeftNavbar />
				<Header />
				<Content />
			</>
			{/* </div> */}
		</>
	// </div>
  )
}

export default Adminpanel


// import { useState } from 'react';
// import styles from '../styles/Dashboard.module.css'
// import { Box } from "@material-ui/core";
// import Navbar from "../components/dashboard/Navbar";
// import Sidenav from "../components/dashboard/Sidenav";
// import { useStyles } from "../components/dashboard/HeaderStyles";

// const dashboard = () => {

//   const classes = useStyles();

//   const [mobileOpen, setMobileOpen] = useState(false);
//   const handleDrawerOpen = () => {
//     setMobileOpen(!mobileOpen);
//   };
//   const handleDrawerClose = () => {
//     setMobileOpen(false);
//   };

//   return (
//     <>
//       <Navbar handleDrawerOpen={handleDrawerOpen} />
//       <Sidenav
//         mobileOpen={mobileOpen}
//         handleDrawerOpen={handleDrawerOpen}
//         handleDrawerClose={handleDrawerClose}
//       />
//       <Box>
//         <h1>Dashboard</h1>
//       </Box>
//     </>
//   )
// }
// export default dashboard