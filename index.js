const dogImage = document.getElementById('dog-image');
const newDogBtn = document.getElementById('new-dog-btn');

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      dogImage.src = data.message;
    })
    .catch(error => {
      console.error('Error fetching dog image:', error);
    });
}

newDogBtn.addEventListener('click', getRandomDog);

getRandomDog();