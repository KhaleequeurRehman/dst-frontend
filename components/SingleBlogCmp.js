import React, { useState } from 'react'
import Image from 'next/image';
import blogpictwo from "../public/blogpictwo.jpg"
import styles from "../styles/blogCmp.module.css"
import cn from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook, faTwitter,faInstagram 
} from "@fortawesome/free-brands-svg-icons";
import {
  faUserAlt,faClock,faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import Link from "next/link"
const { convert } = require('html-to-text');
import moment from 'moment';
import axios from "axios";
import Swal from 'sweetalert2'

  const Blogs = ({blogData,updateBlogData}) => {

      const [commentTextVal, setCommentTextVal] = useState("");

    const postCommentHandler = async (e) =>{
      e.preventDefault();
      const postCommentData = {
        commentText:commentTextVal,
        userID: blogData.user._id,
        userName: blogData.user.firstName,
      }
      console.log("postCommentData=> ",postCommentData)
      if(JSON.parse(localStorage.getItem("user"))){
        try {
          // const res_data = await  axios.post(`http://localhost:8080/api/v1/blogs/${blogData._id}/comment`,postCommentData)
          const res_data = await  axios.post(`https://dst-backend.herokuapp.com/api/v1/blogs/${blogData._id}/comment`,postCommentData)
          console.log("post_res_data.data => ", res_data?.data)
          updateBlogData(res_data?.data?.result)
          setCommentTextVal("");
        } catch (err) {
          console.log(err)
        }
      } else {
        Swal.fire({
          title: 'Error!',
          // text: 'Failed to Login',
          text: "Not Allowed, first login then you can comment",
          icon: 'error',
          confirmButtonText: 'Close'
          })
        // setCommentTextVal("");
      }
      

    }

    return (
          <>
          <div className={cn(styles.singleBlogCardWrapper)}>
            <div className={cn(styles.singleBlogHeading)}>
                  <h1><span>Blog</span></h1> 
            </div>
             {
                blogData? 
                <>
                    <div className={cn(styles.singleBlogCard)}>
                        <div className={cn(styles.singleBlogtitleWrapper)}>
                            <h2><a>{blogData?.title}</a></h2>
                        </div>
                        <div className={cn(styles.singleBlogImageWrapper)}>
                            <Image src={blogData?.image?.url} width={970} height={350} alt="singleblogpic"/>
                        </div>
                        <div className={cn(styles.singleBlogDetailsWrapper)}>
                            <p>
                                <FontAwesomeIcon icon={faUserAlt} /><span>&nbsp;{blogData?.user?.firstName}</span>
                                <FontAwesomeIcon icon={faClock} /><span>&nbsp;{moment(blogData?.user?.createdAt).format("MMM Do YY")}</span>
                            </p>
                        </div>
                        <div className={cn(styles.singleBlogDescriptionWrapper)} dangerouslySetInnerHTML={{__html:blogData?.description}}>
                        </div>
                        <div className={cn(styles.singleBlogCommentList)}>
                              <div className={cn(styles.singleBlogCommentListHeading)}>
                               <p>Comments {blogData?.comments?.length}</p>
                              </div>
                                {
                                  blogData?.comments ?
                                    blogData?.comments?.map((v,i)=>(
                                    <>
                                    <div key={i} className={cn(styles.singleBlogCommentListItem)}>
                                      <div className={cn(styles.singleBlogCommentListItemAvatar)}>
                                      <Avatar><FontAwesomeIcon icon={faUserAlt} /></Avatar>
                                      </div>
                                      <div className={cn(styles.singleBlogCommentListItemDetail)}>
                                        <p>{v?.userName && v.userName}</p>
                                        <p>{v?.textData && v.textData}</p>
                                      </div>
                                    </div>
                                    </>
                                  ))
                                  : 
                                  <>
                                  <div className={cn(styles.singleBlogCommentListItem)}>
                                    <div className={cn(styles.singleBlogCommentListItemAvatar)}>
                                      <Avatar><FontAwesomeIcon icon={faUserAlt} /></Avatar>
                                    </div>
                                    <div className={cn(styles.singleBlogCommentListItemDetail)}>
                                      <p>No name</p>
                                      <p>No text</p>
                                    </div>
                                  </div>
                                  </>
                                }
                            </div>
                        <div className={cn(styles.singleBlogCommentWrapper)}>
                            <div className={cn(styles.singleBlogCommentHeading)}>
                                <h2>Leave a Comment</h2>
                            </div>
                            <form onSubmit={postCommentHandler}>
                                <p>Comment <span>*</span></p>
                                <textarea value={commentTextVal} onChange={e => setCommentTextVal(e.target.value)} placeholder='write your comment here...' id="" required> </textarea>
                                <button type='submit'>Post Comment</button>
                            </form>
                        </div>
                    </div>
                </> 
                :
                <><h2>No data</h2></>
              }
              
          </div> 
        </>
    )
  }
  
  export default Blogs
