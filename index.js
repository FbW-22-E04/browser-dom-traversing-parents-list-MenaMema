const arr = [];
let currentElement = document.querySelector("cite");
// console.log(currentElement.getRootNode());
while (currentElement) {
  //   console.log(currentElement);
  let currentElementName = currentElement.nodeName;
  //   console.log(currentElementName);
  arr.unshift(currentElementName.toLowerCase());
  //   console.log(arr);
  currentElement = currentElement.parentElement;
}
console.log(arr.join(" > "));
