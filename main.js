let residentBtn = document.querySelector('button')
let body = document.querySelector('body')

const buttonClicked = () => {
    console.log('Button Clicked')

    axios.get(`https://swapi.dev/api/planets/?search=Alderaan/`)
        .then((res) => {
            for (let i =0; i < res.data.results[0].residents.length; i++) {
                axios.get(res.data.results[0].resdients[1])
                    .then(res => {
                        let name = res.data.name
                        let resident = document.createElement('h2')
                        resident.textContent = name
                        body.appendChild(resident)
                    })
            }
        })
}  

residentBtn.addEventListener('click', buttonClicked);