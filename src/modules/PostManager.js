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

export const getPostById = (postId) => {
    return fetch(`${remoteURL}/posts/${postId}`)
    .then(response => response.json())
  }

export const deletePost = (id) => {
    return fetch(`${remoteURL}/posts/${id}`, {
      method: "DELETE"
    }).then(result => result.json())
  }