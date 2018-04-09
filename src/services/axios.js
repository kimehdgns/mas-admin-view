import axios from 'axios';

const domain = 'http://localhost:8080';
const contextPath = '/mas/api';
const domainContextPath = domain + contextPath;

export function getChurchList(searchValue) {
    return axios.get(domainContextPath + '/churches', {
        params: {
            churchName: searchValue,
            publicTelNumber: searchValue,
            page: 1
        }
    });
}