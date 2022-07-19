import { useFormik } from 'formik';
import styles from "./AddBlogcmp.module.css";
import cn from 'classnames';
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
// import { Editor } from "react-draft-wysiwyg";
// import { EditorState, convertToRaw } from "draft-js";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import draftToHtml from "draftjs-to-html";


const AddBlogCmp = () => {

    // const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const [userIdVal, setUserIdVal] = useState("")
    const [image, setImage] = useState("")
    const [fileLabelText, setFileLabelText] = useState("Choose Thumbnail")
    const [categoriesData, setCategoriesData] = useState("")

    // const onEditorStateChangeHandler = (editorStateData) => {
    //   setEditorState(editorStateData)
      // console.log("editorstate value => ", draftToHtml(convertToRaw(editorState.getCurrentContent())))
    // }

  const formik = useFormik({
    initialValues: {
        title: "",
        description: "",
        category: "",
        image: "",
    },
    onSubmit: async (values) => {
        const blogData = new FormData();
        blogData.append("title", values.title)
        // blogData.append("description", draftToHtml(convertToRaw(editorState.getCurrentContent())))
        blogData.append("description",values.description)
        blogData.append("category", values.category)
        blogData.append("image", image)
        blogData.append("user", userIdVal)
        // console.log("title => ", blogData.get("title"))
        // console.log("description => ", blogData.get("description"))
        // console.log("category => ", blogData.get("category"))
        // console.log("image => ", blogData.get("image"))
        // console.log("user => ", blogData.get("user"))
      try {
        const res_data = await axios({
            method: "post",
            // url: "http://localhost:8080/api/v1/blogs",
            url: "https://dst-backend.herokuapp.com/api/v1/blogs",
            data: blogData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log("res_blog_added_data => ", res_data)
          if(res_data.data.success === true){
            Swal.fire({
              title: 'Success!',
              text: ' Blog Added Successfully',
              icon: 'success',
              confirmButtonText: 'Close'
              })
          }
          
        } catch (e) {
          console.log(e);
          Swal.fire({
          title: 'Error!',
          text: 'Failed to Add Blog',
          icon: 'error',
          confirmButtonText: 'Close'
          })
        }
    }
  });

  const getCategories = async () => {
    try {
      // const res_data = await  axios.get(`http://localhost:8080/api/v1/category`)
      const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/category`)
      console.log("res_data.data.category => ", res_data.data.category)
      if(res_data.data.category){
        setCategoriesData(res_data.data.category)
      }
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    setUserIdVal(localStorage.getItem("user") && JSON.parse(localStorage.getItem("user"))?.id) 
    getCategories();
  }, [])


  return (
    <>
      <div className={cn(styles.addblogBox)}>
        <div className={cn(styles.headingBox)}>
          <h1><span>Add Blog</span></h1>
        </div>
        <div className={cn(styles.contentBox)}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cn(styles.formcontentBox)}>
              <div className={cn(styles.inputBox)}>
                <input type="text" name="title" placeholder="Title" required onChange={formik.handleChange} value={formik.values.title} />
              </div>
              <div className={cn(styles.inputBox)}>
                <select name="category" required onChange={formik.handleChange}>
                        <option >--- select category ---</option>
                        {
                            categoriesData && categoriesData.map((category,i)=>(
                                <option key={i} value={category?.name}>{category?.name}</option>
                            ))
                        }
                    </select>
              </div>
              <div className={cn(styles.inputBox, styles.textEditorWrapper)}>
                {/* <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChangeHandler}/> */}  
                 <textarea name="description" placeholder='Enter description here' id="" required onChange={formik.handleChange} value={formik.values.description}></textarea>
              </div>
              <div className={cn(styles.inputBox)}>
                <label htmlFor="test">
                <div className={cn(styles.divinsidelabel)}><FontAwesomeIcon icon={faUpload} style={{fontSize:"18px", marginRight:"10px",cursor:"pointer"}} /> {fileLabelText}</div>
                <input type="file" name="image" required onChange={e => {setImage(e.target.files[0]); setFileLabelText(e.target.files[0].name)}}/>
                </label>
                <p id="filename"></p>
              </div>
              <div className={cn(styles.buttonBox)}> 
                <button type='submit'>Add Blog</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBlogCmp;