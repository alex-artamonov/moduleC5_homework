const resultNode = window.document.querySelector('#result');
const btnNode = window.document.querySelector('#submit_nbr');

function isInteger(str) {
  if (typeof str != "string") return false
  return !isNaN(str) && !isNaN(parseInt(str)) 
};

function useRequest(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);  
  xhr.onload = function() {
    if (xhr.status != 200) {
      console.log('Статус ответа: ', xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      // console.log(result)
      if (callback) {
        callback(result);
      }
    }
  };  
  xhr.onerror = function() {
    console.log('Ошибка! Статус ответа: ', xhr.status);
    alert("Проверьте адрес\n" + url)
  };  
  xhr.send();
};

function displayResult(apiData) {
  let cards = ''; 
  apiData.forEach(item => {
    let cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>&copy; ${item.author}</p>
        <a href=${item.url} target='_blank
'>Ссылка</a>
      </div>
    `;
    cards = cards + cardBlock;
  });    
  resultNode.innerHTML = cards;
  // console.log(cards)
}

btnNode.addEventListener('click', () => {
  // let value = document.querySelector('input').value
  let value = document.querySelector('.enter_nbr').value

  if (!isInteger(value) || value < 1 || value > 10) {
    alert('Введите число от 1 до 10')}
  else {
    let url = 'https://picsum.photos/v2/list?limit=';
    url = url + parseInt(value)
    useRequest(url, displayResult)
    }  
});
  
  
    
