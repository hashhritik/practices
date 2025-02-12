import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Carousel from 'react-material-ui-carousel'
import { Grid, Paper } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';


const pages = ['Home', 'About', 'Services', "FAQ", "Contact Us"];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Item(props) {
  return (
    <Paper>
      <img src={props.item.pic} height={600} width="100%" alt="" />
    </Paper>
  )
}

function MaterialUI() {

  let data = [
    { id: 1, name: "Product1", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p1.jpg" },
    { id: 2, name: "Product2", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p2.jpg" },
    { id: 3, name: "Product3", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p3.jpg" },
    { id: 4, name: "Product4", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p4.jpg" },
    { id: 5, name: "Product5", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p5.jpg" },
    { id: 6, name: "Product6", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p6.jpg" },
    { id: 7, name: "Product7", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p7.jpg" }, ,
    { id: 8, name: "Product8", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p8.jpg" },
    { id: 9, name: "Product9", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p9.jpg" },
    { id: 10, name: "Product10", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p10.jpg" },
    { id: 11, name: "Product11", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p11.jpg" },
    { id: 12, name: "Product12", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p12.jpg" },
    { id: 13, name: "Product13", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p13.jpg" },
    { id: 14, name: "Product14", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p14.jpg" },
    { id: 15, name: "Product15", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p15.jpg" },
    { id: 16, name: "Product16", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p16.jpg" },
    { id: 17, name: "Product17", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p17.jpg" },
    { id: 18, name: "Product18", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p18.jpg" },
    { id: 19, name: "Product19", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p19.jpg" },
    { id: 20, name: "Product20", basePrice: 5000, discount: 50, finalPrice: 2500, pic: "/images/p20.jpg" }


  ]


  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  var items = [
    {
      pic: "/images/banner1.jpg"
    },
    {
      pic: "/images/banner2.jpg"
    },
    {
      pic: "/images/banner3.jpg"
    },
    {
      pic: "/images/banner4.jpg"
    },
    {
      pic: "/images/banner5.jpg"
    },
    {
      pic: "/images/banner6.jpg"
    },
    {
      pic: "/images/banner7.jpg"
    },
    {
      pic: "/images/banner8.jpg"
    },
    {
      pic: "/images/banner9.jpg"
    },
    {
      pic: "/images/banner10.jpg"
    }
  ]

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.4rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
        </div>



        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/banner1.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner2.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner3.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner4.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner5.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner6.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner7.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner8.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner9.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/images/banner10.jpg" height={650} width="100%" className="d-block w-100" alt="..." />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <Carousel>
        {
          items.map((item, i) => <Item key={i} item={item} />)
        }
      </Carousel>

      <Typography variant='h5' color={'white'} bgcolor="#1976d2" padding={1} marginBottom={1} align='center'>Latest Products</Typography>

      <Grid container>

        {
          data.map((product, index) => {
            return <Grid item key={index} xl={2} lg={3} md={4} sm={6} xs={12}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={product.pic}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     <del className='text-danger'>&#8377;{product.basePrice}</del> &#8377;{product.finalPrice} <sup>{product.discount}%</sup>
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" variant='contained' bgcolor="1976d2" className='w-100' >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          })
        }
      </Grid>



    </>
  );
}
export default MaterialUI;
