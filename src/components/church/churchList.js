import React from 'react';
import {Table} from 'semantic-ui-react'
import Church from 'components/church/church';

const ChurchList = (props) => {
    const churchList = props.churchList
        .map((church, index) => <Church key={index} sequence={index + 1} church={church}/>);

    return (
        <Table.Body>
            {churchList}
        </Table.Body>
    );
};

export default ChurchList;