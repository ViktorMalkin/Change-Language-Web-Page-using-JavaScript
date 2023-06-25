const langSec = document.querySelector(".languagesection");
const buttons = document.querySelectorAll('a');
const textTitle = document.querySelector(".title");
const textDesc = document.querySelector(".description");

buttons.forEach(button => {
	button.addEventListener('click', () => {
		langSec.querySelector('.active').classList.remove('active');
		button.classList.add('active');

		const attr = button.getAttribute('language');

		textTitle.textContent = data[attr].title;
		textDesc.textContent = data[attr].description;
	});
});


const data = { 
	"english":
	{
		"title": "Hello World",
		"description": "Hy guys, I'm Viktor and i'm from Ukrain"
	},
	"spanish":
	{
		"title": "Hola Mundo",
		"description": "Hola chicos, soy Viktor y soy de Ucrania."
	},
	"ukrainian":
	{
		"title": "Привіт Світ",
		"description": "Привіт хлопці, я Віктор і я з України."
	},
	"rusian":
	{
		"title": "Привет Мир",
		"description": "Привет ребята, я Виктор я из Украины."
	},
}
