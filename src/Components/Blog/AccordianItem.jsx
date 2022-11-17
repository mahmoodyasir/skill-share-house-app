import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import './Blog.css'

const AccordionItem = ({props}) => {
    console.log(props?.title)
    return (
        <Accordion.Item className="shadow border border-0 accordian-control-bg" eventKey={props?._id}>
            <Accordion.Header className="acc-header">{props?.title}</Accordion.Header>
            <Accordion.Body className="shadow body-bg-accord">
                <p>{props?.ans}</p>
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default AccordionItem;
