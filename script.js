const API_KEY = 'YOUR_UNSPLASH_API_KEY';
const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const imageContainer = document.getElementById('image-container');

searchButton.addEventListener('click', function () {
    const query = searchInput.value;
    fetchImages(query);
});

function fetchImages(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${API_KEY}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayImages(data.results);
        })
        .catch(error => {
            console.error('Error fetching images:', error);
        });
}

function displayImages(images) {
    imageContainer.innerHTML = '';
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('image');
        imgElement.src = image.urls.small;
        imageContainer.appendChild(imgElement);
    });
}
