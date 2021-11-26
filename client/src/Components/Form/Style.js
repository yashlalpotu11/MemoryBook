import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: 10,
    },
  },
  paper: {
    padding: 20,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "30px 0",
  },
  buttonSubmit: {
    marginBottom: 20,
    paddingTop : 20,
  },
  buttonClear: {
    paddingTop: 40,
  }
}));