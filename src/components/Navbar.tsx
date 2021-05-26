import React from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import Home from "../pages/Home"
import Experiences from "../pages/Experiences"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Publications from "../pages/Publications"
import Products from "../pages/Products"
import { Tab, Tabs, AppBar } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavbarItem } from "../Types";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PortraitIcon from "@material-ui/icons/Portrait";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import ColorLensOutlinedIcon from "@material-ui/icons/ColorLensOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";

const navbarItem: NavbarItem[] = [
    {
        id: 1,
        route: "/",
        label: "HOME"
    },
    {
        id: 2,
        route: "/about",
        label: "ABOUT"
    },
    {
        id: 3,
        route: "/experiences",
        label: "EXPERIENCES"
    },
    {
        id: 4,
        route: "/publications",
        label: "PUBLICATIONS"
    },
    {
        id: 5,
        route: "/products",
        label: "PRODUCTS"
    },
    {
        id: 6,
        route: "/skills",
        label: "SKILLS"
    }
];

const Navbar: React.FC = () => (
    <Router>
        <Route
            render={() => (
                <AppBar color="default">
                    <div className="tabs">
                        <Tabs>
                            {navbarItem.map((val) => {
                                return (
                                    <Tab
                                        label={val.label}
                                        value={val.route}
                                        key={val.id}
                                        component={Link}
                                        to={val.route}
                                    />
                                );
                            })}
                        </Tabs>
                    </div>
                </AppBar>
            )}
        />
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/experiences" component={Experiences}/>
            <Route path="/publications" component={Publications}/>
            <Route path="/products" component={Products}/>
            <Route path="/skills" component={Skills}/>
        </Switch>
    </Router>
);

export default Navbar;