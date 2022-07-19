import Link from "next/link";
import { useEffect, useState } from "react";
import  { useRouter } from "next/router";
import axios from "axios";
import Swal from 'sweetalert2'
//Styles
import styles from "../../styles/Nav.module.css"
import Hamburger from "./Hamburger";

function Nav() {
	const router = useRouter();
	const [hamburgerOpen, setHamburgerOpen] = useState(false);
	const [hamburgerDisplay, setHamburgerDisplay] = useState(false);
	const [check, setCheck] = useState(false);

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
					setTimeout(()=>{
						router.pathname == "/" ? router.reload(): router.push("/")
					},300) 
				}
				else{
					Swal.fire({
						title: 'Error!',
						text: 'Failed to logged out',
						icon: 'error',
						confirmButtonText: 'Close'
					  })
				}
	}

	const toggleHamburger = () => {
		setHamburgerOpen(!hamburgerOpen);

		if (!hamburgerOpen) {
			setHamburgerDisplay(true);
		}
	}

	const menuTransition = () => {
		if (!hamburgerOpen) {
			setHamburgerDisplay(false);
		}
	}

	useEffect(() => {
		router.events.on("routeChangeComplete", () => {
			console.log("route change routeChangeComplete");
			setHamburgerOpen(false)
		  });
		if(localStorage.getItem("user")){
			setCheck(true)
		}
	}, [router.events])

  return (
	  <>
	  <div className="navigation" onTransitionEnd={menuTransition}>
			<nav className={styles.nav}>
			{check ? <>
				<Link href="/">home</Link>
				{/* <Link href="/about">about</Link>
				<Link href="/courses">courses</Link>
				<Link href="/insights">insights</Link> */}
				<Link href="/blogs">blog</Link>
				<Link href="/user/Profile">Profile</Link>
				<Link href="/user/Update">Update</Link>
				<Link href="/user/ChangePassword">Change Password</Link>
				<span href="#" onClick={logoutHandler}>Logout</span>
			</> 
			: 
			<>
				<Link href="/">home</Link>
				<Link href="/about">about</Link>
				<Link href="/courses">courses</Link>
				<Link href="/insights">insights</Link>
				<Link href="/blogs">blog</Link>
				<Link href="/login">signin</Link>
				<Link href="/signup">signup</Link>
			</>
			}
			</nav>
		</div>
		<div className="hamburger" onClick={toggleHamburger}>
			<Hamburger isOpen={hamburgerOpen}/>	
		</div>
		<style jsx>{`
                .hamburger{
                    display: none;
                    z-index: 6;
                } 
                @media (max-width: 768px){
                  
                    .hamburger{
                        display:contents;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }
                
                   
                    .navigation {
                        opacity: ${hamburgerOpen ? '100' : '0'};
						display: ${hamburgerDisplay ? 'grid' : 'none'};
						justify-items: center;
						align-items: center;
                        background-color: white;
                        height: 100vh;
                        width: 100vw;
						top: 0;
						bottom: 0;
						left: 0;
						right: 0;
                        position: fixed;
						z-index: 1;
						transition: 0.3s;
                    }
                }
                 
            `}</style>
	  </>
	
	)
	
}

export default Nav;







