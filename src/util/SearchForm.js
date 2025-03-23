const SearchForm = () =>{
    return <div className="container my-5">
      <div className="row">
          <div className="col-md-3">
              <label className="form-label">Genre</label>
              <select className="form-select">
                  <option defaultValue="">All Genres</option>
                  <option>Fiction</option>
                  <option>Science Fiction</option>
                  <option>Mystery</option>
                  <option>Fantasy</option>
                  <option>Non-Fiction</option>
              </select>
          </div>
          <div className="col-md-3">
              <label className="form-label">Availability</label>
              <select className="form-select">
                  <option defaultValue="">All</option>
                  <option>Available Now</option>
                  <option>On Loan</option>
                  <option>Coming Soon</option>
              </select>
          </div>
          <div className="col-md-3">
              <label className="form-label">Rating</label>
              <select className="form-select">
                  <option defaultValue="">Any Rating</option>
                  <option>4+ Stars</option>
                  <option>3+ Stars</option>
                  <option>2+ Stars</option>
              </select>
          </div>
          <div className="col-md-3">
              <label className="form-label">Sort By</label>
              <select className="form-select">
                  <option defaultValue="">Relevance</option>
                  <option>Newest</option>
                  <option>Most Popular</option>
                  <option>Highest Rated</option>
              </select>
          </div>
      </div>
      <div className="row mt-3">
          <div className="col-12">
              <button className="btn btn-primary">Apply Filters</button>
              <button className="btn btn-outline-secondary ms-2">Reset</button>
          </div>
      </div>
  </div>
}

export default SearchForm;