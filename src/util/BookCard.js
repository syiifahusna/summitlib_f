const BookCard = () =>{
    return <>
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
                    <a href="/book/1" className="btn btn-sm btn-outline-primary">Details</a>
                    <a href="#" className="btn btn-sm btn-primary">Borrow</a>
                </div>
            </div>
        </div>
        <div className="col">
          <div className="card">
              <img src="https://placehold.co/200x300" className="card-img-top" alt="Book cover"></img>
              <div className="card-body">
                  <h5 className="card-title">Homo Deus</h5>
                  <p className="card-text text-muted">Yuval Noah Harari</p>
                  <div className="d-flex justify-content-between align-items-center">
                      <span className="badge bg-danger">Available</span>
                      <small className="text-muted">Non-Fiction</small>
                  </div>
              </div>
              <div className="card-footer bg-transparent">
                  <a href="/book/1" className="btn btn-sm btn-outline-primary">Details</a>
                  <a href="#" className="btn btn-sm btn-primary">Borrow</a>
              </div>
          </div>
      </div>
</>
}

export default BookCard;