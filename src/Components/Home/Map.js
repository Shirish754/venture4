import React from "react";
import nepalMap from "../images/nepalMap.png";
import Group256 from "../images/Group256.png";
import Group266 from "../images/Group266.png";
import Group268 from "../images/Group268.png";
import Group270 from "../images/Group270.png";
import Group272 from "../images/Group272.png";
import Group274 from "../images/Group274.png";
import Group276 from "../images/Group276.png";
import * as FaIcons from 'react-icons/fa';
import { BsEnvelopeFill } from "react-icons/bs";
import { IoLayers } from "react-icons/io5";

function Maps(props) {
    return (
        <div className="m-4 d-flex bg-white" >
            <div className="border p-4" style={{ width: "75%" }}>
                <div className="m-4">
                    <p><b>सोलुखुम्बु,  प्रदेश</b></p>

                </div>
                <div className="m-4 d-flex justify-content-between">
                    <div className="m-1">
                        <img src={nepalMap} />
                        <div className="d-flex">
                            <div className="me-1 rounded" style={{ backgroundColor: "#3CB9B5", height: 25, width: 25 }}></div>
                            <p>वडागत धार्मिक आधारमा जनसंख्या</p>
                        </div>
                        <div className="d-flex">
                            <div className="me-1 rounded" style={{ backgroundColor: "#5B9BD5", height: 25, width: 25 }}></div>
                            <p>वडागत जातजातिको आधारमा जनसंख्या</p>
                        </div>
                        <div className="d-flex ">
                            <div className="me-1 rounded" style={{ backgroundColor: "#5F95A1", height: 25, width: 25 }}></div>
                            <p>वडागत अपाङ्गताको आधारमा जनसंख्या (अपाङ्गताको प्रकारको आधारमा समेत)</p>
                        </div>
                        <div className="d-flex">
                            <div className="me-1 rounded" style={{ backgroundColor: "#FAAF40", height: 25, width: 25 }}></div>
                            <p>अपाङ्गताको परिचयपत्र आधारमा जनसंख्या विवरण</p>
                        </div>
                    </div>

                    <div className=" d-flex flex-column justify-content-between" style={{ marginBottom: "10%" }}>
                        <div className="d-flex flex-column me-4">
                            <FaIcons.FaPlus className="border rounded-top p-1 fs-3" type="button" />
                            <FaIcons.FaMinus className="border p-1 fs-3" type="button" />
                            <FaIcons.FaCompass className="border rounded-bottom p-1 fs-3" type="button" />
                        </div>
                        <div className="mt-auto pb-4 d-flex flex-column " >
                            <IoLayers className="border rounded-top p-1 fs-3" />
                            <FaIcons.FaExpandArrowsAlt className="border rounded-bottom p-1 fs-3 mb-4" type="button" />

                        </div>
                    </div>
                </div>

            </div>
            <div className="border p-4 " style={{ width: "25%" }}>
                <div className="d-flex flex-wrap col-12 border-bottom">
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group256} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>७</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">प्रदेश</p>
                        </div>
                    </div>
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group266} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>७७</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">जिल्ला</p>
                        </div>
                    </div>
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group268} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>६</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">प्र. न. प</p>
                        </div>
                    </div>
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group270} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>४६०</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">उप. म.न.प.: ११ ग.प.</p>
                        </div>
                    </div>
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group272} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>२७६</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">न. पा.</p>
                        </div>
                    </div>
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group276} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>७५३</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">जम्मा स्थान</p>
                        </div>
                    </div>
                    <div className="d-flex p-2 mb-4 col-6">
                        <img src={Group274} style={{ height: 65, width: 65 }} />
                        <div className="d-flex justify-content-center align-items-center flex-column ms-1">
                            <p className="fs-4 p-0 m-0"><b>६७४</b></p>
                            <p style={{ color: "#5C6C74" }} className="p-0 m-0">जम्मा वडा</p>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div >
                        <p className="fs-4"><b>PRO</b></p>
                        <div className="d-flex justify-content-between">
                            <div><p style={{ color: "#5C6C74" }}><FaIcons.FaGlobe /> decktm.gov.np</p></div>
                            <div><p style={{ color: "#5C6C74" }}><BsEnvelopeFill /> info@decktm.gov.np</p></div>
                        </div>
                    </div>
                    <div>
                        <p className="fs-4"><b>DISTRICT</b></p>
                        <div className="d-flex justify-content-between">
                            <div><p style={{ color: "#5C6C74" }}><FaIcons.FaGlobe /> decktm.gov.np</p></div>
                            <div><p style={{ color: "#5C6C74" }}><BsEnvelopeFill /> info@decktm.gov.np</p></div>
                        </div>
                    </div>
                    <div>
                        <p className="fs-4"><b>LG</b></p>
                        <div className="d-flex justify-content-between">
                            <div><p style={{ color: "#5C6C74" }}><FaIcons.FaGlobe /> decktm.gov.np</p></div>
                            <div><p style={{ color: "#5C6C74" }}><BsEnvelopeFill /> info@decktm.gov.np</p></div>
                        </div>
                    </div>
                </div>

            </div>

        </div >
    );
}
export default Maps;