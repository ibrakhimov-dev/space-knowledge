import { Grid, Stack, Typography, Card, CardContent, Avatar, Box, Fab, Button, IconButton, FormControl, FormGroup, Slider, TextField, MenuItem } from '@mui/material'
import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import academyLogo from '../../Assets/img/academy-logo.png'
import SendOutlined from '@mui/icons-material/SendOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TagIcon from '@mui/icons-material/Tag';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import styled from 'styled-components';
import uploadImg from "../../Assets/img/cloud-upload-regular-240.png";
import ImgFileIcon from "../../Assets/img/free-image-file.webp" ;
import ClearIcon from '@mui/icons-material/Clear';
import { Description } from '@mui/icons-material';
import ReactQuill from 'react-quill';
import '../../../../node_modules/react-quill/dist/quill.snow.css'
import "./_created_adverticing.css";
// 

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

function CreateAdvertising() {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;
    const theme = useTheme();
    // 
    const [region, setRegion] = useState('');
    const [city, setCity] = useState('');
    const [academy, setAcademy] = useState('');
    const [direction, setDirection] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState(null);
    const [title, setTitle] = useState('');
    const wrapperRef = useRef(null);
    const [fileList, setFileList] = useState([]);
    const [description, setDescription] = useState("");
    const [value, setValue] = React.useState([0, 0]);
    // 
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleBody = (e) => {
        setDescription(e);
    }

    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    const onFileDrop = (e) => {
        console.log(e.target.files)
        const newFile = e.target.files[0];
        if (newFile) {
            const updatedList = [...fileList, newFile];
            setFileList(updatedList);
        }
    }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
    }

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return (
    <Stack>
        <Typography variant='h4'>Created Advertising</Typography>
        <Grid mt={4} container spacing={2}>
            <Grid item xl={8}>
                <Grid container>
                    <Grid item xl={12}>
                        <FormControl fullWidth>
                            <FormGroup>
                                <TextField id="outlined-basic" value={title} onChange={(e) => {setTitle(e.target.value)}} color='primary' helperText="Please enter Title" label="Title" variant="outlined" />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xl={6}>
                        <FormControl fullWidth>
                            <FormGroup sx={{marginTop: '1rem'}}>
                                <TextField
                                id="outlined-select-currency"
                                select
                                value={region}
                                onChange={(e) => {setRegion(e.target.value)}}
                                color='primary'
                                label="Region"
                                helperText="Please select Region">
                                    <MenuItem  value="Buxoro Viloyati">
                                        Buxoro Viloyati
                                    </MenuItem>
                                    <MenuItem  value="Toshkent Viloyati">
                                        Toshkent Viloyati
                                    </MenuItem>
                                    <MenuItem  value="Toshkent Shahri">
                                        Toshkent Shahri
                                    </MenuItem>
                                </TextField>
                            </FormGroup>
                            <FormGroup sx={{marginTop: '2rem'}}>
                                <TextField
                                id="outlined-select-currency"
                                select
                                value={city}
                                onChange={(e) => {setCity(e.target.value)}}
                                color='primary'
                                label="City"
                                helperText="Please select City">
                                    <MenuItem  value="Buxoro Shaxar">
                                        Buxoro Shaxar
                                    </MenuItem>
                                    <MenuItem  value="Yunusobod tumani">
                                        Yunusobod tumani
                                    </MenuItem>
                                    <MenuItem  value="Chilonzor tumani">
                                        Chilonzor tumani
                                    </MenuItem>
                                </TextField>
                            </FormGroup>
                            <FormGroup sx={{marginTop: '2rem'}}>
                                <TextField id="outlined-basic" value={phone} onChange={(e) => {setPhone(e.target.value)}} color='primary' type='number' helperText="Please enter Phone" label="+998" variant="outlined" />
                            </FormGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xl={6}>
                        <FormControl fullWidth>
                            <FormGroup sx={{marginTop: '1rem'}}>
                                <TextField
                                id="outlined-select-currency"
                                select
                                value={academy}
                                onChange={(e) => {setAcademy(e.target.value)}}
                                color='primary'
                                label="Academy"
                                helperText="Please select Academy">
                                    <MenuItem  value="O'quv Markaz">
                                        O'quv Markaz
                                    </MenuItem>
                                    <MenuItem  value="Universitet">
                                        Universitet
                                    </MenuItem>
                                    <MenuItem  value="Maktab">
                                        Maktab
                                    </MenuItem>
                                    <MenuItem  value="Maktabgacha Talim">
                                        Maktabgacha Talim
                                    </MenuItem>
                                </TextField>
                            </FormGroup>
                            <FormGroup sx={{marginTop: '2rem'}}>
                                <TextField
                                id="outlined-select-currency"
                                select
                                value={direction}
                                onChange={(e) => {setDirection(e.target.value)}}
                                color='primary'
                                label="Direction"
                                helperText="Please select Direction">
                                    <MenuItem  value="IT">
                                        IT
                                    </MenuItem>
                                    <MenuItem  value="Sport">
                                        Sport
                                    </MenuItem>
                                    <MenuItem  value="Musiqa">
                                        Musiqa
                                    </MenuItem>
                                </TextField>
                            </FormGroup>
                            <FormGroup sx={{marginTop: '2rem'}}>
                                <TextField
                                id="outlined-select-currency"
                                select
                                value={subject}
                                onChange={(e) => {setSubject(e.target.value)}}
                                color='primary'
                                label="Subject"
                                helperText="Please select Subject">
                                    <MenuItem  value="Frontend Developer">
                                        Frontend Developer
                                    </MenuItem>
                                    <MenuItem  value="Futbol">
                                        Futbol
                                    </MenuItem>
                                    <MenuItem  value="Vakal">
                                        Vakal
                                    </MenuItem>
                                </TextField>
                            </FormGroup>
                        </FormControl>
                    </Grid>
                </Grid>
                <Typography mt={2} variant='subtitle1'>Price:</Typography>
                <Grid container mt={2}>
                    <Grid item xl={6} px={2}>
                        
                        <Box>
                            <Slider
                                getAriaLabel={() => 'Prise range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                            />
                        </Box>
                        <Box display='flex' justifyContent='space-between'>
                            <Typography variant='subtitle2'>{value[0]*100000} so'm</Typography>
                            <Typography variant='subtitle2'>{value[1]*100000} so'm</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xl={4}>
                <Card            
                variant="outlined"
                sx={{
                borderRadius: '5px',
                height: '100%',
                position: 'relative',
                boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
                '&:hover': {
                    boxShadow: '0px 10px 10px -10px rgba(0,0,0,0.75)',
                },
                }}
                >
                    <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box
                        sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        gap: '0.5rem',
                        }}
                    >
                        <Avatar
                        size="small"
                        src="https://picsum.photos/2300/2300"
                        sx={{ border: '2px solid', borderColor: '#BC002D' }}
                        />
                        <Typography variant="subtitle1" fontSize={14} fontWeight="bold">
                        Lorem, ipsum dolor.
                        </Typography>
                    </Box>
                    </CardContent>
                    <CardContent>
                    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
                        <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                        >
                        {images.map((step, index) => (
                            <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                component="img"
                                sx={{
                                    display: 'block',
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    width: '100%',
                                }}
                                src={step.imgPath}
                                alt={step.label}
                                />
                            ) : null}
                            </div>
                        ))}
                        </AutoPlaySwipeableViews>
                    </Box>
                    </CardContent>        
                    <CardContent>
                        <Box>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="Region"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            {region}
                            </Fab>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="City"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            {city}
                            </Fab>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="Phone"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            +998{phone}
                            </Fab>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="Academy"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            {academy}
                            </Fab>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="Direction"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            {direction}
                            </Fab>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="Subject"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            {subject}
                            </Fab>
                            <Fab
                            sx={{ fontSize: '12px', mr: 1, mt: 1, textTransform: 'none', zIndex: 1 }}
                            variant="extended"
                            size="small"
                            aria-label="Price"
                            >
                            <TagIcon sx={{ mr: 1 }} color="danger" fontSize="small" />
                            {value[0]*100000} - {value[1]*100000} so'm
                            </Fab>
                        </Box>
                    </CardContent>
                    <CardContent>
                    <Typography variant='subtitle2'>
                        {title}
                    </Typography>
                    </CardContent>
                    <CardContent
                    orientation="horizontal"
                    sx={{ alignItems: 'center', mx: -1, position: 'relative' }}
                    >
                    <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                        <IconButton
                        variant="plain"
                        color="primary"
                        size="sm"
                        >
                        <SendOutlined />
                        </IconButton>
                        <IconButton
                        variant="plain"
                        color="primary"
                        size="sm"
                        >
                        <FavoriteBorderIcon />
                        </IconButton>
                        <Button
                            sx={{ position: 'absolute', right: 22, top: 20 }}
                            variant="contained"
                            color="danger"
                            size="small"
                        >
                            Created Advertising
                        </Button>
                    </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        <Grid mt={3} container spacing={2}>
            <Grid item xl={4}>
                <Typography color='primary' variant='h6'>Enter img for Advertising</Typography>
                <Stack mt={2}>
                    <DropFileInput
                    ref={wrapperRef}
                    onDragEnter={onDragEnter}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                >
                        <DropFileInputLabel>
                            <img src={uploadImg} style={{width: '60%'}} alt="Upload" />
                        </DropFileInputLabel>
                        <input style={dropFileInput} multiple type="file" value="" onChange={onFileDrop}/>
                    </DropFileInput>
                    {
                        fileList.length > 0 ? (
                            <Box mt={3}>
                                <Typography variant='subtitle2' fontWeight={500}>Ready to Upload</Typography>
                                {
                                    fileList.map((item, index) => (
                                        <DropFilePreviewItem key={index}>
                                            <img style={{width: '90px',marginRight: '20px'}} src={ImgFileIcon} alt="Logo" />
                                            <DropFilePreviewItemInfo>
                                                <p>Name: {item.name}</p>
                                                <p>Size: {item.size} B</p>
                                            </DropFilePreviewItemInfo>
                                            <DropFilePreviewItemDel onClick={() => fileRemove(item)}><ClearIcon/></DropFilePreviewItemDel>
                                        </DropFilePreviewItem>
                                    ))
                                }
                            </Box>
                        ) : null
                    }
                </Stack>
            </Grid>
            <Grid item xl={8}>
                <Typography color='primary' mb={2} variant='h6'>Enter description for Advertising</Typography>
                <ReactQuill 
                placeholder='Write something amazing...'
                modules={CreateAdvertising.modules}
                formats={CreateAdvertising.formats}
                onChange={handleBody}
                value={description}/>
            </Grid>
        </Grid>
    </Stack>
  )
}

CreateAdvertising.formats = ["header","font","size","bold","italic","underline",
    "strike","blockquote","list","bullet","link","image","video", 'code-block',
  ];

CreateAdvertising.modules = {
    toolbar: [
        [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6 ]}, {font : []}],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image', 'video'],
        ['clean'],
        ['code-block'],
    ],
  }

const DropFileInput = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    border: 2px dashed #BC002D;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #07255681;
    &:hover , &.dragover {
        opacity: 0.6
    }
`

const DropFileInputLabel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const DropFilePreviewItem = styled.div`
    position: relative;
    display: flex;
    margin-top : 10px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
    background-color: #063d9453;
    &:hover {
        box-shadow: 0px 10px 10px -10px rgba(0,0,0,0.75);
        
    }
` 
const DropFilePreviewItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 12px;
` 
const DropFilePreviewItemDel = styled.span`
    background-color: #ee3d3d;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    &:hover {
        opacity: 1;
    }
` 

const dropFileInput = {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    cursor: 'pointer',
}

export default CreateAdvertising