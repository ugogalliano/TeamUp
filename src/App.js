//components
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import TitleSection from "./components/TitleSection/TitleSection";
import Card from "./components/Card/Card";
import BannerTeam from "./components/BannerTeam/BannerTeam";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactUs from "./components/ContactUs/ContactUs";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BannerImage from "../src/assets/Rectangle1.png";
//utils
import classes from "./App.module.scss";

function App() {
  return (
    <main className={classes.app_container}>
      <LazyLoadImage src={BannerImage} className={classes.app_banner} />
      <Header />
      <Banner />

      <div className={classes.app_section_container}>
        {/** SERVICES SECTION*/}
        <TitleSection title={"Services"} id="services" />

        <div className={classes.app__card__container}>
          <Card />
          <Card />
          <Card />
        </div>

        {/** OUR TEAM SECTION*/}
        <TitleSection title={"Our Team"} id="our_team" />
        <BannerTeam />

        {/** OUR TEAM SECTION*/}
        <TitleSection title={"About Us"} id="about" />
        <AboutSection />

        {/**  CONTACT US SECTION*/}
        <TitleSection title={"Contact"} id="contact_us" />
        <ContactUs />
      </div>
    </main>
  );
}

export default App;
