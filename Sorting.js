class Sort{

 sortItems(typeOfSorting) {
        return (a, b) => {
    
            // if typeOfSorting === true -> sort HighToLow, else -> LowToHigh
            let splittedArrayA = parseInt(a.innerHTML.substr(0, a.innerHTML.indexOf('<')));
            let splittedArrayB = parseInt(b.innerHTML.substr(0, b.innerHTML.indexOf('<')));
        
            let typeSort = typeOfSorting ? ((splittedArrayA > splittedArrayB) ? -1 : 1) : ((splittedArrayA > splittedArrayB) ? 1 : -1);
            return typeSort;
        }
    };

 initSorting(itemsToSort, itemsWrappers, typeOfSorting){

    itemsToSort = Array.prototype.slice.call(itemsToSort, 0);
    itemsToSort.sort(this.sortItems(typeOfSorting));

    for(let i = 0, l = itemsToSort.length; i < l; i++) {
        itemsWrappers[i].appendChild(itemsToSort[i]);
    }
 }

}
