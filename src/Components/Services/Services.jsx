import React from 'react';
import {Col} from "react-bootstrap";
import {useLoaderData} from "react-router-dom";
import SingleService from "./SingleService";
import useTitle from "../../Hooks/useTitle";

const Services = () => {
    useTitle("Services")

    const all_services = useLoaderData();

    return (
        <div className="container mt-5">
            <Col className="row">
                {
                    all_services?.map((item) => (
                        <div key={item?._id} className="col-md-6 col-lg-4">
                            <SingleService
                                data={item}
                            />
                        </div>
                    ))
                }
            </Col>
        </div>
    );
};

export default Services;
