import React, {useContext, useState} from 'react';
import {AuthContext} from "../../Contexts/AuthProvider";
import Axios from "axios";
import {domain} from "../../rootdomain";
import toast from "react-hot-toast";

const AddServices = () => {

    const {user, setUser} = useContext(AuthContext);

    const [service_name, setService_name] = useState(null);
    const [img_url, setImg_url] = useState(null);
    const [price, setPrice] = useState(null);
    const [desc, setDesc] = useState(null);

    const handleSubmit = async () => {

        if (service_name === null || img_url === null || price === null || desc === null) {
            toast.error("Please Provide Valid information !! ");
        } else {
            console.log(service_name, img_url, price, desc)
            const date = new Date()

            const s_data = {
                service_name: service_name,
                imageurl: img_url,
                service_provider: user?.displayName,
                profile_img: user?.photoURL,
                price: price,
                description: desc,
                date: date
            }

            await Axios({
                method: "post",
                url: `${domain}/services`,
                data: s_data
            }).then(response => {
                console.log(response);
                toast.success("Services added successfully !! ");
            })
        }

    }

    return (
        <div className="container mt-5 w-25">

            <div className="card border border-0 shadow">
                <div className="card-body">
                    <div className="form-group my-3">
                        <label>Service Name:</label>
                        <input onChange={(e) => setService_name(e.target.value)} type="text" className="form-control"
                               placeholder="Write service name" required/>
                    </div>

                    <div className="form-group my-3">
                        <label>Service Image URL:</label>
                        <input onChange={(e) => setImg_url(e.target.value)} type="text" className="form-control"
                               placeholder="Put image URL of service" required/>
                    </div>

                    <div className="form-group my-3">
                        <label>Price:</label>
                        <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control"
                               placeholder="Input price" required/>
                    </div>

                    <div className="form-group my-3">
                        <label>Description:</label>
                        <textarea onChange={(e) => setDesc(e.target.value)} type="text" className="form-control"
                                  placeholder="Provide description" required/>
                    </div>

                    <button onClick={handleSubmit} type="submit" className="btn btn-outline-primary">Submit</button>
                </div>
            </div>

        </div>
    );
};

export default AddServices;
