import axios from 'axios';

const domain = 'http://192.168.0.244:8081';
const contextPath = '/mas/api';
const domainContextPath = domain + contextPath;

export function getChurchList(searchValue, page) {
    return axios.get(domainContextPath + '/churches', {
        params: {
            churchName: searchValue,
            publicTelNumber: searchValue,
            page: page
        }
    });
}