import Image from "next/image"
import Head from "next/head";
import React, { useEffect, useState } from 'react'
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
  faEdit
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import {useRouter} from "next/router"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Update = () => {

  const [userDetail, setUserDetail] = useState("")
  const [userData, setUserData] = useState("")

  const router = useRouter()

  const getUserDetail = async (id)=>{
    try {
      // const res_data = await  axios.get(`http://localhost:8080/api/v1/users/${id}`)
      const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/users/${id}`)
      console.log("res_data.data.user => ", res_data.data.user)
      if(res_data.data.user){
        setUserDetail(res_data.data.user)
        const {firstName, lastName, userName, email} = res_data.data.user
        setUserData({firstName, lastName, userName, email} )
      }
    } catch (err) {
        console.log(err)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("submitHandler is working userData=> ", userData)

    try {
			// const res_data = await  axios.put(`http://localhost:8080/api/v1/users/${userDetail._id}`,
			const res_data = await  axios.put(`https://dst-backend.herokuapp.com/api/v1/users/${userDetail._id}`,
      userData)
				console.log("res_update_data => ", res_data)
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

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))){
      if(JSON.parse(localStorage.getItem("user")).id){
        getUserDetail(JSON.parse(localStorage.getItem("user")).id)
      }
    }else{
      router.push("/")
    }
    // const check = localStorage.getItem("user")
    // console.log("check user from localstorage => ",JSON.parse(check).id)
    // if(JSON.parse(check).id){
    //   getUserDetail(JSON.parse(check).id)
    // }
  }, [router])

  return (
    <>
        <Header />
          <Head>
              <title>DST - Update</title>
              <meta name="description" content="DST Australia Update Profile" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
            <div  className={cn(styles.container)}>
              <main className={cn(styles.main)}>
                <div className={cn(styles.content_wrapper)}>
                  <div className={cn(styles.col1)}>
                    <div className={cn(styles.image_wrapper)}>
                      <Image className={cn(styles.user_image)} src={userImg2} alt="userpic3"/>
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
                  </div>
                  <div className={cn(styles.col2)}>
                    <div className={cn(styles.user_detail)}>
                      <div className={cn(styles.user_detail_title)}>
                        <FontAwesomeIcon icon={faUserAlt} />
                        <h2>Update Profile</h2>
                      </div>
                      <div className={cn(styles.update_user_form)}>
                        <form>
                          <div className={cn(styles.update_user_form_input_box)}>
                            <div className={cn(styles.update_user_form_input_label)}>
                              <label>Firstname </label>
                            </div>
                            <div className={cn(styles.update_user_form_input)}>
                              <input type="text" placeholder="Firstname" name="firstName" required value={userData.firstName} onChange={onChangeHandler}/>
                            </div>
                          </div>
                          <div className={cn(styles.update_user_form_input_box)}>
                            <div className={cn(styles.update_user_form_input_label)}>
                              <label>Lastname </label>
                            </div>
                            <div className={cn(styles.update_user_form_input)}>
                              <input type="text" placeholder="Lastname" name="lastName" value={userData.lastName} onChange={onChangeHandler}/>
                            </div>
                          </div>
                          <div className={cn(styles.update_user_form_input_box)}>
                            <div className={cn(styles.update_user_form_input_label)}>
                              <label>Username </label>
                            </div>
                            <div className={cn(styles.update_user_form_input)}>
                              <input type="text" placeholder="Username" name="userName" required value={userData.userName} onChange={onChangeHandler}/>
                            </div>
                          </div>
                          <div className={cn(styles.update_user_form_input_box)}>
                            <div className={cn(styles.update_user_form_input_label)}>
                              <label>Email Address</label>
                            </div>
                            <div className={cn(styles.update_user_form_input)}>
                            <input type="email" placeholder="Email address" name="email" required value={userData.email} onChange={onChangeHandler}/>
                            </div>
                          </div>
                          <div className={cn(styles.update_user_form_input_box)}>
                            <div className={cn(styles.edit_button)}>
                              <button onClick={submitHandler}>
                                <FontAwesomeIcon  icon={faEdit}  style={{ width: "18px", cursor: "pointer" }} /> Update
                              </button>
                            </div>
                          </div>
                        </form>
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

export default Update


               