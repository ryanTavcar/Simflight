import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../../styling/css/Footer.css";
// import PrivacyStatement from "./PrivacyStatementPopup";
// import TermsOfUse from "./TermsOfUsePopup";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
      background: theme.palette.background.default,
      padding: 0,
      margin: 0,
      // position:'fixed',
      left:'0px',
      // background: 'red',
      bottom:'0px',
      // height: 'calc(100% - 60px)',
      width:'100%',
      // height: '100%',
      // border: '2px solid orange',
      
  },
}))

const Footer = () => {

  const classes = useStyles();

    return (
        <Grid
          component="footer"
          container
          align="center"
          xs={12}
          spacing={2}
          justifyContent="center"
          className={classes.container}
        >
          <Grid item xs={12} md={4} justify="center">
            {/* <Link className="terms" to={`/term-privacy/term-of-use`}>
                    Terms of Use
                  </Link> */}
            {/* <TermsOfUse type="footer" /> */}
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            container
            alignItems="center"
            // spacing={3}
            justify="center"
          >
            <Grid item xs={2} md={1} style={{ margin: "0rem 0.3rem" }}>
              <a
                href="https://www.facebook.com/RESORTerapp-720393314994703/"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-facebook "
                  style={{ fontSize: "30px", color: "black" }}
                />
              </a>
            </Grid>
            <Grid item xs={2} md={1} style={{ margin: "0rem 0.3rem" }}>
              <a
                href="https://instagram.com/resorter.app?igshid=15u0376hpccny"
                target="_blank"
                rel="noreferrer"
              >
                <i
                  className="fab fa-instagram"
                  style={{ fontSize: "30px", color: "black" }}
                />
              </a>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} justify="center">
            {/* <Link
                    className="privacy"
                    to={`/term-privacy/privacy-statement`}
                  >
                    Privacy Statement
                  </Link> */}
            {/* <PrivacyStatement type="footer" /> */}
          </Grid>

          <Grid
            container
            item
            xs={12}
            md={6}
            align="center"
            justify="center"
            style={{
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "700"
            }}
          >
            Melbourne, Australia
          </Grid>
          <Grid item xs={12} md={6} align="center" justify="center">
            <a
              href="mailto:info@resorter.app"
              style={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: "700"
              }}
            >simflight@airtrainer.com
            </a>
          </Grid>

          <Grid
            item
            xs={12}
            align="center"
            style={{
              fontFamily: "Roboto",
              fontSize: "16px",
              fontWeight: "700"
            }}
          >
            Copyright 2021 - Simflight - All Rights Reserved
          </Grid>
        </Grid>
    );
};

export default Footer;
