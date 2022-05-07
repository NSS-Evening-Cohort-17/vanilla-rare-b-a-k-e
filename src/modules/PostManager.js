// const remoteURL = "http://localhost:8088"

export const addPost = (newPost) => {
    return fetch("http://127.0.0.1:8088/createpost", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(response => response.json())
}