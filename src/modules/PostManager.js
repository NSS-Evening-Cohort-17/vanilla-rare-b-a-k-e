const remoteURL = "http://localhost:8088"

export const addPost = (newPost) => {
    return fetch(`${remoteURL}/createpost`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newPost)
    }).then(response => response.json())
}

export const getAllPosts = () => {
    return fetch(`${remoteURL}/posts`)
    .then(response => response.json())
}

export const getSinglePost = (id) => {
    return fetch(`${remoteURL}/posts/${id}`)
    .then(response => response.json())
}

export const updatePost = (post) => {
    return fetch(`${remoteURL}/posts/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
        .then(getAllPosts)
}