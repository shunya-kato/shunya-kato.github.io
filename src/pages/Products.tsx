import React from "react";
import Footer from "../components/Footer";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import {ProductItem} from "../Types";
import { Typography } from "@material-ui/core";
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import "devicon";
import "../assets/styles/skills.scss";

const ProductItems: ProductItem[] = [
    {
        id: 0,
        title: "Portfolio",
        path: "",
        url: ""
    }
]

const Products: React.FC = () => (
    <div>
        <div>
            <div>
                <br/><br/><br/>
                <Grid container justify="center" spacing={4}>
                    {ProductItems.map((value) => {
                        return (
                            <Grid item xs={12} sm={6} md={4} key={value.id}>
                                <Card>
                                    <CardActionArea>
                                        <CardContent>
                                            <p className="skillIcon"></p>
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
    </div>
);

export default Products;