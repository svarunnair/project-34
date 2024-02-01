import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dashboard from './Dashboard';
import PublicRoutes from '../Routes/PublicRoutes';
import PrivateRoutes from '../Routes/PrivateRoutes';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
const ImageBoxOne = styled(Box)(({ theme }) => ({

  width:"5%",
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    width:"10%",
  },
  [theme.breakpoints.down("sm")]: {
    width:"15%",
  },
  [theme.breakpoints.down("xs")]: {},
}));


const ImageBox = styled(Box)(({ theme }) => ({

 
  
  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
   
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));
const TextBox = styled(Typography)(({ theme }) => ({

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuBox = styled(Typography)(({ theme }) => ({
  color:"grey",
  fontSize:12,
  gap:12,

  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {},
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));

const MenuDiv = styled(Typography)(({ theme }) => ({
  gap:15,
  display:"flex",
  flexDirection:"column",


  [theme.breakpoints.down("xl")]: {},
  [theme.breakpoints.down("lg")]: {},
  [theme.breakpoints.down("md")]: {
    display:"flex",
  flexDirection:"column",
  },
  [theme.breakpoints.down("sm")]: {},
  [theme.breakpoints.down("xs")]: {},
}));



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Navbar() {
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogout=()=>{
    localStorage.clear()
    navigate('/signin')
  }

  const token=localStorage.getItem('token')

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
             <ImageBoxOne as={"img"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW-qS5WgCwnLWW0DuBN5YVV77oXNDZFhmeog&usqp=CAU"/>
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              {open&&<ImageBox sx={{width:"60%"}} as={"img"} src="data:image/png;base64,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"/>}
           <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            
        {!open&&  <ImageBox sx={{width:"70%"}} as={"img"} src="data:image/png;base64,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"/>}

            <Divider sx={{ my: 1 }} />
            
          </List>
{open&&<MenuDiv>
          <MenuBox>HOME</MenuBox>
          <MenuBox>CONTACT</MenuBox>
          <MenuBox>BOOKING</MenuBox>
          <MenuBox>ENQUIERY</MenuBox>
          <MenuBox>ABOUTUS</MenuBox>
          <MenuBox>BRANCHES</MenuBox>
          <MenuBox>MENU</MenuBox>
          <Button onClick={handleLogout}>LogOut</Button>
          </MenuDiv>}

          
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          
          <Toolbar />
          {/* <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >  */}

{token?<PrivateRoutes/>:<PublicRoutes/>}

                  {/* <Chart /> */}
                {/* </Paper>
              </Grid> */}
              {/* Recent Deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >ddddddddddd */}
                  {/* <Deposits /> */}
                {/* </Paper>
              </Grid> */}
              {/* Recent Orders */}
              
            {/* </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}