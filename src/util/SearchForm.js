const SearchForm = () =>{
    return <div className="row">
        <div class="card shadow-sm mb-4">
            <div class="card-body">
                <form id="searchForm">
                    <div class="input-group">
                        <input type="text" id="searchInput" class="form-control form-control-lg" placeholder="Search by title, author, ISBN..."></input>
                        <button class="btn btn-primary btn-lg" type="submit">
                            <i class="fas fa-search"></i> Search
                        </button>
                    </div>
                    <div class="d-flex mt-3">
                        <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="searchType" id="searchTitle" checked></input>
                            <label class="form-check-label" for="searchTitle">Title</label>
                        </div>
                        <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="searchType" id="searchAuthor"></input>
                            <label class="form-check-label" for="searchAuthor">Author</label>
                        </div>
                        <div class="form-check me-3">
                            <input class="form-check-input" type="radio" name="searchType" id="searchISBN"></input>
                            <label class="form-check-label" for="searchISBN">ISBN</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

}

export default SearchForm;