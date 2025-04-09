import SearchForm from "./util/SearchForm"
import BookCard from "./util/BookCard"

const Jumbotron = () =>{
    return <div className="p-5 mb-4 text-bg-light rounded-3">
    <div className="container-fluid py-5">
    <h1 className="display-5 fw-bold">Summit Lib</h1>
    <p className="col-md-8 fs-4">Your gateway to knowledge and community resources</p>
    <a className="btn btn-primary btn-lg" href="/search">Find Books</a>
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
      <SearchForm></SearchForm>
  
    <h2>Recommended For You</h2>
    <p className="text-muted mb-4">Based on your recent reading history and preferences</p>
    
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
        <BookCard></BookCard>
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

const Home = () =>{
    return <>
        <Jumbotron></Jumbotron>
        <Ads></Ads>
        <RecomendationBooks></RecomendationBooks>
    </>
}

export default Home;
  