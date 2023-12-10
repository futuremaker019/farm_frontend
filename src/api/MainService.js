export const Server = {
    get: (url) => {
        return fetch(`${process.env.REACT_APP_SERVER_HOST}/${url}`, {
            method: 'GET',
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("error occurred!");
            }
        }).catch((error) => {
            console.log(error);
        })
    },
    post: (url, body) => {
        fetch(`${process.env.REACT_APP_SERVER_HOST}/${url}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify(body),
        }).then(async (response) => {
            return await response.json();
        }).catch((error) => {
            console.log(error);
        });
    }
}