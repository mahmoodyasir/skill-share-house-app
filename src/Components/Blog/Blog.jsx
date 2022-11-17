import React from 'react';
import AccordionItem from "./AccordianItem";
import {useLoaderData} from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import './Blog.css'

const Blog = () => {

    const blog = useLoaderData();


    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5 display-6 text-bg">Blog Section</h2>
            <div className="d-flex justify-content-center">
                <Accordion className="w-50" defaultActiveKey={1}>
                    {
                        blog?.map((item) => (
                            <AccordionItem
                                key={item?._id}
                                props={item}
                            />
                        ))
                    }
                </Accordion>
            </div>
        </div>
    );
};

export default Blog;
