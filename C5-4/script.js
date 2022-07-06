// const resultNode = document.querySelector("#result");
// const btnNode = document.querySelector("#submit_request");
const resultNode = document.getElementById("result");
const btnNode = document.getElementById("submit_request");

const min_limit = 100;
const max_limit = 300;

btnNode.addEventListener("click", () => {
  let pageWidth = parseInt(document.getElementById("page_width").value);
  let pageHeight = parseInt(document.getElementById("page_height").value);

  if (
    (pageWidth < min_limit || pageWidth > max_limit || isNaN(pageWidth)) ||
    (pageHeight < min_limit || pageHeight > max_limit || isNaN(pageHeight))
  ) {
    resultNode.innerHTML = `<em>Одно из чисел вне диапазона от ${min_limit} до ${max_limit}</em>`;
  } else {
    const url = `https://picsum.photos/${pageWidth}/${pageHeight}`
    fetch(url)
    .then(response => response.blob())
    .then(imageBlob => {
        // Then create a local URL for that image and print it 
        const imageObjectURL = URL.createObjectURL(imageBlob);
        resultNode.innerHTML = `<img src=${imageObjectURL}>`
    });        
  }
});
