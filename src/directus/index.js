import { Directus } from '@directus/sdk';
import * as dotenv from 'dotenv'
dotenv.config()

const directus = new Directus(process.env.VITE_DIRECTUS_URL);

async function getDirectusClient() {
    try {
        if (process.env.DIRECTUS_STATIC_TOKEN) {
            await directus.auth.static(process.env.DIRECTUS_STATIC_TOKEN);
        }
    } catch (err) {
        if (err.parent.code === 'ECONNREFUSED') {
            console.error(
                'Unable to connect to the Directus instance. Make sure the .env file is present and the VITE_DIRECTUS_URL variable is pointing the correct URL.'
            );
        }
    }
    return directus;
}

export { getDirectusClient }