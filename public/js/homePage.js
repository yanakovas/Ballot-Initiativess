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

document.getElementById('cards').addEventListener('click', async (event) => {
  if (event.target.classList.contains('continer')) {
    event.preventDefault();

    const removeButtonEl = event.target;

    const card = removeButtonEl.closest('.card');

    const id = Number(card.dataset.id);

    const response = await fetch(`/api/${id}`, {
      method: 'DELETE',
    });

    // проверка на ошибки
    if (response.ok) {
      card.remove();
    } else {
      const message = await response.text();
      alert(message);
    }
  }
});

document.querySelector('#for').addEventListener('click', async (event) => {
  const { value } = event.target;
  const button = event.target;
  const card = button.closest('.topicList');

  const id = Number(card.dataset.id);

  const response = await fetch('/success', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value, id }),
  });
  await response.json();
  const voteFor = document.getElementById('vote_for');
  voteFor.innerText = voteFor.value + 1;
});

document.querySelector('#against').addEventListener('click', async (event) => {
  const { value } = event.target;
  const button = event.target;
  const card = button.closest('.topicList');

  const id = Number(card.dataset.id);

  const response = await fetch('/success', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ value, id }),
  });
  await response.json();

  const voteAgainst = document.getElementById('vote_against');
  voteAgainst.innerText = voteAgainst.value + 1;
});
