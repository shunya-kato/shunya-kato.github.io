import React from "react";
import Footer from "../components/Footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import {SkillItem} from "../Types";
import { Typography } from "@material-ui/core";
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import "devicon";
import "../assets/styles/skills.scss";

const skillItems: SkillItem[] = [
    {
        id: 0,
        title: "C",
        icon: "devicon-c-plain"
    },
    {
        id: 1,
        title: "C++",
        icon: "devicon-cplusplus-plain"
    },
    {
        id: 2,
        title: "Python",
        icon: "devicon-python-plain"
    },
    {
        id: 3,
        title: "JavaScript",
        icon: "devicon-javascript-plain"
    },
    {
        id: 4,
        title: "TypeScript",
        icon: "devicon-typescript-plain"
    },
    {
        id: 5,
        title: "HTML",
        icon: "devicon-html5-plain"
    },
    {
        id: 6,
        title: "CSS",
        icon: "devicon-css3-plain"
    },
    {
        id: 7,
        title: "PHP",
        icon: "devicon-php-plain"
    },
    {
        id: 8,
        title: "Go",
        icon: "devicon-go-plain"
    },
    {
        id: 9,
        title: "C#",
        icon: "devicon-csharp-plain"
    }
]

const cpskillItems: SkillItem[] = [
    {
        id: 0,
        title: "AtCoder",
        icon: ""
    },
    {
        id: 1,
        title: "Codeforces",
        icon: ""
    },
    {
        id: 2,
        title: "TopCoder",
        icon: ""
    }
] 
//star書く
const Skills: React.FC = () => (
    <div>
        <div>
            <div>
                <br/><br/><br/>
                <Grid container justify="center" spacing={4}>
                    {skillItems.map((value) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={value.id}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <p className={value.icon + " skillIcon"}></p>
                                            <Typography
                                              gutterBottom
                                              variant="h5"
                                              component="h2"
                                              className="cardTitle"
                                            >
                                                {value.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
            <div>
                <h1>competitive programming</h1>
                <Grid container justify="center" spacing={4}>
                    {cpskillItems.map((value) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={value.id}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <p className={value.icon + " skillIcon"}></p>
                                            <Typography
                                              gutterBottom
                                              variant="h5"
                                              component="h2"
                                              className="cardTitle"
                                            >
                                                {value.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </div>
        <Footer/>
    </div>
);

export default Skills;