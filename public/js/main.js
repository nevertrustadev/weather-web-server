const weatherForm = document.querySelector('form');
const searchInput = document.getElementById('search');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
	e.preventDefault();

	const location = searchInput.value;
	messageOne.textContent = 'finding results...';
	messageTwo.textContent = '';

	fetch('/weather?address=' + location).then((response) => {
		response.json().then((data) => {
			if (data.error) {
				messageOne.textContent = data.error;
			} else {
				messageOne.textContent = data.address;
				messageTwo.textContent = data.forecast;
			}
		})
	});
});