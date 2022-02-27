const Styles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginTop: 22,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },

  cssLabel: {
    textDecoration: "none",
    fontSize: 16,
    paddingLeft: 2,
    color: "#595F6E",
    fontFamily: "Source Sans Pro",
  },

  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      border: "1px solid #558B2F",
    },
    width: 370,
    borderRadius: 8,
    fontFamily: "Source Sans Pro",
    letterSpacing: 0.64,
  },

  cssFocused: {
    color: "#595F6E",
    borderColor: "#558B2F",
  },

  notchedOutline: {
    borderColor: "#558B2F",
  },
});

export default Styles;
