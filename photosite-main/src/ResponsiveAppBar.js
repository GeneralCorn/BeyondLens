import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CameraIcon from '@mui/icons-material/Camera';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const pages = ['Category', 'Contact', 'Who am I?'];

function ResponsiveAppBar() {

  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => { setAnchorElNav(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };
  const [dropdown, setState] = useState(false);

  const toggle = (event) => {
    if (event.type === 'keydown' && event.key === 'Tab') return;
    setState(!dropdown)
  }

  const list = () => (
      <Box
      role="presentation"
      onClick={toggle}
      onKeyDown={toggle}
      >
      <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
              <ListItemButton>
              <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemButton>
          </ListItem>
          ))}
      </List>
      <Divider />
      <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
              <ListItemButton>
              <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
              </ListItemButton>
          </ListItem>
          ))}
      </List>
      </Box>
  );

  return (
    <div>
         <Fragment>
            <Button onClick={toggle}>{'Logo'}</Button>
            <Drawer
                anchor={'left'}
                open={dropdown}
                onClose={toggle}
            >
            {list('left')}
            </Drawer>
          </Fragment>

          <AppBar position="static" style = {{backgroundColor:'black'}}>
            <Container maxWidth="xl" >
              <Toolbar disableGutters>

                <CameraIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  BEYONDLENS
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
                        <Typography textAlign="center" >{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <CameraIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
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
                      sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Avenir'}}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

              </Toolbar>
            </Container>
          </AppBar>
    </div>
  );
  
}
export default ResponsiveAppBar;
