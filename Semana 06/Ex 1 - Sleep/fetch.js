const cadastrarPost = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    const data = await result.json();
    console.log(data);
};
cadastrarPost();