function navigate(selectedValue) {
  if (selectedValue) {
    window.location.href = selectedValue;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function searchSpecificElements(query) {
    const elements = document.querySelectorAll("a, h1, h2, h3, p, span");
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = "";
    let hasResults = false; // Initialize a flag to track if there are results

    elements.forEach((element) => {
      if (element.innerText.toLowerCase().includes(query.toLowerCase())) {
        const result = document.createElement("div");
        result.className = "search-result";
        result.innerText = element.innerText.trim();
        result.addEventListener("click", function () {
          const url = element.getAttribute("href");
          if (url) {
            window.location.href = url;
          }
        });
        resultsContainer.appendChild(result);
        hasResults = true; // Set the flag to true when there's a result
      }
    });

    if (hasResults) {
      resultsContainer.style.display = "block"; // Show the container if there are results
    } else {
      resultsContainer.style.display = "none"; // Hide the container if there are no results
    }
  }

  const form = document.getElementById("form1");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = document.getElementById("searchInput").value;
    searchSpecificElements(query);
  });

  const mainContent = document.querySelector("main");
  const searchResults = document.createElement("div");
  searchResults.id = "searchResults";
  searchResults.style.marginTop = "20px";
  searchResults.style.padding = "10px";
  searchResults.style.border = "1px solid #ccc";
  searchResults.style.borderRadius = "5px";
  searchResults.style.backgroundColor = "#f9f9f9";
  searchResults.style.display = "none"; // Initially hide the container
  mainContent.appendChild(searchResults);

  // Hide the search results container when clicking outside of it
  document.addEventListener("click", function (event) {
    const isClickInsideSearchResults = searchResults.contains(event.target);
    const isClickOnLink = event.target.closest("a");

    if (!isClickInsideSearchResults && !isClickOnLink) {
      searchResults.style.display = "none";
    }
  });
});
