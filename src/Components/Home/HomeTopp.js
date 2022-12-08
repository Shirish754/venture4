import React from "react";
import NavBar from "./Navbar";
import logo from "../images/logo.png"
import Dropdown from 'react-bootstrap/Dropdown';



function HomeTop(props) {
    return (
        <div className="bg-white shadow p-4">
            <div className="d-flex flex-wrap col">
                <div className="col-2 me-4">
                    <img src={logo} styles={{}} />
                </div>
                <div className="col-2">
                    <p className="text-decoration-none text-dark"  ><b style={{ fontSize: 27 }}>cmis.mofoga.gov.np</b></p>
                </div>
                <div className="col-4 d-flex justify-content-center">
                    <NavBar />
                </div>

                <div className="d-flex col-3 d-flex justify-content-end ">
                    <input placeholder="सर्च" className="form-control m-1" style={{ maxHeight: 40, maxWidth: 239 }} />
                    <button className="btn btn-primary m-1" style={{ maxHeight: 42, maxWidth: 107 }}>लग इन </button>
                </div>
            </div>

            <div>
                <Dropdown >
                    <div className="d-flex col m-4">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-3 m-1" >
                            छान्नुहोश
                        </Dropdown.Toggle>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-3 m-1">
                            छान्नुहोश
                        </Dropdown.Toggle>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-3 m-1">
                            छान्नुहोश
                        </Dropdown.Toggle>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-3 m-1">
                            छान्नुहोश
                        </Dropdown.Toggle>
                    </div>


                </Dropdown>

            </div>

        </div>
    );
}
export default HomeTop;