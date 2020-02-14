const button = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const wrapper = document.querySelector('.info-wrapper')


let people = new Array(3)

function startLoading() {

  let loading = document.createElement('p')
  loading.id = "js-loading"
  loading.textContent = 'Loading...'
  document.body.appendChild(loading)
  button.className = ('hide')
  button2.className = ('hide')
  button3.className = ('hide')
}

function stopLoading() {
  const loading = document.querySelector("#js-loading")
  loading.remove()
  button.className = ""
  button2.className = ""
  button3.className = ""
}

startLoading()
const luke = 'https://swapi.co/api/people/'
fetch(luke)
  .then(data => data.json())
  .then(data => {
    stopLoading()
    for (i = 0; i < 3; i++) {
      console.log(data);
      people[i] = `<ul>
      <li>Name: ${data.results[i].name}</li>
      <li>Height: ${data.results[i].height} cm</li>
      <li>Mass: ${data.results[i].mass} kgs</li>
      <li>Hair Color: ${data.results[i].hair_color}</li>
      <li>Skin Color: ${data.results[i].skin_color}</li>
  </ul>`
    }

    button.addEventListener('click', () => {
      wrapper.innerHTML = people[0]

    });

    button2.addEventListener('click', () => {
      wrapper.innerHTML = people[1]

    });

    button3.addEventListener('click', () => {
      wrapper.innerHTML = people[2]
    });

  });