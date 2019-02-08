class Sorting {
    sortItems (typeOfSorting, dataAttributeToSort){
       return (a, b) => {
           // if typeOfSorting === true -> sort HighToLow, else -> LowToHigh
           let splittedArrayA = parseInt(a.getAttribute(dataAttributeToSort));
           let splittedArrayB = parseInt(b.getAttribute(dataAttributeToSort));
           let typeSort = typeOfSorting ? ((splittedArrayA > splittedArrayB) ? 1 : -1) : ((splittedArrayA > splittedArrayB) ? -1 : 1);
           return typeSort;
       }
   };


    initSorting(itemsToSort, itemsWrapper, typeOfSorting, dataAttributeToSort){
   
       itemsToSort = Array.prototype.slice.call(itemsToSort, 0);
       itemsToSort.sort(this.sortItems(typeOfSorting, dataAttributeToSort));
       for(let i = 0, l = itemsToSort.length; i < l; i++) {
           itemsWrapper.appendChild(itemsToSort[i]);
       }
    };

}
