import { json } from "@sveltejs/kit";
import {client } from '$lib/server/discord';
import { env } from "$env/dynamic/private";

export async function POST({ request }) {
    const { message, preset } = await request.json();

    const user = await client.users.fetch(env.DISCORD_USER_ID);
    
    await user.send(`
        💌 hi kat! you have mail! :)
        ${preset ? `someone clicked a message button: ${preset}` : `someone's written you a message: ${message}` }
        `);

        return json({success: true});
}