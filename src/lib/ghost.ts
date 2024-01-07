import fs from 'node:fs/promises';

const url = new URL('./dominik-piatek.ghost.2015-09-22.json', import.meta.url);
const blogData = await fs.readFile(url, 'utf-8');
const posts = JSON.parse(blogData)["db"][0].data.posts;
export { posts };