const styles = (theme) => ({
  taskboard: {
    display: "",
    alignItems: "center",
  },
  shape: {
    padding: 10,
    margin: 10,
    // backgroundColor: "red",
    // color: "white",
    // borderColor: "#CCCCC",
    // borderRadious: 4,
    backgroundColor: theme.color.primary,
    color : theme.shape.color
  },
});

export default styles;
