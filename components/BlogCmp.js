import React from 'react'
import Image from 'next/image';
import blogpictwo from "../public/blogpictwo.jpg"
import styles from "../styles/blogCmp.module.css"
import cn from 'classnames';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,faClock,faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link"
const { convert } = require('html-to-text');
import moment from 'moment';

  const Blogs = ({blogsData}) => {
    
    return (
          <>
          <div className={cn(styles.blogsContent)}>
             {
                blogsData? 
                <>
                {
                  blogsData.map((blog_data,i)=>(
                    <div key={i} className={cn(styles.blogCard)}>
                      <div className={cn(styles.blogImageWrapper)}>
                        <Image src={blog_data?.image?.url} width={970} height={350} alt="blogpic"/>
                      </div>
                      <div className={cn(styles.cardBodyWrapper)}>
                        <div className={cn(styles.blogtitleWrapper)}>
                          <h2><Link href={`/blogs/${blog_data._id}`}><a>{blog_data?.title}</a></Link></h2>
                          <p><FontAwesomeIcon icon={faUserAlt} /><span>&nbsp;{`${blog_data?.user?.firstName},`}</span><FontAwesomeIcon icon={faClock} /><span>&nbsp;{moment(blog_data?.user?.createdAt).format("MMM Do YY")}</span></p>
                        </div>
                        <div className={cn(styles.blogDescriptionWrapper)}>
                          <p>{convert(blog_data?.description, {wordwrap: 200})}</p>
                        </div>
                        <div className={cn(styles.blogReadMoreBtnBox)}>
                        <Link href={`/blogs/${blog_data._id}`}><a className={cn(styles.readMoreBtn)}>Read more <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft:"5px", cursor: "pointer",verticalAlign:"middle" }} /></a></Link>
                        </div>
                      </div>
                    </div>
                  ))
                }
                
                </> 
                :
                <><h2>No data</h2></>
              }
              
          </div> 
        </>
    )
  }
  
  export default Blogs
