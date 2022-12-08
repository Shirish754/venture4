import React from "react";
import Photos from "../images/Photo.png"

function PHolders(props) {
    return (
        <div className=" px-4 py-2 bg-white m-4">
            <p className="fs-4 mt-4"><b>वडागत पदाधिकारी</b></p>
            <div className="col-12 bg-white d-flex flex-wrap justify-content-between mb-4" type="button">

                {Array.from({ length: 5 }).map((_, index) => (
                    <div className=" col-2 border d-flex flex-column align-items-center p-4 m-2 ">
                        <img className="d-flex justify-content-center align-items-center m-4" src={Photos} style={{ maxHeight: 120, maxWidth: 120, objectFit: "cover" }} />
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p className="" styles={{ padding: 0, margin: 0 }}><b>वडागत पदाधिकारी</b></p>
                            <p styles={{ padding: 0, margin: 0, color: "#5C6C74" }}>वडा अद्धक्च्या</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
export default PHolders;