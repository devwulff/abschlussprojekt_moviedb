import { useState } from "react";
import MovieList from "./../components/MovieList";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
// import Filter from "./../components/Filter";
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [change, setChange] = useState("");
  const handleOnChange = (elt) => {
    setChange(elt.target.value);
  };

  return (
    <div id="outer-container">
      <div id="page-wrap">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={'outer-cobtainer'} />
        <Navigation onChange={handleOnChange} />
        {/* <Filter /> */}
        <MovieList change={change} />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
