import { CssBaseline, Grid } from "@mui/material";
import Topbar from "../Topbar";
const Home = () => {
  return <>
    <Topbar />
    <CssBaseline />
    <Grid container justifyContent='center'>
      <Grid item sm={10}>
        <h2>Home Page</h2>
        <hr />
        <p>Meeting unprecedented expectations requires embracing digital and cloud as core imperatives
          Whether it's always-on connectivity, digital assistants or whatever comes next, the accelerating demand for consumerized experiences will continue to reshape enterprises for years to come. In response, leading insurance, banking and healthcare companies are embracing digital and cloud as core imperatives to stay competitive. They’re also leveraging ValueMomentum’s Digital & Cloud Solutions to gain expert assistance for speedy and successful transformation journeys.</p>
      </Grid>
    </Grid>
  </>;
};
export default Home;
