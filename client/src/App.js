import React, {useState, useEffect} from 'react'
// import Button from '@mui/material/Button'
import {Container, CssBaseline, Grid, AppBar, Typography, Grow} from '@mui/material'
import { useDispatch } from 'react-redux'
import useStyle from './Style'

import Form from './Components/Form/Form'
import Posts from './Components/Posts/Posts'
import getPosts from './Actions/GetPosts'
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";


export default function App() {

    const[selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyle();

    useEffect(() => {
        dispatch(getPosts());
    },[dispatch]);

    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <AppBar position="static" className={classes.appBar}>
                    <Typography
                    className={classes.heading}
                    variant="h4"
                    gutterBottom
                    component="div"
                    align="inherit"
                    >
                    MemoryBook
                    </Typography>
                  
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={1}
                        >
                        <Grid item xs={12} sm={8}>
                            <Posts setSelectedId={setSelectedId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form selectedId={selectedId} setSelectedId={setSelectedId} />
                        </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </>
    )
}
