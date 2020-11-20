import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Container, AppBar, Tabs, Tab, Box } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  panel: {
    overflow: 'scroll',
  }
}));

export default function UserGuide() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="This App" {...a11yProps(0)} />
          <Tab label="Chrome Extension" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} style={{maxHeight:'600px'}} className={classes.panel}>
        <Typography variant="h5">
          About this app
        </Typography>
        <Typography variant="body1">
          The Genie24 app allows you to display your product links to your Facebook
          or Youtube livestream viewers as popups in real-time. For your viewers
          to see your product link popups they must have the chrome extension
          installed and activated in their web browser.
        </Typography>
        <br></br>
        <Typography variant="h5">
          Step-by-step guide
        </Typography>
        <Typography variant="h6">
          Step 1 - Add Product Links
        </Typography>
        <Typography variant="body1">
          To display your product links on your Youtube live stream
          you must first add links by clicking "Add a link" under the
          "All Product Links" section in the "Live Links" tab.
          <br></br>
          Each product link should contain:
          <ul>
            <li>A product link URL that leads to the product page where a viewer can purchase a product. E.g. for example https://www.ulta.com/precisely-my-brow-pencil-waterproof-eyebrow-definer?productId=xlsImpprod14191019.</li>
            <li>Product name</li>
            <li>An image of the product. Use a square image no less than 500 by 500 pixels for best results.</li>
            <li>Short product description (this will be truncated if more than 100 characters).</li>
            <li>A product price. Use this to your advantage, for example, if you are offering exclusive discounts only when you are live then make your viewers aware of this.</li>
          </ul>
        </Typography>
        <br></br>
        <Typography variant="h6">
          Step 2 - Set Up Livestream URL
        </Typography>
        <Typography variant="body1">
          The Youtube livestream URL is the URL on which your viewers will be watching your
          livestream. To find the URL for your livestream, on the Youtube studio livestreaming
          dashboard click on the share button at the top right. This will open a popup with
          the short video link at the bottom under "Video link". DO NOT use this link. Instead
          copy this link into your web address bar and click enter to go to the full
          link URL on Youtube. You will use the full link URL.

          Copy the full link URL into the input form under "Which Youtube livestream URL
          would you like the links to be displayed on?" and click "GO LIVE".

          You must do this set up before you start your live stream. If you do this step
          after you start your Youtube livestream, viewers who visit the Youtube link
          beforehand will not be able to activate the popups without first reloading their page.
        </Typography>
        <br></br>
        <Typography variant="h6">
          Step 3 - Stage Product Links
        </Typography>
        <Typography variant="body1">
          After you've entered your Livestream URL, a staging area will appear.

          The staging area is where you want to stage products that you will show
          to your viewers during the livestream. This area makes it easier to pick
          the product links you want to show, but you can add new links to the staging
          area any time during the live stream.
        </Typography>
        <br></br>
        <Typography variant="h6">
          Step 4 - Show Your Product Link
        </Typography>
        <Typography variant="body1">
          Every product link you stage will have a "SHOW"
          button. When you click the show button, the product link will
          pop up on the window for anyone who is watching your Facebook or Youtube
          livestream and has the Genie24 extension installed and activated.

          You can switch the product links in the popup by simply clicking show on
          any other product link on the staging area.

          The "REMOVE" button allows you to remove a product link from the staging
          area.
        </Typography>
      </TabPanel>

      <TabPanel value={value} index={1} style={{maxHeight:'600px'}} className={classes.panel}>
        <Typography variant="h5">
          About the chrome extension
        </Typography>
        <Typography variant="body1">
          The Genie24 chrome extension creates popups on the browser window
          of viewers who are watching your live stream. In order for them to 
          see the popups, they must have the chrome extension installed and
          activated. The chrome extension can be installed on any web browser
          that uses chromium. This includes Google Chrome, Microsoft Edge, 
          Opera etc.
        </Typography>
        <br></br>

        <Typography variant="h5">
          How to install the chrome extension
        </Typography>
        <Typography variant="body1">
          The chrome extension is available on the chrome web store.
          To install the chrome extension, go to:
          <br></br>
          <a href="https://chrome.google.com/webstore/detail/genie24-youtube-livestrea/akoeaaimpnedjpioaeeiafgjcdfhgfmk">
          https://chrome.google.com/webstore/detail/genie24-youtube-livestrea/akoeaaimpnedjpioaeeiafgjcdfhgfmk
          </a>
          <br></br>
          Make sure you pin the extension icon to the tool bar next to the web address bar in 
          your browser to make it more accessible.
        </Typography>
        <br></br>
        <Typography variant="h5">
          How the extension works
        </Typography>
        <Typography variant="body1">
          The extension is very simple to use. The extension icon on the toolbar of your browser
          will be grayed out whenever you are on any site other than Youtube. This is to indicate
          that the extension cannot be used on those sites.

          When you visit Youtube the icon will turn bright orange, indicating that the extension
          can be used on Youtube only. When you visit a livestream link on Youtube for a livestreamer
          who is using the Genie24 app to host products, the extension icon will show a blue badge that
          will read "live". This will indicate that the livestreamer on this page has products to show.
          
          You can then click on the extension icon to activate it. Now, everytime the Youtube livestreamer
          shows a new product, it will appear on your browser window where you are watching the livestream.
          
          * Read the "This App" guide to learn how to start staging products for your own livestream.
        </Typography>
        <br></br>
        <Typography variant="h5">
          Encouraging your viewers to install the extension
        </Typography>
        <Typography variant="body1">
          Having clickable products popup during your livestream will create a more interactive
          experience for your viewers who are looking for the products you want to recommend or
          sell to them. These popups will increase the conversion of traffic to the product pages,
          hence increasing the conversion of sales for these products.
        </Typography>

      </TabPanel>
    </div>
  )
}