import viewPosts from '../views/posts.html'

const getPosts = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts')
   return await response.json()
}

export default async () => {

    const divElements = document.createElement('div');
    divElements.innerHTML = viewPosts;  

    const posts = await getPosts()
    let postsList = divElements.querySelector('#posts')

    posts.map(e => {
        postsList.innerHTML+=` 
       <li>
           <h5>${e.title}</h5>
           <p>${e.body}</p>
       </li>
       `
    })

   
    console.log(posts);

    return divElements;
}