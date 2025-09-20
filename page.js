(() => {
  const API_URL = "https://restcountries.com/v3.1/region/europe";
  const PAGE_SIZE = 10

  // DOM elements
  const countriesContainer = document.getElementById("countriesContainer")
  const searchInput = document.getElementById("searchInput")
  const sortSelect = document.getElementById("sortSelect")
  const prevBtn = document.getElementById("prevBtn")
  const nextBtn = document.getElementById("nextBtn")
  const pageInfo = document.getElementById("pageInfo")
  const summaryCount = document.getElementById("summaryCount")
  const summaryPopulation = document.getElementById("summaryPopulation")

  // State
  let allCountries = []
  let filtered = []
  let currentPage = 1

  // Fetch countries
  async function fetchCountries() {
    const res = await fetch(API_URL)
    const data = await res.json()
    allCountries = data.map(c => ({
      name: c.name.common,
      population: c.population,
      capital: c.capital ? c.capital[0] : "—",
      flag: c.flags.svg
    }));
    filtered = [...allCountries]
    render();
  }

  // Render countries
  function render() {
    const start = (currentPage - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(start, start + PAGE_SIZE);

    countriesContainer.innerHTML = pageItems.map(c => `
      <div class="country-card">
        <div class="flag-wrap"><img src="${c.flag}" alt="Flag of ${c.name}" loading="lazy"></div>
        <div class="country-info">
          <h3>${c.name}</h3>
          <p><strong>Population:</strong> ${c.population.toLocaleString()}</p>
          <p><strong>Capital:</strong> ${c.capital}</p>
        </div>
      </div>
    `).join("");

 
    summaryCount.textContent = pageItems.length;
    summaryPopulation.textContent = pageItems.reduce((sum, c) => sum + c.population, 0).toLocaleString();

    // Pagination
    const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
  }

 
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    filtered = allCountries.filter(c => c.name.toLowerCase().includes(term));
    currentPage = 1;
    render();
  });

  sortSelect.addEventListener("change", () => {
    if (sortSelect.value === "name-asc") filtered.sort((a, b) => a.name.localeCompare(b.name));
    if (sortSelect.value === "name-desc") filtered.sort((a, b) => b.name.localeCompare(a.name));
    if (sortSelect.value === "pop-asc") filtered.sort((a, b) => a.population - b.population);
    if (sortSelect.value === "pop-desc") filtered.sort((a, b) => b.population - a.population);
    render()
  });

  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) { currentPage--; render(); }
  })

  nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(filtered.length / PAGE_SIZE)) { currentPage++; render(); }
  })
  fetchCountries();
})();
