const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
    /* page length  */
    const totalPage = parseInt(totalPages)
    const currentPages = parseInt(currentPage)
    /* page number */
    const pageNumber = [...Array(totalPage).keys()]
    console.log(pageNumber?.length, pageNumber)

    const visiblePages = [];



    if (pageNumber.length <= 5) {
        // If total pages are less than or equal to 7, show all page numbers
        visiblePages.push(...pageNumber);
        console.log('hit')
    } else {
        // If there are more than 7 pages, show a limited set of pages with ellipsis
        if (currentPages <= 3) {
            visiblePages.push(0, 1, 2, 3, 4, '...', pageNumber?.length - 1);
            console.log('hit2')
        } else if (currentPages >= pageNumber?.length - 3) {
            visiblePages.push(0, '...', pageNumber?.length - 3, pageNumber?.length - 2, pageNumber.length - 1);
        } else {
            visiblePages.push(0, '...', currentPages - 1, currentPages, currentPages + 1, '...', pageNumber?.length - 1);
        }
    }

    console.log(visiblePages, pageNumber, currentPages, totalPage)


    return (
        <div>
            {
                visiblePages?.map((number, index) => <button onClick={() =>
                    typeof (number) == 'number' && setCurrentPage(number)
                } key={index} className={currentPages == number ? 'btn mx-1 btn-sm   btn-primary rounded-full gap-3 hover:scale-105 transition-all duration-200' : 'btn mx-1 btn-sm btn-outline btn-primary rounded-full gap-3 hover:scale-105 transition-all duration-200'}>{typeof (number) == 'number' ? number + 1 : '...'}</button>)
            }
        </div>
    );
};

export default Pagination;