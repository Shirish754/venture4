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
                <div className="d-flex justify-content-between col m-4 ">

                    <Dropdown className="col-3 me-2 mt-2" >
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-12"  >
                            छान्नुहोश0
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action0</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action0</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else0</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                    <Dropdown className="col-3 m-2">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-12">
                            छान्नुहोश1
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action1</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else1</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>


                    <Dropdown className="col-3 m-2">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-12">
                            छान्नुहोश2
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action2</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else2</Dropdown.Item>
                        </Dropdown.Menu>

                    </Dropdown>


                    <Dropdown className="col-3 m-2 ">

                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-12">
                            छान्नुहोश3
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action3</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action3</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </div>
            </div>

        </div >
    );
}
export default HomeTop;