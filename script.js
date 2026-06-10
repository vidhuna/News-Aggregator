console.log("JavaScript Working");

fetch("https://newsdata.io/api/1/latest?apikey=pub_71a8fea42bce47138772756ebcdaea12&country=in&language=en,ta")
  .then(response => response.json())
  .then(data => {
    console.log(data);

    const card = document.querySelector(".card");

    if (data.results && data.results.length > 0) {
      card.innerHTML = `
        <h3>${data.results[0].title}</h3>
        <p>${data.results[0].description || "No description available"}</p>
      `;
    }
  })
  .catch(error => {
    console.log("Error:", error);
  });
  const searchInput = document.querySelector('input');

searchInput.addEventListener('keyup', () => {
    const searchText = searchInput.value.toLowerCase();

    const card = document.querySelector('.card');

    if (card.innerText.toLowerCase().includes(searchText)) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {

    const query = searchInput.value;

    fetch(`https://newsdata.io/api/1/latest?apikey=pub_71a8fea42bce47138772756ebcdaea12&q=${query}&language=en,ta`)
      .then(response => response.json())
      .then(data => {

        const card = document.querySelector(".card");

        if (data.results && data.results.length > 0) {
          card.innerHTML = `
            <h3>${data.results[0].title}</h3>
            <p>${data.results[0].description || "No description available"}</p>
          `;
        } else {
          card.innerHTML = "<h3>No news found</h3>";
        }
      })
      .catch(error => {
        console.log("Error:", error);
      });
  }
});