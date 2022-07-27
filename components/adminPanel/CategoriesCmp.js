import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import styles from "./Categories_cmp.module.css";
import cn from 'classnames';
import {
  faEdit,
  faTrash,
  faClose
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 5,
  px:3
};
const styleCircular = {
  position: 'absolute',
  top: {
    xs:'50%',
  },
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20px',
  height: '20px',
  // boxShadow: 24,
};

const CategoriesCmp = () => {

 
  const [open, setOpen] = React.useState(false);
  const [categoriesData, setCategoriesData] = React.useState("");
  const [selectedRow, setSelectedRow] = React.useState({name: "",id:""});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateCategoryHandler = async (e) => {
    e.preventDefault();
    console.log('form category updated cn=> ',selectedRow._id,selectedRow.name)
    try {
			// const res_data = await  axios.put(`http://localhost:8080/api/v1/category/${selectedRow._id}`,
			const res_data = await  axios.put(`https://dst-backend.herokuapp.com/api/v1/category/${selectedRow._id}`,
      selectedRow)
				console.log("res_category_updated_data => ", res_data)
				if(res_data.data.success === true){
          handleClose()
					Swal.fire({
						title: 'Success!',
						text: ' Category Updated Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => getCategories(),200)
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

  const deleteCategoryHandler = async (id) => {
    console.log("delete Category Handler id => ", id)
    try {
			// const res_data = await  axios.delete(`http://localhost:8080/api/v1/category/${id}`)
			const res_data = await  axios.delete(`https://dst-backend.herokuapp.com/api/v1/category/${id}`)
				console.log("res_category_deleted_data => ", res_data)
				if(res_data.data.success === true){
					Swal.fire({
						title: 'Success!',
						text: ' Category Deleted Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => getCategories(),200)
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

  const columns = [
    { field: 'id', headerName: 'ID', 
    width: 150 
  },
    {
      field: 'name',
      headerName: 'Category Name',
      width: 300,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <button className={cn(styles.action_edit_btn)} onClick={()=> {setSelectedRow(params.row); handleOpen()}}>
            <FontAwesomeIcon
            icon={faEdit}
            style={{  cursor: "pointer" }}/></button>
            <button className={cn(styles.action_delete_btn)} onClick={() => deleteCategoryHandler(params.row._id)}>
            <FontAwesomeIcon
            icon={faTrash}
            style={{  cursor: "pointer" }}/></button>
          </>
        );
      },
    },
  ];

  const getCategories = async () => {
    try {
      // const res_data = await  axios.get(`http://localhost:8080/api/v1/category`)
      const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/category`)
      console.log("res_data.data.category => ", res_data.data.category)
      if(res_data.data.category){
        let newres_data =  res_data.data.category.map((category,i)=>{
          return {id:i+1,...category}
        })
        console.log("newres_data => ",newres_data)
        setCategoriesData(newres_data)
      }
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    getCategories();
  }, [])
  

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      console.log("form category name => ", values)
      // alert(JSON.stringify(values, null, 2));
      try {
        // const res_data = await  axios.post(`http://localhost:8080/api/v1/category`,
        const res_data = await  axios.post(`https://dst-backend.herokuapp.com/api/v1/category`,
        values)
          console.log("res_category_added_data => ", res_data)
          if(res_data.data.success === true){
            Swal.fire({
              title: 'Success!',
              text: ' Category Added Successfully',
              icon: 'success',
              confirmButtonText: 'Close'
              })
  
              setTimeout(() => getCategories(),200)
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
    },
  });

  return (
    <>
      <div className={cn(styles.category_wrapper)}>
        <div className={cn(styles.heading_wrapper)}>
          <h1><span>Categories</span></h1>
        </div>
        <div className={cn(styles.content_wrapper)}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cn(styles.form_content_wrapper)}>
              <div className={cn(styles.input_wrapper)}>
                <input type="text" name="name" placeholder="Category Name" required onChange={formik.handleChange} value={formik.values.name} />
              </div>
              <div className={cn(styles.button_wrapper)}> 
                <button type='submit'>Add Category</button>
              </div>
            </div>
          </form>
        </div>

        <div className={cn(styles.table_wrapper)}>
          <div className={cn(styles.table_heading)}>
            <h1><span>View Categories</span></h1>
          </div>
          <div style={{position: "relative"}}>
            {
              categoriesData !== "" ?
              <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
              rows={categoriesData}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              />
              </Box>
              :
              <CircularProgress sx={styleCircular}/>
            }
          </div>
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
                Update Category
              </Typography>
              <Button variant="outlined" size='small' onClick={handleClose}><FontAwesomeIcon icon={faClose} style={{cursor: "pointer" }}/></Button>
            </Box>
            <Box component="form" onSubmit={updateCategoryHandler}>
              <TextField 
                id="outlined-basic"  
                name="name"
                required
                onChange={e => setSelectedRow({...selectedRow,name: e.target.value})}
                value={selectedRow.name} 
                label="Category Name" 
                variant="outlined" fullWidth autoFocus size='small' sx={{mb:2}}/>
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

export default CategoriesCmp



// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { DataGrid } from '@mui/x-data-grid';
// import { useFormik } from 'formik';
// import styles from "./Categories_cmp.module.css";
// import cn from 'classnames';
// import {
//   faEdit,
//   faTrash,
//   faClose
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React, { useEffect } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2'

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   py: 5,
//   px:3
// };


// const CategoriesCmp = () => {

 
//   const [open, setOpen] = React.useState(false);
//   const [categoriesData, setCategoriesData] = React.useState("");
//   const [selectedRow, setSelectedRow] = React.useState({name: "",id:""});

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const updateCategoryHandler = async (e) => {
//     e.preventDefault();
//     console.log('form category updated cn=> ',selectedRow._id,selectedRow.name)
//     try {
// 			// const res_data = await  axios.put(`http://localhost:8080/api/v1/category/${selectedRow._id}`,
// 			const res_data = await  axios.put(`https://dst-backend.herokuapp.com/api/v1/category/${selectedRow._id}`,
//       selectedRow)
// 				console.log("res_category_updated_data => ", res_data)
// 				if(res_data.data.success === true){
//           handleClose()
// 					Swal.fire({
// 						title: 'Success!',
// 						text: ' Category Updated Successfully',
// 						icon: 'success',
// 						confirmButtonText: 'Close'
// 					  })

//             setTimeout(() => getCategories(),200)
// 				}
				
// 		  } catch (e) {
// 			  console.log(e);
// 			  Swal.fire({
// 				title: 'Error!',
// 				text: 'Failed to update',
// 				icon: 'error',
// 				confirmButtonText: 'Close'
// 			  })
// 		  }
//   }

//   const deleteCategoryHandler = async (id) => {
//     console.log("delete Category Handler id => ", id)
//     try {
// 			// const res_data = await  axios.delete(`http://localhost:8080/api/v1/category/${id}`)
// 			const res_data = await  axios.delete(`https://dst-backend.herokuapp.com/api/v1/category/${id}`)
// 				console.log("res_category_deleted_data => ", res_data)
// 				if(res_data.data.success === true){
// 					Swal.fire({
// 						title: 'Success!',
// 						text: ' Category Deleted Successfully',
// 						icon: 'success',
// 						confirmButtonText: 'Close'
// 					  })

//             setTimeout(() => getCategories(),200)
// 				}
				
// 		  } catch (e) {
// 			  console.log(e);
// 			  Swal.fire({
// 				title: 'Error!',
// 				text: 'Failed to update',
// 				icon: 'error',
// 				confirmButtonText: 'Close'
// 			  })
// 		  }
//   }

//   const columns = [
//     { field: 'id', headerName: 'ID', 
//     width: 150 
//   },
//     {
//       field: 'name',
//       headerName: 'Category Name',
//       width: 300,
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 300,
//       renderCell: (params) => {
//         return (
//           <>
//             <button className={cn(styles.action_edit_btn)} onClick={()=> {setSelectedRow(params.row); handleOpen()}}>
//             <FontAwesomeIcon
//             icon={faEdit}
//             style={{  cursor: "pointer" }}/></button>
//             <button className={cn(styles.action_delete_btn)} onClick={() => deleteCategoryHandler(params.row._id)}>
//             <FontAwesomeIcon
//             icon={faTrash}
//             style={{  cursor: "pointer" }}/></button>
//           </>
//         );
//       },
//     },
//   ];

//   const getCategories = async () => {
//     try {
//       // const res_data = await  axios.get(`http://localhost:8080/api/v1/category`)
//       const res_data = await  axios.get(`https://dst-backend.herokuapp.com/api/v1/category`)
//       console.log("res_data.data.category => ", res_data.data.category)
//       if(res_data.data.category){
//         let newres_data =  res_data.data.category.map((category,i)=>{
//           return {id:i+1,...category}
//         })
//         console.log("newres_data => ",newres_data)
//         setCategoriesData(newres_data)
//       }
//     } catch (err) {
//         console.log(err)
//     }
//   }

//   useEffect(() => {
//     getCategories();
//   }, [])
  

//   const formik = useFormik({
//     initialValues: {
//       name: "",
//     },
//     onSubmit: async (values) => {
//       console.log("form category name => ", values)
//       // alert(JSON.stringify(values, null, 2));
//       try {
//         // const res_data = await  axios.post(`http://localhost:8080/api/v1/category`,
//         const res_data = await  axios.post(`https://dst-backend.herokuapp.com/api/v1/category`,
//         values)
//           console.log("res_category_added_data => ", res_data)
//           if(res_data.data.success === true){
//             Swal.fire({
//               title: 'Success!',
//               text: ' Category Added Successfully',
//               icon: 'success',
//               confirmButtonText: 'Close'
//               })
  
//               setTimeout(() => getCategories(),200)
//           }
          
//         } catch (e) {
//           console.log(e);
//           Swal.fire({
//           title: 'Error!',
//           text: 'Failed to update',
//           icon: 'error',
//           confirmButtonText: 'Close'
//           })
//         }
//     },
//   });

//   return (
//     <>
//       <div className={cn(styles.category_wrapper)}>
//         <div className={cn(styles.heading_wrapper)}>
//           <h1><span>Categories</span></h1>
//         </div>
//         <div className={cn(styles.content_wrapper)}>
//           <form onSubmit={formik.handleSubmit}>
//             <div className={cn(styles.form_content_wrapper)}>
//               <div className={cn(styles.input_wrapper)}>
//                 <input type="text" name="name" placeholder="Category Name" required onChange={formik.handleChange} value={formik.values.name} />
//               </div>
//               <div className={cn(styles.button_wrapper)}> 
//                 <button type='submit'>Add Category</button>
//               </div>
//             </div>
//           </form>
//         </div>

//         <div className={cn(styles.table_wrapper)}>
//           <div className={cn(styles.table_heading)}>
//             <h1><span>View Categories</span></h1>
//           </div>
//           <Box sx={{ height: 400, width: '100%' }}>
//             <DataGrid
//               rows={categoriesData}
//               columns={columns}
//               pageSize={5}
//               rowsPerPageOptions={[5]}
//               checkboxSelection
//               disableSelectionOnClick
//             />
//           </Box>
//         </div>
//       </div>
//       {/* modal start from here  */}
//       <div>
//         <Modal
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <Box sx={style}>
//             <Box sx={{mb:5,pb:1,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom: "1px solid black"}}>
//               <Typography id="modal-modal-title" variant="h6" component="h2">
//                 Update Category
//               </Typography>
//               <Button variant="outlined" size='small' onClick={handleClose}><FontAwesomeIcon icon={faClose} style={{cursor: "pointer" }}/></Button>
//             </Box>
//             <Box component="form" onSubmit={updateCategoryHandler}>
//               <TextField 
//                 id="outlined-basic"  
//                 name="name"
//                 required
//                 onChange={e => setSelectedRow({...selectedRow,name: e.target.value})}
//                 value={selectedRow.name} 
//                 label="Category Name" 
//                 variant="outlined" fullWidth autoFocus size='small' sx={{mb:2}}/>
//                 <Button
//                 type="submit"
//                 variant="contained"
//                 size='small'
//                 sx={{mt:1,mb:3}}
//               >
//                 Update
//               </Button>
//             </Box>
//           </Box>
//         </Modal>
//       </div>
//     </>
//   )
// }

// export default CategoriesCmp
