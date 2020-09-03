function createColumns() {
  let allItems = document.querySelectorAll('.list-item');
  for (let item of allItems) {
    let list = item.querySelector('.list-sub');
    let listSubChildren = list.children;
    let listSubAmount = listSubChildren.length;
    let columns = 3;
    let inEach = listSubAmount / columns;
    let firsColumnAmount;

    if (inEach != Math.ceil(inEach)) {
      firsColumnAmount = Math.ceil(inEach);
      inEach = Math.round(inEach);
    } else {
      firsColumnAmount = inEach;
    }

    for (let i = 0; i < columns; i++) {
      let column = document.createElement('div');
      column.className = 'column';
      list.append(column);
    }

    let createdColumns = list.querySelectorAll('.column');
    let listSubItems = list.querySelectorAll('li');

    for (let i = 0; i < firsColumnAmount; i++) {
      createdColumns[0].append(listSubItems[i]);
    }
    if (listSubAmount < 2) return;
    let from = firsColumnAmount;
    let to = firsColumnAmount + inEach;

    for (from; from < to; from++) {
      createdColumns[1].append(listSubItems[from]);
    }
    if (listSubAmount < 3) return;

    from = to;
    to = to + inEach;

    for (from; from < to; from++) {
      createdColumns[2].append(listSubItems[from]);
    }
  }
}
createColumns();
