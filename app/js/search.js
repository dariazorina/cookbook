const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearButton");

if (searchInput) {
  searchInput.addEventListener("input", function () {

    if (this.value.length > 0) {
      clearButton.style.display = "block";
    } else {
      clearButton.style.display = "none";
    }
  });

  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') { 
      event.preventDefault(); 
    //   console.log('Enter key pressed! Searching for:', this.value);     
      search(this.value); 
    }
  });

  function search(query) {
    console.log(`Performing search for: ${query}`);
   //our logic here
  }
}


if (clearButton) {
  clearButton.addEventListener("click", function () {
    
    searchInput.value = "";
    searchInput.focus();
    clearButton.style.display = "none";
  });
}