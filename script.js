


window.onload = () => {
  // fetching and storing the DOM Element
  let list = document.getElementById("shuffleAndSort");

  /*
  Method:- Shuffle
  returns:- Shuffle the array [1,2,3,4,5,6,7,8,9]
  */
  const shuffle = () => {
    let nodes = list.children;
    let i = 0;
    nodes = Array.prototype.slice.call(nodes);

    let itemsArr = nodes.slice(0);
    let temp;
    let j = itemsArr.length;
    let rand;
    while (--j) {
      rand = Math.floor(j * Math.random());
      temp = itemsArr[rand];
      itemsArr[rand] = itemsArr[j];
      itemsArr[j] = temp;
    }

    nodes = itemsArr

    const fragment = document.createDocumentFragment();
    while (i < nodes.length) {
      fragment.appendChild(nodes[i]);
      ++i;
    }
    list.appendChild(fragment);
  }

  /*
    Method:- Sort
    returns:- sort the array as [1,2,3,4,5,6,7,8,9] 
    */
  const sort = () => {
    let items = list.childNodes;
    let itemsArr = [];
    for (let i in items) {
      if (items[i].nodeType == 1) {
        // get rid of the whitespace text nodes
        itemsArr.push(items[i]);
      }
    }

    itemsArr.sort((a, b) => {
      return a.innerHTML == b.innerHTML
        ? 0
        : a.innerHTML > b.innerHTML
          ? 1
          : -1;
    });

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < itemsArr.length; ++i) {
      fragment.appendChild(itemsArr[i]);
    }
    list.appendChild(fragment);
  }

  document.getElementById("doSort").onclick = sort;
  document.getElementById("doShuffle").onclick = shuffle;
};