import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { NavLink, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import logo from "../Assets/Images/icons8-layout-48.png";
import { blue } from "@mui/material/colors";
import Badge from "@mui/material/Badge";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import './Sidebar.css';

const drawerWidth = 240;

interface Props {
  // Define the prop that will send data to the parent component
  isOpen: (data: boolean) => void;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "#FFFFFF",
  color: "#000000",
  ...(open && {
    marginLeft: drawerWidth,
    zIndex: theme.zIndex.drawer + 100,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar: React.FC<Props> = ({
  isOpen
}) => {
  const location = useLocation();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
    isOpen(open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "35px",
              }}
            >
              <img src={logo} height="40px" style={{ marginRight: "10px" }} />{" "}
              <div>canvas</div>
            </Typography>
          </Typography>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{color: "inherit", mr: 3}}>Admin portal</Typography>
            <IconButton aria-label="show 4 new mails">
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton sx={{ mr: 1 }} aria-label="show 4 new mails">
              <Badge badgeContent={3} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ mr: 1 }} aria-label="show 4 new mails">
              <Badge badgeContent={3} color="primary">
                <ModeCommentOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton sx={{ mr: 2 }} aria-label="show 4 new mails">
              <Badge badgeContent={3} color="primary">
                <NotificationsNoneOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Avatar sx={{ width: 45, height: 45, bgcolor: blue[300] }}>
                IP
              </Avatar>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />

        <List
          sx={{
            height: "100vh",
            backgroundColor: "rgb(40, 40, 79)",
            color: "lightblue",
            
          }}
        >
          <ListItem
            key="Dashboard"
            disablePadding
            sx={{ display: "block", color: "inherit"}}
            onClick={handleDrawerOpen}
            className="sidebar-tab-hover"
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "inherit",
                }}
              >
                <MenuIcon
                  onClick={handleDrawerOpen}
                  sx={{
                    marginLeft: 0,
                    display: open ? "none" : "block",
                  }}
                />
              </ListItemIcon>
              <Typography
                
                sx={{
                  display: open ? "block" : "none",
                  letterSpacing: "2px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginLeft: "-20px",
                  fontSize: "20px",
                  width: "100%"                  
                }}
              >Dashboard</Typography>
            </ListItemButton>
          </ListItem>
          {[
            { text: "Home", path: "/", icon: <HomeIcon /> },
            { text: "Country", path: "/country", icon: <FlagIcon /> },
            { text: "City", path: "/city", icon: <LocationCityIcon /> },
          ].map((tab, index) => (
            <ListItem
              key={tab.text}
              disablePadding
              sx={{ display: "block", color: "inherit" }}
              component={NavLink}
              to={tab.path}
              className={`sidebar-tab-hover ${location.pathname === tab.path ? 'sidebar-tab-hover-active' : ''}`}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  {tab.icon}
                </ListItemIcon>
                <ListItemText
                  primary={tab.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        <Typography paragraph>
          {/* Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper */}
        </Typography>
      </Box>
    </Box>
  );
}
export default Sidebar;