import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
import { FaIcons } from "react-icons/fa";
import APagination from "./Pagination";

function Tables(props) {
    return (
        <div className=" m-4 p-4">
            <p className="fs-4"><b>दस्ताबेजहरु</b></p>
            <div>
                <Dropdown >
                    <div className="d-flex justify-content-between col-12 m-1">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-2 m-2" >
                            प्रदेश
                        </Dropdown.Toggle>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-2 m-2">
                            जिल्ला
                        </Dropdown.Toggle>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-2 m-2">
                            स्थान
                        </Dropdown.Toggle>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="col-2 m-2">
                            वडा
                        </Dropdown.Toggle>
                        <input placeholder=" सर्च" variant="light" id="dropdown-basic" className="col-2 m-2" />
                    </div>
                </Dropdown>
            </div>

            <div className="bg-white p-4">
                <div className="d-flex justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                        <input type="number" placeholder="0" style={{ width: "50px" }} />
                        <p className="pt-3 ms-2" style={{ color: "#5C6C74" }}> वटा मात्र देखाउनुहोस्</p>
                    </div>
                    <div className="">
                        <button className="btn me-2" style={{ backgroundColor: "#50B0CB", color: "white" }}>Filter</button>
                        <button className="btn" style={{ backgroundColor: "#BAC97D", color: "white" }}>+ Add New</button>
                    </div>

                </div>
            </div>

            <div className="bg-white p-4">
                <Table responsive="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th> स्थानीय तहको नाम</th>
                            <th> जिल्ला</th>
                            <th>स्थानीय तहको प्रकार</th>
                            <th>प्रदेश</th>
                            <th>वेवसाईट</th>
                            <th>कैफियत</th>
                        </tr>
                    </thead>
                    {Array.from({ length: 7 }).map((_, index) => (
                        <tbody>
                            <tr>
                                <td>{index + 1}</td>
                                <td>आठराई त्रिवेणी गाउँपालिका</td>
                                <td>ताप्लेजुङ</td>
                                <td>नगरपालिका</td>
                                <td>प्रदेश नम्बर १</td>
                                <td>Delivered</td>
                                <td>तयार</td>
                            </tr>
                        </tbody>

                    ))}

                </Table>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-4">
                <APagination />
            </div>

        </div>
    );
}
export default Tables;