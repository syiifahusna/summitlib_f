import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./fragment/Header";
import Footer from "./fragment/Footer";


const Jumbotron = () =>{
  return <div className="p-5 mb-4 text-bg-light rounded-3">
  <div className="container-fluid py-5">
  <h1 className="display-5 fw-bold">Summit Lib</h1>
  <p className="col-md-8 fs-4">Your gateway to knowledge and community resources</p>
  <button className="btn btn-primary btn-lg" type="button">Find Books</button>
  </div>
</div>
}

const Ads = () =>{
  return <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
    <div className="col-lg-6 px-0">
      <h1 className="display-4 fst-italic">Title of a longer featured blog post</h1>
      <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
    </div>
  </div>
}

const RecomendationBooks = () =>{
  return <div className="container mb-5">
  <div className="container">
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

  <h2>Recommended For You</h2>
  <p className="text-muted mb-4">Based on your recent reading history and preferences</p>
  
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">1984</h5>
                  <p className="card-text text-muted">George Orwell</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning text-dark">On Loan</span>
                      <small className="text-muted">Science Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-secondary">Join Waitlist</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">To Kill a Mockingbird</h5>
                  <p className="card-text text-muted">Harper Lee</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Classic</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Dune</h5>
                  <p className="card-text text-muted">Frank Herbert</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Science Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">The Hobbit</h5>
                  <p className="card-text text-muted">J.R.R. Tolkien</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning text-dark">On Loan</span>
                      <small className="text-muted">Fantasy</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-secondary">Join Waitlist</a>
              </div>
          </div>
      </div>
  </div>
  
  <h2>Popular This Month</h2>
  <p className="text-muted mb-4">Trending reads among our community</p>
  
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">The Midnight Library</h5>
                  <p className="card-text text-muted">Matt Haig</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Project Hail Mary</h5>
                  <p className="card-text text-muted">Andy Weir</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning text-dark">On Loan</span>
                      <small className="text-muted">Science Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-secondary">Join Waitlist</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Educated</h5>
                  <p className="card-text text-muted">Tara Westover</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Memoir</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">The Silent Patient</h5>
                  <p className="card-text text-muted">Alex Michaelides</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-info text-dark">Coming Soon</span>
                      <small className="text-muted">Thriller</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-info">Pre-reserve</a>
              </div>
          </div>
      </div>
  </div>
  
  <h2>Based on Your Reading History</h2>
  <p className="text-muted mb-4">Because you enjoyed "Sapiens: A Brief History of Humankind"</p>
  
  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Homo Deus</h5>
                  <p className="card-text text-muted">Yuval Noah Harari</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Non-Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Guns, Germs, and Steel</h5>
                  <p className="card-text text-muted">Jared Diamond</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-warning text-dark">On Loan</span>
                      <small className="text-muted">Non-Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-secondary">Join Waitlist</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">A Brief History of Time</h5>
                  <p className="card-text text-muted">Stephen Hawking</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Science</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
      
      <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Thinking, Fast and Slow</h5>
                  <p className="card-text text-muted">Daniel Kahneman</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-success">Available</span>
                      <small className="text-muted">Psychology</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="#" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-success">Borrow</a>
              </div>
          </div>
      </div>
  </div>
  
  <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">
          <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
              <a className="page-link" href="#">Next</a>
          </li>
      </ul>
  </nav>
</div>
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
        <Header></Header>
        <main className="container">
          <Jumbotron></Jumbotron>
          <Ads></Ads>
          <RecomendationBooks></RecomendationBooks>
        </main>
        <Footer></Footer>
  
  </>
);
