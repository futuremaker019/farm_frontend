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
        }).then((response) => {
            return response.json();
        }).catch((error) => {
            console.log(error);
        });
    },
    create: (url, body, files) => {
        const formData = new FormData();
        files.forEach(file => formData.append("attachments", file))
        formData.append("dto", new Blob([JSON.stringify(body)], {type: "application/json"}))
        try {
            return fetch(`${process.env.REACT_APP_SERVER_HOST}/${url}`, {
                method: 'POST',
                mode: 'cors',
                body: formData
            }).then(response => {
                return response.json();
            })
        } catch (e) {
            new Error(e);
        }
    },
    download: (url) => {
        return fetch(`${process.env.REACT_APP_SERVER_HOST}/${url}`, {
            method: 'GET',
            mode: 'cors',
        }).then(response => {
            if (response.ok) {
                return response.blob();
            }
        }).catch(error => {
            console.error(`error:  ${error}`);
            throw error;
        })
    }
}

/**
 *  fetch 예시
 */
// fetch(`${process.env.REACT_APP_SERVER_HOST}/user/signin`, {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   mode: 'cors',
//   body: JSON.stringify({
//     email: emailValue,
//     password: pwValue,
//   }),
// })