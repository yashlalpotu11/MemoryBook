import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  heading: {
    // color: "rgba(0,183,255, 1)",

    paddingTop: "10px",
  },
  image: {
    marginLeft: "15px",
  },
}));