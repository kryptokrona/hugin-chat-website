import {getDirectusClient} from "../../directus/index.js";

export async function load() {
    const directus = await getDirectusClient()
    try {
        return directus.items('hugin_roadmap').readByQuery({
            fields: ['*'],
            sort: '-date_created',
        })
    } catch (error) {
        console.log(error)
    }
}