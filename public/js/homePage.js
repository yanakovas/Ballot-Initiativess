document.querySelector('#level').addEventListener('change', async (event) => {
  const { value } = event.target;
  const response = await fetch('/filter/valueLevel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  await response.json();
});

document.querySelector('#section').addEventListener('change', async (event) => {
  const { value } = event.target;
  const response = await fetch('/filter/valueSection', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  await response.json();
});

document.querySelector('#status').addEventListener('change', async (event) => {
  const { value } = event.target;
  const response = await fetch('/filter/valueStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value }),
  });
  await response.json();
});
