# woah a personal website
hi, im kat! this is my latest personal website! cool!!

check it out at [kat.wang](https://kat.wang) (what a nice domain)

it has:
- some static pages
- you can send messages to me! check out the landing page! (i made a discord client using discord.js that lets my discord bot send me DMs of the messages people submit.)
- blog (parses markdown using gray-matter for frontmatter and mdsvex for the rest of it)

yay!

- made wiith sveltekit (typescript) & tailwind css
- deployed on vercel

---

## commands

| command | action |
|--------|----------|
| `npm i` | installs dependencies |
| `npm run dev` | starts dev server at `localhost:5173`|
| `npm run build` | builds the production site |
| `npm run preview` | preview the build locally before deploying |

---

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.16.4 create --template minimal --types ts --add prettier tailwindcss="plugins:typography" --install npm katwebsite3
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
