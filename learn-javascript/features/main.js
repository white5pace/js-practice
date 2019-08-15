function sortByColumns() {
  let listSubs = document.querySelectorAll('.list-sub');
  let columns = window.innerWidth > 1200 ? 3 : 2;
  // let listSubItems = document.querySelectorAll('list-sub__item');
  let column = '<div class="column">';
  function getElemntsInEach(length, columns) {
    if (length / columns != Math.round(length / columns)) {
      return Math.ceil(length / columns);
    }
    return length / columns;
  }
  let i = 0;
  while (listSubs[3].children.length < i) {
    listSubs[3].children[i].outerHTML = column + listSubs[3].children[i].outerHTML;
    if (i + getElemntsInEach() - 1 < listSubs[3].children.length) {
      i += getElemntsInEach() - 1;
      listSubs[3].children[i].outerHTML = listSubs[3].children[i].outerHTML + '</div>';
    } else {
      listSubs[3].lastElementChild = listSubs[3].lastElementChild.outerHTML + '</div>';
    }
  }
  elemntsInEach(listSubs[3].children.length, columns);
  // listSubs[3].children[0].outerHTML = column + listSubs[3].children[0].outerHTML +'</div>';
  // console.dir(listSubs[3].children[0].outerHTML);
}
sortByColumns();