import React from "react";
import { Tabs } from "react-bootstrap";
import Tables from "../Dastabej/Tables";
import ChartComponent from "./Chart";
import Footer from "./Footer";
import HomeTop from "./HomeTopp";
import Maps from "./Map";
import Percentage from "./Percentage";
import PHolders from "./PositionHolders";

function Home(props) {
    return (
        <div className="" style={{ backgroundColor: "#F4F7FC" }}>
            <HomeTop />
            {/* <Tables /> */}
            <Maps />
            <Percentage />
            <ChartComponent />
            <PHolders />
            <Footer />
        </div>
    );
}
export default Home;