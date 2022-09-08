import {getDirectusClient} from "../directus/index.js";

export async function load() {
    const directus = await getDirectusClient()
    let topPosts = []

    try {
        const cms = directus.items('hugin_roadmap').readByQuery({
            fields: ['*'],
            sort: '-date_created',
            filter: {
                featured: {
                    "_eq": true,
                },
            },
            limit: 6,
        })

        const res = await fetch("https://api.hugin.chat/api/v2/statistics/posts/popular")
        let posts = await res.json() ?? []
        console.log(posts)

        posts = posts.items.slice(0, 3)

        for (const entry of posts) {
            const res =  await fetch(`https://api.hugin.chat/api/v2/posts/${entry.post}`)
            const post = await res.json()
            topPosts.push(post)
        }

        console.log(topPosts)

        return {cms, topPosts}

    } catch (error) {
        console.log(error)
    }

}