export const API_URL = "https://rickandmortyapi.com";

export const fetchData = (
    url = "",
    options = {
        method: 'GET', // GET, POST, PUT, DELETE
        // body: JSON.stringify(data), // POST, PUT
        headers: {
            'Content-Type': 'application/json'
        }
    }
) => {
    return fetch(url, options)
}
