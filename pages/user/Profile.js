import Image from "next/image"
import Link from "next/link";
import Head from "next/head";
import React, { useEffect, useState } from 'react'
import axios from "axios";
import styles from "../../styles/profile.module.css";
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
import { useRouter } from "next/router";

const Profile = () => {

  const [userDetail, setUserDetail] = useState("")

  const router = useRouter()

  const getUserDetail = async (id)=>{
    try {
      // const res_data = await  axios.get(`http://localhost:8080/api/v1/users/${id}`)
      const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/users/${id}`)
      console.log("res_data.data.user => ", res_data.data.user)
      if(res_data.data.user){
        setUserDetail(res_data.data.user)
      }
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("user"))){
      if(JSON.parse(localStorage.getItem("user")).id){
        getUserDetail(JSON.parse(localStorage.getItem("user")).id)
      }
    }else{
      router.push("/")
    }
  }, [router])
  
  return (
    <>
        <Header />
          <Head>
            <title>DST - Profile</title>
            <meta name="description" content="DST Australia Profile" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
            <div  className={cn(styles.container)}>
              <main className={cn(styles.main)}>
                <div className={cn(styles.content_wrapper)}>
                  <div className={cn(styles.col1)}>
                    <div className={cn(styles.image_wrapper)}>
                      <Image className={cn(styles.user_image)} src={userImg2} alt="userpic1"/>
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
                      {/* <div className={cn(styles.user_detail_title)}>
                        <FontAwesomeIcon icon={faUserAlt} />
                        <h2>User Profile</h2>
                      </div> */}
                      <div className={cn(styles.user_detail_list)}>
                        <div className={cn(styles.user_detail_title)}>
                          <FontAwesomeIcon icon={faUserAlt} />
                          <h2>User Profile</h2>
                        </div>
                        <div className={cn(styles.user_detail_list_item)}>
                          <div className={cn(styles.label)}><span>First name</span></div>
                          <div className={cn(styles.value)}><span>{userDetail.firstName? userDetail.firstName : "AbcFirstName"}</span></div>
                        </div>
                        <div className={cn(styles.user_detail_list_item)}>
                          <div className={cn(styles.label)}><span>Last name</span></div>
                          <div className={cn(styles.value)}><span>{userDetail.lastName? userDetail.lastName : "AbcLastName"}</span></div>
                        </div>
                        <div className={cn(styles.user_detail_list_item)}>
                          <div className={cn(styles.label)}><span>Username</span></div>
                          <div className={cn(styles.value)}><span>{userDetail.userName? userDetail.userName : "AbcUserName"}</span></div>
                        </div>
                        <div className={cn(styles.user_detail_list_item)}>
                          <div className={cn(styles.label)}><span>Email</span></div>
                          <div className={cn(styles.value)}><span>{userDetail.email? userDetail.email : "AbcEmail"}</span></div>
                        </div>
                      </div> 

                    </div>
                    <div className={cn(styles.edit_button_box)}>
                     <Link href="/user/update" passHref>
                        <button className={cn(styles.edit_button)} >
                          <FontAwesomeIcon  icon={faEdit}  style={{ width: "18px", cursor: "pointer" }} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </main>
           </div>
        <Footer />
    </>
  )
}

export default Profile



  