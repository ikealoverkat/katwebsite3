import { env } from '$env/dynamic/private';
import { Client, GatewayIntentBits } from 'discord.js';

export const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

await client.login(env.DISCORD_TOKEN);