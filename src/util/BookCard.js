const BookCard = ({ book }) =>{
    const {
        id,
        title,
        authors,
        img,
        category,
        status
      } = book;
    
      return (
        <div className="col">
          <div className="card">
            <img
              src={img || "https://placehold.co/200x300"}
              className="card-img-top"
              alt="Book cover"
            />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text text-muted">
                {authors && authors.length > 0 ? authors.map(a => a.name).join(", ") : "Unknown Author"}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <span className={`badge ${status ? "bg-success" : "bg-secondary"}`}>
                  {status ? "Available" : "Unavailable"}
                </span>
                <small className="text-muted">{category || "Uncategorized"}</small>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <a href={`/book/${id}`} className="btn btn-sm btn-outline-primary">Details</a>
              <a href="#" className="btn btn-sm btn-primary">Borrow</a>
            </div>
          </div>
        </div>
      );
}

export default BookCard;