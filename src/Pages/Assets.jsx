import { Box, Button, Typography, styled } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteAssetes, getAssets } from '../Redux/data/action';

const OuterContainer = styled(Box)(({ theme }) => ({
 
    display: "flex",
   padding:50,
    justifyContent:"center",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const InnerBox = styled(Box)(({ theme }) => ({
  
   width:"85%",
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  
  const InnerDiv = styled(Box)(({ theme }) => ({
   
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const TextData = styled(Typography)(({ theme }) => ({
    
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const ButtonBox = styled(Button)(({ theme }) => ({
   
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
  const DetailBox = styled(Box)(({ theme }) => ({
  
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    padding:30,
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns:"repeat(2,1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns:"repeat(1,1fr)",
      padding:0,
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const Mapdata = styled(Box)(({ theme }) => ({
    border: "1px solid #1E90FF",
    borderRadius:20,
    padding:10,
    textAlign:"left",
    width:"90%",
    
   
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {
      padding:10,
      width:"100%",
    },
    [theme.breakpoints.down("xs")]: {},
  }));

  const TextBox = styled(Typography)(({ theme }) => ({
    // border: "1px solid yellow",
  
  
    [theme.breakpoints.down("xl")]: {},
    [theme.breakpoints.down("lg")]: {},
    [theme.breakpoints.down("md")]: {},
    [theme.breakpoints.down("sm")]: {},
    [theme.breakpoints.down("xs")]: {},
  }));
function Assets() {
    const navigate=useNavigate()
    const assetData=useSelector((store)=>store.data.getAsset)
    const dispatch=useDispatch()

    console.log("assetData",assetData)

    const handleAdd=()=>{
        navigate('/addassets')
    }
    const handleDelete=(_id)=>{
       dispatch(deleteAssetes(_id))
    }
    const handleDetail=(_id)=>{
      navigate(`/assetsdetail/${_id}`)
    }
    const handleEdit=(_id)=>{
      navigate(`/addservice/${_id}`)
      
    }


    useEffect(()=>{
      dispatch(getAssets())
    },[])

  return (
    <OuterContainer>

<InnerBox>

<InnerDiv>
    <TextData sx={{textTransform:"uppercase",fontSize:25}}>Assets details</TextData>
    <ButtonBox sx={{textTransform:"none",":hover":{background:"#1E90FF",color:"white"}}} onClick={handleAdd}>Add Assets</ButtonBox>

    <DetailBox>
      {assetData.map((item)=>(
        <Mapdata>

          <TextBox>Asset name :{item.asset_name} </TextBox>
          <TextBox>Brand :{item.brand} </TextBox>
          <TextBox>Department:{item.department} </TextBox>
     
          <Button sx={{":hover":{background:"#1E90FF",color:"white"}}} onClick={()=>handleDelete(item._id)}>Delete</Button>
          <Button sx={{":hover":{background:"#1E90FF",color:"white"}}} onClick={()=>handleDetail(item._id)}>Details</Button>
          <Button onClick={()=>handleEdit(item._id)} >Edit service</Button>


        </Mapdata>
      ))}
    </DetailBox>


    </InnerDiv>



</InnerBox>


    </OuterContainer>
  )
}

export default Assets