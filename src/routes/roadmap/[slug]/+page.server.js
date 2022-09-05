import {getDirectusClient} from "../../../directus/index.js";


export async function load({params}) {
    const directus = await getDirectusClient()
    try {
        return await directus.items(`hugin_roadmap`).readOne(params.slug, {
            fields: ['*'],
        })
    } catch (error) {
        console.log(error)
    }
}