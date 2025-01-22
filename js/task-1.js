const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);
for (const item of categories) {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
}

//------

//const categories = document.querySelectorAll("#categories .item");

//console.log(`Number of categories: ${categories.length}`);

//categories.forEach((category) => {
//  const categoryTitle = category.querySelector("h2").textContent;

//  const itemsCount = category.querySelectorAll(".item-name .name").length;

//  console.log(`Category: ${categoryTitle}`);
//  console.log(`Elements: ${itemsCount}`);
//});
