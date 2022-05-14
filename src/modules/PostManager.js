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
    .then(res => res.json())
}

export const getPostsByUser = (userId) => {
    return fetch(`${remoteURL}/my-posts?user_id=${userId}`)
    .then(res => res.json())
    
}

export const getPostById = (id) => {
    return fetch(`${remoteURL}/posts/${id}`)
    .then(res => res.json())
    
}
