import React, { useContext } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
import {useRouter} from "next/router"
import Link from "next/link"
import styles from "./AdminPanel.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBookOpen,
	faCog,
	faHeart,
	faRocket,
	faSignOutAlt,
	faTachometerAlt,
	faUser,
	faListAlt,
	faAdd
} from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import logo from "../../public/logo.png"
import { CommonFlagContext } from "../contexts/commonContext";

function LeftNavbar() {

	const flagCheck = useContext(CommonFlagContext)
	const router = useRouter()

	const logoutHandler = async () => {
		// const res_data = await  axios.get('http://localhost:8080/api/v1/logout')
		// const res_data = await  axios.get('https://dstbackend.herokuapp.com/api/v1/logout')
		const res_data = await  axios.get('https://dst-backend.herokuapp.com/api/v1/logout')
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						text: 'logged out Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })
					localStorage.clear()
					flagCheck.setFlagFunc(false)
					setTimeout(()=>{
						router.push("/")
					},500)
				}else{
					Swal.fire({
						title: 'Error!',
						text: 'Failed to logged out',
						icon: 'error',
						confirmButtonText: 'Close'
					  })
				}
	}

	return (
		<div className={styles.navcontainer}>
			<div className={styles.logo}>
				{/* <h2>Streamline</h2> */}
				<Image src={logo} width={90} height={60} alt="logopic"/>
			</div>
			<div className={styles.wrapper}>
				<ul>
					<li>
						<FontAwesomeIcon
							icon={faTachometerAlt}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/adminpanel"><a href="#">Dashboard</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faListAlt}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/Categories"><a href="#">Categories</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faAdd}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/AddBlog"><a href="#">Add Blog</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faListAlt}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/AllBlogs"><a href="#">All Blogs</a></Link>
					</li>
					{/* <li>
						<FontAwesomeIcon
							icon={faBookOpen}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/adminpanel"><a href="#">Library</a></Link>
					</li> */}
					{/* <li>
						<FontAwesomeIcon
							icon={faHeart}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/adminpanel"><a href="#">Favourite</a></Link>
					</li> */}
					<li>
						<FontAwesomeIcon
							icon={faCog}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<Link href="/adminpanel"><a href="#"> Settings</a></Link>
					</li>
					<li>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							style={{ width: "18px", cursor: "pointer",marginRight:"5px" }}
						/>
						<a href="#" onClick={logoutHandler}>Logout</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default LeftNavbar;
