import React from 'react';
import {Icon, Menu} from 'semantic-ui-react'

const pageUICount = 5;
const Pagination = (props) => {
    let sideUICount = (pageUICount - 1) / 2;
    let currentPage = props.page <= 0 ? 1 : props.page;
    let maxUIPage = Math.ceil(props.count / props.perPage);

    let firstUIPage = currentPage - sideUICount <= 0 ? 1 : currentPage - sideUICount;

    let pageUIs = Array(pageUICount).fill(firstUIPage)
        .map((x, y) => x + y)
        .map((page) => {
            return (
                <Menu.Item
                    active={page === currentPage}
                    onClick={() => {props.onPageClick(page);}}
                    key={page} as='a' >
                    {page}
                    </Menu.Item>
            );
        });

    console.log(props);

    return (
        <Menu floated='right' pagination>
            <Menu.Item onClick={() => {props.onPageClick(firstUIPage-1);}} as='a' icon>
                <Icon name='chevron left'/>
            </Menu.Item>
            {pageUIs}
            <Menu.Item onClick={() => {props.onPageClick(firstUIPage + pageUICount);}} as='a' icon>
                <Icon name='chevron right'/>
            </Menu.Item>
        </Menu>
    );
};

export default Pagination;