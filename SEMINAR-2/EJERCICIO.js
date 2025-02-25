// Función principal para obtener y procesar datos
async function processUserDataAndPosts(userId) {
    try {
        // 1. Obtener datos del usuario
        const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json());
        
        // 2. Obtener posts del usuario
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(response => response.json());
            
        // 3. Obtener comentarios para cada post
        const postsWithComments = await Promise.all(
            posts.map(async post => {
                const comments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                    .then(response => response.json());
                return { ...post, comments };
            })
        );

        // MAP: Crear un array de objetos con título y número de comentarios
        // Similar al ejemplo de studentNames en 3-map.js
        const postSummaries = postsWithComments.map(post => ({
            title: post.title,
            commentCount: post.comments.length
        }));
        console.log('Resúmenes de posts:', postSummaries);

        // FILTER: Encontrar posts con más de 3 comentarios
        // Similar al ejemplo en 4-filter.js
        const popularPosts = postsWithComments.filter(post => 
            post.comments.length > 3
        );
        console.log('Posts populares:', popularPosts);

        // REDUCE: Obtener todos los comentarios organizados por post
        // Similar al ejemplo de reduce en 5-reduce.js
        const allComments = postsWithComments.reduce((commentCollection, post) => {
            commentCollection[post.title] = post.comments.map(comment => ({
                name: comment.name,
                body: comment.body
            }));
            return commentCollection;
        }, {});
        console.log('Comentarios de los posts:', allComments);

        return {
            userData: user,
            postStats: {
                summaries: postSummaries,
                popularPosts: popularPosts.length,
                comments: allComments
            }
        };
    } catch (error) {
        console.error('Error al procesar los datos:', error);
        throw error;
    }
}

// Ejemplo de uso
processUserDataAndPosts(1)
    .then(result => {
        console.log('Resultado del procesamiento:');
        console.log('Usuario:', result.userData.name);
        console.log('Estadísticas de posts:', result.postStats);
    })
    .catch(error => console.error('Error:', error));