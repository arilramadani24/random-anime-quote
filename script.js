// Fetch => sebuah method pada API javascript untuk mengambil resources dari jaringan, dan mengembalikan promise yang selesai (fullfield) ketika ada response yang tersedia
const search = document.querySelector(".search-keyword");
const btn = document.querySelector("search-button");

search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    searchAnime();
  }
});

function searchAnime() {
  fetch(`https://animechan.vercel.app/api/quotes/anime?title=${search.value}`)
    .then((response) => response.json())
    .catch((response) => console.log(response))
    .then((response) => {
      const animeList = document.querySelector(".anime-list");
      let list = "";
      response.forEach((a) => {
        list += showList(a);
      });
      animeList.innerHTML = list;
    });
  search.value = "";
}

function randomAnime() {
  fetch("https://animechan.vercel.app/api/random")
    .then((response) => response.json())
    .then((quote) => {
      const animeList = document.querySelector(".anime-list");
      let list = "";
      list += showList(quote);
      animeList.innerHTML = list;
    });
  search.value = "";
}

function showList(a) {
  return `
  <table class="table-sm my-3">
  <tbody>
    <tr>
      <th scope="row"><h4>Anime</h4></th>
      <th scope="row">:</th>
      <th scope="row" class="fs-4 fw-normal">${a.anime}</th>
    </tr>
    <tr>
      <th scope="row"><h4>Character</h4></th>
      <th scope="row">:</th>
      <th scope="row" class="fs-4 fw-normal">${a.character}</th>
    </tr>
    <tr>
      <th scope="row"><h4>Quote</h4></th>
      <th scope="row">:</th>
      <td scope="col" class="d-flex">
        <p
          class="fs-5 fw-semibold text-center align-items-center mt-3 fst-italic"
        >
        "${a.quote}"
        </p>
      </td>
    </tr>
  </tbody>
</table>
<hr />
    `;
}

function showError() {
  return `
    <h2 class="text-center">Anime Not Found</h2>
    <h2 class="text-center">T_T</h2>
    `;
}
