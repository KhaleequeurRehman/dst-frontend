import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import styles from "./Categories_cmp.module.css";
import Image from 'next/image';
import cn from 'classnames';
import {
  faEdit,
  faTrash,
  faClose
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import {useRouter} from "next/router"
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { faUpload } from "@fortawesome/free-solid-svg-icons";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 5,
  px:3
};


const AllBlogsCmp = () => {
 
  const router = useRouter()

  const [open, setOpen] = React.useState(false);
  const [allBlogsData, setAllBlogsData] = React.useState("");
  const [selectedRow, setSelectedRow] = React.useState({title: "",category:"",description:""});
  const [categoriesData, setCategoriesData] = React.useState("")
  const [image, setImage] = useState("")
  const [fileLabelText, setFileLabelText] = useState("Choose Image")

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateBlogHandler = async (e) => {
    e.preventDefault();
    
    const updateBlogData = new FormData();
    updateBlogData.append("title", selectedRow.title)
    updateBlogData.append("description",selectedRow.description)
    updateBlogData.append("category", selectedRow.category)
    updateBlogData.append("image", image)
    updateBlogData.append("user", selectedRow.user._id)
    
    console.log('form blog updated cn=> ',selectedRow._id,selectedRow.title,image)
    try {
			// const res_data = await  axios.put(`http://localhost:8080/api/v1/blogs/${selectedRow._id}`,
			// const res_data = await  axios.put(`https://dst-backend.herokuapp.com/api/v1/blogs/${selectedRow._id}`,
      // selectedRow)
      const res_data = await axios({
        method: "put",
        // url: `http://localhost:8080/api/v1/blogs/${selectedRow._id}`,
        url: `https://dst-backend.herokuapp.com/api/v1/blogs/${selectedRow._id}`,
        data: updateBlogData,
        headers: { "Content-Type": "multipart/form-data" },
      });
				console.log("res_blog_updated_data => ", res_data)
				if(res_data.data.success === true){
          handleClose()
					Swal.fire({
						title: 'Success!',
						text: ' Blog Updated Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => getAllBlogs(),200)
				}
				
		  } catch (e) {
			  console.log(e);
        handleClose()
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to update',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
		  }
  }

  const deleteBlogHandler = async (id) => {
    console.log("delete Blog Handler id => ", id)
    try {
			// const res_data = await  axios.delete(`http://localhost:8080/api/v1/blogs/${id}`)
			const res_data = await  axios.delete(`https://dst-backend.herokuapp.com/api/v1/blogs/${id}`)
				console.log("res_blog_deleted_data => ", res_data)
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						text: ' Blog Deleted Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => getAllBlogs(),200)
				}
				
		  } catch (e) {
			  console.log(e);
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to delete',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
		  }
  }

  const columns = [
    { field: 'id', headerName: 'ID', 
    width: 80 
  },
    {
      field: 'image',
      headerName: 'Image',
      width: 120,
      renderCell: (params) => {
        return (
          <>
            <Image className={cn(styles.singleBlogImage)} src={params.row.image.url} width={120} height={52} alt="singleblogImage" />
          </>
        );
      },
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 300,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 160,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 300,
    },
    {
        field: 'createdBy',
        headerName: 'CreatedBy',
        width: 130,
      },
    {
      field: "action",
      headerName: "Action",
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <button className={cn(styles.action_edit_btn)} onClick={()=> {setSelectedRow(params.row); handleOpen()}}>
            <FontAwesomeIcon
            icon={faEdit}
            style={{  cursor: "pointer" }}/></button>
            {/* <button className={cn(styles.action_edit_btn)} onClick={()=> {router.push(`/UpdateBlog/${params.row._id}`)}}>
            <FontAwesomeIcon
            icon={faEdit}
            style={{  cursor: "pointer" }}/></button> */}
            <button className={cn(styles.action_delete_btn)} onClick={() => deleteBlogHandler(params.row._id)}>
            <FontAwesomeIcon
            icon={faTrash}
            style={{  cursor: "pointer" }}/></button>
          </>
        );
      },
    },
  ];

  const getAllBlogs = async () => {
    try {
      // const res_data = await  axios.get(`http://localhost:8080/api/v1/blogs`)
      const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/blogs`)
      console.log("res_data.data.allblogs => ", res_data.data.blogs)
      if(res_data.data.blogs){
        let newres_data =  res_data.data.blogs.map((blog,i)=>{
          return {id:i+1,createdBy:blog.user.firstName,...blog}
        })
        console.log("newres_data => ",newres_data)
        setAllBlogsData(newres_data)
      }
    } catch (err) {
        console.log(err)
    }
  }

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
    getAllBlogs();
    getCategories();
  }, [])
  

  return (
    <>
      <div className={cn(styles.category_wrapper)}>
        <div className={cn(styles.heading_wrapper)}>
          <h1><span> All Blogs</span></h1>
        </div>
        <div className={cn(styles.table_wrapper)}>
          <div className={cn(styles.table_heading)}>
            <h1><span>View Blogs</span></h1>
          </div>
          <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={allBlogsData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
            />
          </Box>
        </div>
      </div>
      {/* modal start from here  */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{mb:5,pb:1,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom: "1px solid black"}}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Update Blog
              </Typography>
              <Button variant="outlined" size='small' onClick={handleClose}><FontAwesomeIcon icon={faClose} style={{cursor: "pointer" }}/></Button>
            </Box>
            <Box component="form" onSubmit={updateBlogHandler}>
              <TextField 
                id="outlined-basic"  
                name="title"
                required
                multiline
                minRows={1}
                maxRows={3}
                onChange={e => setSelectedRow({...selectedRow,title: e.target.value})}
                value={selectedRow.title} 
                label="Title" 
                variant="outlined" fullWidth autoFocus size='small' sx={{mb:2}}/>
                <TextareaAutosize
                  aria-label="textarea"
                  placeholder="Description"
                  name="description"
                  required
                  minRows={4}
                  maxRows={8}
                  onChange={e => setSelectedRow({...selectedRow,description: e.target.value})}
                  value={selectedRow.description} 
                  style={{ width: "100%",padding:10,marginBottom:20,fontSize:13 }}
                />
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="category"
                  required
                  onChange={e => setSelectedRow({...selectedRow,category: e.target.value})}
                  value={selectedRow.category} 
                  label="Category"
                >
                  {
                    categoriesData && categoriesData.map((category,i)=>(
                        <MenuItem key={i} value={category?.name}>{category?.name}</MenuItem>
                    ))
                  }
                </Select>
                </FormControl>
                <div className={cn(styles.inputbox)}>
                  <label htmlFor="test">
                  <div className={cn(styles.divinsidelabel)}><FontAwesomeIcon icon={faUpload} style={{fontSize:"18px", marginRight:"10px",cursor:"pointer"}} /> {fileLabelText}</div>
                  <input type="file" name="image" required onChange={e => {setImage(e.target.files[0]); setFileLabelText(e.target.files[0].name)}}/>
                  </label>
                  <p id="filename"></p>
                </div>
                <Button
                type="submit"
                variant="contained"
                size='small'
                sx={{mt:1,mb:3}}
              >
                Update
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default AllBlogsCmp
