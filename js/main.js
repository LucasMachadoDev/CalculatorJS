const btn = document.querySelectorAll('.btn'),
        operators = document.querySelectorAll('.btn--operetors'),
        visor = document.querySelector('#visor');

operators.forEach((index, value) => {
    index.addEventListener('click', () => {

        switch (index.innerHTML) {
            case 'c':
                visor.innerHTML = '';
                break;
            case '=':
                var operantion = visor.innerHTML;
				
				if(operantion){
					try {
						visor.innerHTML = eval(operantion);
					} catch (e) {
						alert(e);
					} 
				}
				break;

            default:
                visor.innerHTML += index.innerHTML;
                break;
        }
    })
})

for (let i = 0; i < btn.length; i++) {
    const element = btn[i];
    element.addEventListener('click', () => {
        visor.innerHTML += btn[i].innerHTML
    })
}