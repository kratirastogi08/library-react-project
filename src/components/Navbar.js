import React,{useState,useEffect,Fragment} from 'react'
import { AppBar, Toolbar,Typography, makeStyles,Button ,IconButton,} from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import './navbar.css'
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
   
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
 toolbar: {
  display: "flex",
  justifyContent: "space-between",
},

}));

const headersData = [
  {
    label: "Add Book",
    href: "/addBook",
  },
  {
    label: "Update Book",
    href: "/updateBook",
  },
  {
    label: "Delete Book",
    href: "/deleteBook",
  },
];

function Navbar() {
  const [state, setState] = useState({
    mobileView: false,
  });
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { mobileView } = state;
  const { header, logo,menuButton,toolbar } = useStyles();
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    }
  }, []);

  const displayMobile = () => {
    const handleDrawerOpen = () =>
    {
      setIsNavExpanded(!isNavExpanded);
    }
    return (
      <Toolbar className={toolbar}>
        <div>{femmecubatorLogo}</div>
        <IconButton
          {...{
            edge: "end",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>
        {console.log(isNavExpanded)}

</Toolbar>
    );
  };
    const displayDesktop = () => {
        return <Toolbar className={toolbar}>{femmecubatorLogo}
                    <div> {getMenuButtons()}</div>
              </Toolbar>
                };
      const femmecubatorLogo = (
        <Typography variant="h6" component="h1">
          Library
        </Typography>
      );
      const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: RouterLink,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
      };
      return (
        <Fragment>
        <header>
          <AppBar className={header}> {mobileView ? displayMobile() : displayDesktop()}</AppBar>
         
        <div
        
         className={
         mobileView && isNavExpanded ? "expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/addBook">Add Book</a>
          </li>
          <li>
            <a href="/updateBook">Update Book</a>
          </li>
          <li>
            <a href="/deleteBook">Delete Book</a>
          </li>
        </ul>
      </div>
      </header>
      </Fragment>
      );
}

export default Navbar