import React, { useEffect, useState } from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import BlogCmp from '../../components/BlogCmp'
import blogpictwo from "../../public/blogpictwo.jpg"
import styles from "../../styles/blogCmp.module.css";
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

  const Blogs = () => {
    
    const [blogsData, setBlogsData] = useState("")
    const [categoriesData, setCategoriesData] = useState("")

    const filterBlogsHandler = async (queryStr) => {
      try {
        // const res_data = await  axios.get(`http://localhost:8080/api/v1/blogs/search?category=${queryStr}`)
        // const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs/search?category=${queryStr}`)
        const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs/search?category=${queryStr}`)
        console.log("res_data.datadf => ", res_data?.data)
        setBlogsData(res_data?.data?.data)
        
      } catch (err) {
        console.log(err)
      }
    }
    const onSearchBlogsHandler = (e) => {
      const serachedBlogs = blogsData.filter((v)=>{
        console.log("v",v.title.toLowerCase())
        return v.title.toLowerCase().includes(e.target.value.toLowerCase())
      })
      // console.log(serachedBlogs)
      setBlogsData(serachedBlogs)
    }
    const getCategories = async () => {
      try {
        // const res_data = await  axios.get(`http://localhost:8080/api/v1/category`)
        // const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/category`)
        const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/category`)
        console.log("res_data.data => ", res_data?.data)
        setCategoriesData(res_data?.data?.category)
        
      } catch (err) {
        console.log(err)
      }
    }
    const getBlogs = async () => {
      try {
        // const res_data = await  axios.get(`http://localhost:8080/api/v1/blogs`)
        const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs`)
        console.log("res_data.data => ", res_data?.data)
        setBlogsData(res_data?.data?.blogs)
        
      } catch (err) {
        console.log(err)
      }
    }

    useEffect(() => {
      getBlogs()
      getCategories()
    }, [])
    
    console.log("blogsData => ", blogsData)
    return (
      <>
          <Header />
            <div className={cn(styles.blogsSectionWrapper)}>
              <div className={cn(styles.blogsSection)}>
                <div className={cn(styles.blogsHeading)}>
                  <h1><span>Blogs</span></h1> 
                </div>
                <div className={cn(styles.blogsContentWrapper)}>
                    <BlogCmp blogsData={blogsData} />
                  <div className={cn(styles.blogsAside)}>
                    <div className={cn(styles.blogsAsideSearchSection)}>
                      <form onSubmit={e => e.preventDefault()}>
                        <input type="text" onChange={onSearchBlogsHandler} placeholder='Search' id="" />
                        <button><FontAwesomeIcon icon={faSearch} /></button>
                      </form>
                    </div>
                    <div className={cn(styles.blogsAsideCategorySection)}>
                      <div className={cn(styles.blogsAsideCategoryHeading)}>
                        <h2>Category</h2>
                      </div>
                      <div className={cn(styles.blogsAsideCategoryList)}>
                        <ul>
                          {  //http://localhost:8080/api/v1/blogs/search?category=mobiles
                            categoriesData ? 
                            <>
                              <li onClick={()=>{ getBlogs() }}>All</li>
                              {
                                categoriesData.map((v, i)=>
                                  <li key={i} onClick={()=>{filterBlogsHandler(v.name)}}>{v.name}</li>
                                )
                              }
                            </>
                            :
                            <>
                              <li>No Data</li>
                            </>
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <Footer />
      </>
    )
  }
  
  export default Blogs;