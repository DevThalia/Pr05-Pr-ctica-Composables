const URL = 'https://jsonplaceholder.typicode.com/posts';

/* Fetch a la API */
async function fetchApi() {
    try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error('Error al obtener los datos');
        return await response.json();
    } catch (e) {
        throw new Error(`Error al obtener los datos: ${e.message}`);
    }
}

/* Obtener todos los posts */
export async function listarPosts() {
    try {
        return await fetchApi(); 
    } catch (e) {
        console.error(e);
        return [];
    }
}

/* Obtener un post según su id */
export async function obtenerPost(id) {
    try {
        const response = await fetch(URL);
        const posts = await response.json();
        return posts.find(post => post.id === parseInt(id));
    } catch (e) {
        console.error("Error al obtener los datos", e);
        return null; 
    }
}
