export default function list(persons) {
    
	const ulElement = document.getElementById('events');
	
	persons.forEach(person => {
		renderList(person);
	});

	function renderList(person) {
		const liElement = document.createElement('li');
		liElement.textContent = `
		${person.name.first} 
		${person.name.last}
		`;
		ulElement.appendChild(liElement);
	};
};
