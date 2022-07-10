const get = (target) => {
  return document.querySelector(target);
}

const getAll = (target) => {
  return document.querySelectorAll(target);
}

const $recomend = get(".recomend");
const $recomendArr = getAll(".recomend");

function mouseover() {
  for(let i = 0; i < $recomendArr.length; i++){
    $recomendArr[i].addEventListener("mouseover", () => {
      createModal();
    })

  }
}

const createModal = () => {
  const inner = $recomend.innerHTML = `
          <div class="mouseover">
            <img src="./images/topPoster2.jpg" alt="" class="img">
            <div class="play-list"></div>
          </div>
          `
  
  return inner;
}


mouseover();