# javascript-partials

Pagination.js Initialization
_________________________________

// simple pagination made by me
// initialization
// change ALL selectors and variables that called by X with your own selectors and variables

let _pagination = new Pagination(XcurrentPage, XlimitPerPage, XselectorOfTotalPages, Xelements);
_pagination.initPagination(selectorOfTheElements);

$(XbackSelector).on('click', _ => {
  _pagination.handleBack(XbackSelector, XnextSelector);
}); 
$(XnextSelector).on('click', _ => {
  _pagination.handleNext(XbackSelector, XnextSelector);
}); 

$(XselectorOfFirstPageBtn).on('click', _ => {
  _pagination.displayFirstPage($(XselectorOfTheElements));
});

$(XselectorOfTheLastPageBtn).on('click', _ => {
  _pagination.displayLastPage($(XselectorOfTheElements));
});

// if you need to show numbers like First < 1 2 3 > Last
// you should replace class in showNumberOfPages function 

_pagination.showNumberOfPages($(XselectorOfNumbersWrapper));

$(XselectorOfNumber).on('click', e => {
  let numberOfPage = Number($(e.target).html());
  _pagination.handleNumberOfPages(numberOfPage);
});

____________________________________
