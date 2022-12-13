import React, { useState, useEffect } from "react";
import Photos from "../images/Photo.png"
import { baseUrl } from "../baseUrl";

function PHolders(props) {

    const [users, setUsers] = useState([]);


    const fetchDummyAPI = async () => {
        await fetch(baseUrl + 'users')
            .then((res) => res.json())
            .then((res) => {
                setUsers(res);
                console.log(res);
            })
            .catch((e) => alert("Something went wrong"))
    }

    useEffect(() => {
        fetchDummyAPI();
    }, [])

    return (
        <div className=" px-4 py-2 bg-white m-4">
            <p className="fs-4 mt-4"><b>वडागत पदाधिकारी</b></p>
            <div className="col-12 bg-white d-flex flex-wrap justify-content-between mb-4" type="button">

                {users?.map((user, index) => (
                    <div className=" col-2 border d-flex flex-column align-items-center p-4 m-2 " key={index}>
                        <img className="d-flex justify-content-center align-items-center m-4" src={Photos} style={{ maxHeight: 120, maxWidth: 120, objectFit: "cover" }} />
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p className="" styles={{ padding: 0, margin: 0 }}><b>{user.email}</b></p>
                            <p styles={{ padding: 0, margin: 0, color: "#5C6C74" }}>{user.name}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
export default PHolders;