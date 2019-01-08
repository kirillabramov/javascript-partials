class Pagination {

  constructor(currentPage = 1, limitPerPage = 4, selectorOfTotalPages = '.news-list__item', elements) {
    this.currentPage = currentPage;
    this.limitPerPage = limitPerPage;
    this.totalPages = this.countTotalPages(selectorOfTotalPages);
    this.elements = elements;
  }

  hideAllElements(elements) {
    elements.each((i, element) => {
      if(i >= this.limitPerPage * this.currentPage) {
        $(element).hide();
      }
    });
  }
  
  countTotalPages(elements) {
    return Math.ceil(Number($(`${elements}`).length) / this.limitPerPage);
  }

  displayNewPage(elements) {
    elements.each((i, element) => {
      if(i >= this.limitPerPage * this.currentPage || i < this.limitPerPage * (this.currentPage - 1)) {
        $(element).hide();
      } else{
        $(element).show();
      }
    });
    $(window).scrollTop(0);
  }

  displayFirstPage(elements) {
    this.currentPage = 1;
    this.hideAllElements(elements);
    this.displayNewPage(elements);
  }

  displayLastPage(elements) {
    this.currentPage = this.totalPages;
    this.hideAllElements(elements);
    this.displayNewPage(elements);
  }
  showNumberOfPages(selector) {  
    let pages = [];
    for(let i = 1; i < this.totalPages + 1; i++) {
      pages.push(i);
    }
    pages.map(page => selector.html(selector.html() + `<button class="news-list__pagination--btn js-pagination-number">${page}</button>`));
  }

  handleNumberOfPages(number) {
    this.currentPage = number;
    this.hideAllElements(this.elements);
    this.displayNewPage(this.elements);
  }

  handleBack(backSelector, nextSelector) {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.displayNewPage(this.elements);
    }
    if (this.currentPage === 1) {
      $(`${backSelector}`).prop('disabled', true);
    }
    $(`${nextSelector}`).prop('disabled', false);
  }

  handleNext(backSelector, nextSelector) {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.displayNewPage(this.elements);
    }
    if (this.currentPage === this.totalPages) {
      $(`${nextSelector}`).prop('disabled', true);
    }
  
    $(`${backSelector}`).prop('disabled', false);
  
  }

  initPagination() {
    this.hideAllElements(this.elements);
  }
}
