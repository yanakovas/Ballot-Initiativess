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
  if (event.target.classList.contains('remove-note')) {
    event.preventDefault();

    // Сама кнопка лежит в event.target
    const removeButtonEl = event.target;
    // Находим ближайшего родителя с классом .note
    const note = removeButtonEl.closest('.note');
    // В dataset лежат все данные, которые мы прописали в data-атрибуты
    const id = Number(note.dataset.id);

    const response = await fetch(`/api/notes/${id}`, {
      method: 'DELETE',
    });

    // проверка на ошибки
    if (response.ok) {
      note.remove();
    } else {
      const message = await response.text();
      alert(message);
    }
  }
});
