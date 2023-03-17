import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material";
import LuggageIcon from "@mui/icons-material/Luggage";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByUserMail, getUserList } from "../../redux/actions/userActions";
import { logOut } from "../../redux/actions/authenticationActions";
import { openSnacbar } from "../../redux/actions/appActions";
import { getByRole, getRoleList } from "../../redux/actions/roleActions";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});
function NavBar() {
  const { user } = useSelector((state) => state.user);
  const { roles } = useSelector((state) => state.role);
  const pages = [
    {
      id: 1,
      name: "Hotels",
      url: "/hotellist",
    },
  ];

  // const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const settings = [
    {
      id: 4,
      name: "Admin",
      url: "/adminhome",
    },
    {
      id: 1,
      name: "Profile",
      url: `/user/${user.data?.email}`,
    },
    {
      id: 2,
      name: "Update Profile",
      url: `/userupdate/${user.data?.email}`,
    },
    {
      id: 3,
      name: "Update Password",
      url: "/userpasswordupdate",
    },
    {
      id: 2,
      name: "Add Travel",
      url: `/addtravelwritings/${user.data?.email}`,
    },
  ];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (url) => {
    setAnchorElNav(null);
    navigate(url);
  };

  const handleCloseUserMenu = (url) => {
    setAnchorElUser(null);
    navigate(url);
  };

  const navigate = useNavigate();
  const dispacth = useDispatch();
  const out = () => {
    dispacth(logOut(user.data?.id));
    dispacth(
      openSnacbar({
        message: "Çıkış Başarılı",
        severity: "success",
      })
    );
    navigate(`/`);
  };
  useEffect(() => {
    dispacth(getByUserMail(user.data?.email));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <LuggageIcon></LuggageIcon>
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Hotel
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.id}
                    onClick={() => handleCloseNavMenu(page.url)}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Hotel
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page.url)}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
            {/* Button Kısımları */}
            {user.data?.status === false ||
              (user.data?.status === undefined && (
                <>
                  <Button
                    onClick={() => navigate("/register")}
                    startIcon={<HowToRegIcon></HowToRegIcon>}
                    variant="contained"
                    color="warning"
                  >
                    Register
                  </Button>
                  <Button
                    onClick={() => navigate("/login")}
                    startIcon={<LoginIcon></LoginIcon>}
                    style={{ marginLeft: 10, marginRight: 10 }}
                    variant="contained"
                    color="warning"
                  >
                    Login
                  </Button>
                </>
              ))}

            {user.data?.status === true && (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      style={{ backgroundColor: "white" }}
                      alt=""
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {/* {role.data.name==="Admin"&&(
   <Button
   onClick={()=>navigate("/adminhome")}
   style={{
     marginLeft: 14,
     backgroundColor: "black",
     width: 150,
   }}
   variant="contained"
 >
   Admin
 </Button>
)} */}

                  {settings.map((setting) => (
                    <MenuItem
                      key={setting.id}
                      onClick={() => handleCloseUserMenu(setting.url)}
                    >
                      <Button
                        variant="contained"
                        style={{ backgroundColor: "black", width: 150 }}
                      >
                        {setting.name}
                      </Button>
                    </MenuItem>
                  ))}
                  <Button
                    onClick={() => out()}
                    style={{
                      marginLeft: 14,
                      backgroundColor: "black",
                      width: 150,
                    }}
                    variant="contained"
                  >
                    Log Out
                  </Button>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default NavBar;
