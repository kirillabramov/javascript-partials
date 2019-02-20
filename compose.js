const compose = (...funcs) => (comp) => {
    return funcs.reduceRight((wrapped, f) => f(wrapped), comp);
};

// taking all high order components funcs, and applying them into component
export default compose(
    withBookstoreService(),
    connect(mapStateToProps, { booksLoaded })
)(BookList);


// before compose
// export default withBookstoreService()(
//    connect(mapStateToProps, { booksLoaded })(BookList));
