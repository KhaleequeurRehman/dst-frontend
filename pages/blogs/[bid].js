import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import { useRouter } from 'next/router'
import SingleBlogCmp from '../../components/SingleBlogCmp'
import styles from "../../styles/blogCmp.module.css";
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SingleBlog = () => {

  const router = useRouter()
  const [blogData, setBlogData] = useState("")

  // const getBlogs = useCallback( async () => {
  //     try {
  //           // const res_data = await  axios.get(`http://localhost:8080/api/v1/blogs/${router?.query?.bid}`)
  //           const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs/${router?.query?.bid}`)
  //           console.log("res_data.data => ", res_data?.data)
  //           setBlogData(res_data?.data?.blog)
            
  //         } catch (err) {
  //           console.log(err)
  //         }
  //   },
  //   [router?.query?.bid],
  // )
  
    // const getBlogs = async () => {
    //   try {
    //     // const res_data = await  axios.get(`http://localhost:8080/api/v1/blogs/${router?.query?.bid}`)
    //     const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs/${router?.query?.bid}`)
    //     console.log("res_data.data => ", res_data?.data)
    //     setBlogData(res_data?.data?.blog)
        
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }

    useEffect(() => {
      const getBlogs = async () => {
        try {
          const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs/${router?.query?.bid}`)
          console.log("res_data.data => ", res_data?.data)
          setBlogData(res_data?.data?.blog)
          
        } catch (err) {
          console.log(err)
        }
      }
     getBlogs()
      // router?.query?.bid && getBlogs()
    // }, [router?.query?.bid])
    }, [router?.query?.bid])
    
    console.log("singleBlogData => ", blogData)

  return (
    <>
      <Header />
         {
          blogData? 
          <SingleBlogCmp blogData={blogData} updateBlogData={setBlogData}/> 
          : 
          <> <div className={cn(styles.blogsContent)}><h2>No data</h2></div></>
         }
      <Footer />
    </>
  )
}

export default SingleBlog









