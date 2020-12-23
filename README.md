## Clone Elderjs Template

```
npx degit Elderjs/template mintbean-elderjs
```

## Install dependencies and open editor

```
cd mintbean-elderjs
npm install
code .
```

## Terminal 1: Server

```
npm run dev:server
```

## Terminal 2: Rollup

```
npm run dev:rollup
```

## Create new route

```javascript
module.exports = {
  all: async () => [{ slug: 'new' }],
  permalink: ({ request }) => `/${request.slug}/`,
  data: async ({ request }) => {
    return {
      title: 'Mintbean!!!',
      content: `
      <h2>Hello world</h2>
      <p>Woot!</p>
      `,
    };
  },
};
```

## Create New Svelte Template

```html
<script>
  export let data, helpers;
</script>

<style>
  a {
    margin-bottom: 1rem;
    display: inline-block;
  }
</style>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<a href="/">&LeftArrow; Home</a>

<h1>{data.title}</h1>

{@html data.content}
```

## Initialize git repo

```
git init
git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ajcwebdev/ajcwebdev-elder.git
git push -u origin main
```