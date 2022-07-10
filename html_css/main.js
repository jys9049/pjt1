const get = (target) => {
  return document.querySelector(target);
}

const getAll = (target) => {
  return document.querySelectorAll(target);
}

const $category = get(".category-group");
const $selectCategory = get(".select-category");
const $selectCategoryArr = getAll(".select-category");
const a = get("a");

const categoryClick = () => {
  $selectCategoryArr.forEach((category)=> {
    category.addEventListener("click", (e) => {
      const target = e.target;
      target.classList.add('strong');
    });
  });
}

categoryClick();