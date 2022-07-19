import Image from "next/image"
import Link from "next/link";
import Head from "next/head";
import React, { useState } from 'react'
import axios from "axios";
import styles from "../../styles/updateprofile.module.css";
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import userImg2 from '../../public/user2.png'
import cn from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook, faTwitter,faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import {
  faUserAlt,
  faEdit,
  faLock
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import {useRouter} from "next/router"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Verify = () => {

  const [userData, setUserData] = useState({oldPassword: "", newPassword: "", confirmPassword: ""})
  const [userDetail, setUserDetail] = useState("")

  const router = useRouter()

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitHandler is working userData=> ", userData)

    try {
			const res_data = await  axios.put(`http://localhost:8080/api/v1/password/update/${userDetail._id}`,
      userData)
				console.log("res_change_password_data => ", res_data)
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						text: 'Updated Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => router.push("/user/profile"),400)
				}
				
		  } catch (e) {
			  console.log(e);
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to update',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
		  }
  }
  const onChangeHandler = (e) => {
    setUserData({...userData,[e.target.name]: e.target.value});
    console.log("onChangeHandler is working")
  }

  const getUserDetail = async (id)=>{
    try {
      const res_data = await  axios.get(`http://localhost:8080/api/v1/users/${id}`)
      console.log("res_data.data.user => ", res_data.data.user)
      if(res_data.data.user){
        setUserDetail(res_data.data.user)
      }
    } catch (err) {
        console.log(err)
    }
  }

  // useEffect(() => {
    // const check = localStorage.getItem("user")
    // console.log("check user from localstorage => ",JSON.parse(check).id)
    // if(JSON.parse(check).id){
    //   getUserDetail(JSON.parse(check).id)
    // }
  // }, [])

  return (
    <>
        <Header />
          <Head>
              <title>DST - verify </title>
              <meta name="description" content="DST Australia Update Profile" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
            <div  className={cn(styles.container)}>
              <main className={cn(styles.main)}>
                <div className={cn(styles.content_wrapper)}>
                  {/* <div className={cn(styles.col1)}>
                    <div className={cn(styles.image_wrapper)}>
                      <Image className={cn(styles.user_image)} src={userImg2}/>
                    </div>
                    <div className={cn(styles.short_info)}><span>{userDetail.firstName? userDetail.firstName : "Khaleeque"}</span></div>
                    <div className={cn(styles.socialicon_wrapper)}>
                      <a href="#">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ width: "18px", cursor: "pointer" }}
                      />
                      </a>
                      <a href="#">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ width: "18px", cursor: "pointer" }}
                      />
                      </a>
                      <a href="#">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ width: "18px", cursor: "pointer" }}
                      />
                      </a>
                    </div>
                  </div> */}
                  <div className={cn(styles.col2)} style={{widows:"100%"}}>
                    <div className={cn(styles.user_detail)}>
                      <div className={cn(styles.user_detail_title)}>
                        <FontAwesomeIcon icon={faLock} />
                        {/* <FontAwesomeIcon icon={faUserAlt} /> */}
                        <h2 style={{widows:"100%",textAlign:"center",marginTop:"30px"}}>user has been verified</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
           </div>
        <Footer />
    </>
  )
}

export default Verify



 
               