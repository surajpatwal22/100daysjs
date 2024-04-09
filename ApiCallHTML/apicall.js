const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
    return await commonRequest("GET", `${BASE_URL}`);
}