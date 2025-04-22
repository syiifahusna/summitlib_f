import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookCard from "./util/BookCard"
import MessageModal from './util/MessageModal';

const Book = () =>{

  const { id } = useParams(); // get id from URL
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  //modal
  const [showModal, setShowModal] = useState(false);
  
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const fetchBook = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8080/summitlib/api/public/book/${id}`);
      const result = await response.json();

      if (result.status === 200) {
        setBook(result.data);
      } else {
        navigate('/notfound');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      navigate('/notfound');
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id, navigate]);

  if (!book) return <div>Loading...</div>;




    return <div className="container py-5">
    <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Book Details</li>
        </ol>
    </nav>

    <div className="card border-0 shadow-sm">
      <div className="card-body p-0">
        <div className="row g-0">
          <div className="col-md-4 p-4 text-center bg-light">
            <img
              src={book.img ? book.img : "https://placehold.co/300x400"}
              alt="Book Cover"
              className="img-fluid book-cover rounded"
            />
            <div className="mt-4">
              <button className="btn btn-primary mt-2 w-100" onClick={openModal}>
                <i className="fas fa-book me-2"></i>Read Now
              </button>
              <MessageModal show={showModal} handleClose={closeModal} title="Please login to read">
                <p>Login to read this book</p>
              </MessageModal>




              <button className="btn btn-outline-secondary mt-2 w-100">
                <i className="fas fa-heart me-2"></i>Add to Favourite
              </button>
            </div>
          </div>

          <div className="col-md-8 p-4">
            <h1 className="book-title mb-4">{book.title}</h1>
            <p className="lead mb-4">{book.description}</p>

            <div className="book-details mb-4">
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Author:</div>
                <div className="col-md-9">{book.authors.map(a => a.name).join(', ')}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Publisher:</div>
                <div className="col-md-9">{book.publisher || 'Unknown'}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Created Date:</div>
                <div className="col-md-9">{new Date(book.createdDate).toLocaleDateString()}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Language:</div>
                <div className="col-md-9">{book.language}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Pages:</div>
                <div className="col-md-9">{book.pages}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">ISBN-13:</div>
                <div className="col-md-9">{book.isbn13}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">ISBN-10:</div>
                <div className="col-md-9">{book.isbn10}</div>
              </div>
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Edition:</div>
                <div className="col-md-9">{book.edition}</div>
              </div> 
              <div className="row mb-2">
                <div className="col-md-3 fw-bold">Category:</div>
                <div className="col-md-9">{book.category ? book.category.category : "Uncategorized"}</div>
              </div>             
            </div>

            <div className="row mt-4">
              <div className="col-md-6">
                <div className="d-flex align-items-center mb-3">
                    <button className="btn btn-outline-secondary btn-sm">
                    <i className="fas fa-share-alt me-1"></i> Share
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-5">
        <ul className="nav nav-tabs" id="bookTabs" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="comments-tab" data-bs-toggle="tab" data-bs-target="#comments" type="button" role="tab" aria-controls="comments" aria-selected="true">Comments</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="related-tab" data-bs-toggle="tab" data-bs-target="#related" type="button" role="tab" aria-controls="related" aria-selected="false" tabIndex="-1">Related Books</button>
            </li>
        </ul>
        <div className="tab-content p-4 border border-top-0 rounded-bottom" id="bookTabsContent">
            <div className="tab-pane fade show active" id="comments" role="tabpanel" aria-labelledby="comments-tab">
                {book.comments.map(comment => (
                    <Comments key={comment.id} comment={comment}></Comments>
                  ))
                }
            </div>
            <div className="tab-pane fade" id="related" role="tabpanel" aria-labelledby="related-tab">
                <h5 className="mb-4">You Might Also Like</h5>
                <div className="row row-cols-1 row-cols-md-4 g-4">
              
                </div>
            </div>
        </div>
    </div>
</div>
}

const Comments = ({comment}) => {

    return  <div className="mb-4 pb-4 border-bottom">
    <div className="d-flex align-items-center mb-3">
      <img src="https://placehold.co/50x50" alt="User Avatar" className="rounded-circle me-3"></img>
      <div>
          <h6>Sarah Johnson</h6>
      </div>
    </div>
    <h6>Timeless Classic</h6>
    <p>
    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.

Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
    </p>
    </div>
}

export default Book;