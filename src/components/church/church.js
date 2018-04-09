import React from 'react';
import {Label, Table} from 'semantic-ui-react'
import ServiceModal from 'components/modals/serviceModal';

const Church = (props) => {
    return (
        <Table.Row>
            <Table.Cell>{props.sequence}</Table.Cell>
            <Table.Cell>{props.church.churchCode}</Table.Cell>
            <Table.Cell>{props.church.churchName}</Table.Cell>
            <Table.Cell>{props.church.publicTelNumber}</Table.Cell>
            <Table.Cell>{props.church.publicEmail}</Table.Cell>
            <Table.Cell>
                <ServiceList services={props.church.usingServiceList} churchCode={props.church.churchCode}/>
            </Table.Cell>
        </Table.Row>
    );
};

const ServiceList = (props) => {
    const serviceList = props.services.map((service, index) => {
        const color = colorMap[service.serviceCode];
        return (
            <Label key={index} color={color}>{service.serviceName}</Label>
        )
    })

    return (
        <div>
            {serviceList}
            <ServiceModal churchCode={props.churchcode}/>
        </div>
    );
};

const colorMap = {
    MASPLA : "red",
    MASCAR : "orange",
    MASCRT : "olive",
    MASDON : "purple",
    MASCRA : "teal"
}

export default Church;