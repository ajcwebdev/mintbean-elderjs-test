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
