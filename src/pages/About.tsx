import React from "react";
import Button from '@material-ui/core/Button';
import Footer from "../components/Footer";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import CreateIcon from "@material-ui/icons/Create";
import MailIcon from "@material-ui/icons/Mail";
import "../assets/styles/about.scss";

const About: React.FC = () => (
    <div className="home-body">
        <div className="area">
            <div className="titleHome">
                <h3>Shunya Kato</h3>
                <p>
                    <h6>B4 student at Kyoto University, and a member in Natural Language Processing Lab.</h6>
                </p>
                <Button
                    startIcon={<TwitterIcon/>}
                    href="https://twitter.com/KUeeyy36"
                >
                    Twitter
                </Button>
                <Button
                    startIcon={<GitHubIcon/>}
                    href="https://github.com/shunya-kato"
                >
                    GitHub
                </Button>
                <Button
                    startIcon={<CreateIcon/>}
                    href="https://kueeyy36.hatenablog.com/"
                >
                    Blog
                </Button>
                <Button
                    startIcon={<MailIcon/>}
                    href="mailto:s-kato@nlp.ist.i.kyoto-u.ac.jp"
                >
                    Mail
                </Button>
            </div>
        </div>
        <Footer/>
    </div>
);

export default About;