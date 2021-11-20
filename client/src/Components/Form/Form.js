import React, { Fragment, useState, useEffect } from "react";

import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyle from "./Style";
import { createPosts } from "./../../Actions/CreatePosts";
import { updatePost } from "./../../Actions/UpdatePosts";

const Form = (props) => {
  const [postData, setPostData] = useState({
    createdBy: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    props.selectedId
      ? state.posts.find((post) => post._id === props.selectedId)
      : null
  );
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
    // window.location.reload();
  }, [post]);

  const submitHandler = (event) => {
    event.preventDefault();
    if (props.selectedId) {
      dispatch(updatePost(props.selectedId, postData));
    } else {
      dispatch(createPosts(postData));
    }
    clearHandler();
  };

  const clearHandler = () => {
    props.setSelectedId(null);
    setPostData({
      createdBy: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Fragment>
      <Paper className={classes.paper}>
        <form
          autoComplete="off"
          noValidate
          className={`${classes.root} ${classes.form}`}
          onSubmit={submitHandler}
        >
          <Typography variant="h6">
            {props.selectedId ? "Editing" : "Creating"} a memory
          </Typography>
          <TextField
            name="createdBy"
            variant="outlined"
            label="CreatedBy"
            fullWidth
            value={postData.createdBy}
            onChange={(event) =>
              setPostData({ ...postData, createdBy: event.target.value })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(event) =>
              setPostData({ ...postData, title: event.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(event) =>
              setPostData({ ...postData, message: event.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(event) =>
              setPostData({ ...postData, tags: event.target.value.split(",") })
            }
          />
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            onClick={clearHandler}
            fullWidth
          >
            Clear
          </Button>
        </form>
      </Paper>
    </Fragment>
  );
};

export default Form;