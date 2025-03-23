import SearchForm from "./util/SearchForm"
import Book from "./util/BookCard"

const Search = () =>{ return <div className="container mb-5">

<SearchForm></SearchForm>
  
    <h2>Recommended For You</h2>
    <p className="text-muted mb-4">Based on your recent reading history and preferences</p>
    
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
        <Book></Book>
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




</div>}

export default Search;