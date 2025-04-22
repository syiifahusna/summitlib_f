import { useEffect, useState, useRef } from "react";
import BookCard from "./util/BookCard"

const Search = () =>{ 
    
    const [searchTerm, setSearchTerm] = useState("");
    const [type, setType] = useState("");
    const [books, setBooks] = useState([]);
    const offsetRef = useRef(0); 
    const limit = 10;
    const [hasMore, setHasMore] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        offsetRef.current = 0;
        setBooks([]);
        setHasMore(true);
        setLoading(false);

        fetchBooks();
    };

    const fetchBooks = async () => {

        if (!searchTerm) {
          return;
        }
    
        setLoading(true);

        try {
            const response = await fetch(`http://127.0.0.1:8080/summitlib/api/public/book/find?searchTerm=${searchTerm}&type=${type}&limit=${limit}&offset=${offsetRef.current}`);
            const result = await response.json();

            if (result.status === 200) {
                setBooks((prev) => [...prev, ...result.data]);
                offsetRef.current += limit;
                if (result.data.length < limit) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
          
        } catch (error) {
            console.error("Error fetching books:", error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
      };
    
    return (
    <div className="container my-5">
        <h2 className="text-center mb-5">Search Books</h2>
        <div className="row">
            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <form id="searchForm" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="searchTerm"
                                name="searchTerm"
                                className="form-control form-control-lg"
                                placeholder="Search by title, author, ISBN..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-primary btn-lg" type="submit">
                                <i className="fas fa-search"></i> Search
                            </button>
                        </div>
                        <div className="d-flex mt-3">
                            <div className="form-check me-3">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="type"
                                id="searchTitle"
                                value="title"
                                checked={type === "title"}
                                onChange={(e) => setType(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="searchTitle">Title</label>
                            </div>
                            <div className="form-check me-3">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="type"
                                id="searchAuthor"
                                value="author"
                                checked={type === "author"}
                                onChange={(e) => setType(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="searchAuthor">Author</label>
                            </div>
                            <div className="form-check me-3">
                                <input
                                className="form-check-input"
                                type="radio"
                                name="type"
                                id="searchISBN"
                                value="isbn"
                                checked={type === "isbn"}
                                onChange={(e) => setType(e.target.value)}
                                />
                                <label className="form-check-label" htmlFor="searchISBN">ISBN</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    
        <h2>Find Your Favourite Books</h2>
        <p className="text-muted mb-4">Explore popular and hidden gems from every genre</p>
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mb-5">
            {books.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </div>

        {hasMore && (
                <div className="text-center">
                    <button
                    className="btn btn-outline-primary"
                    onClick={fetchBooks}
                    disabled={loading}
                    >
                    {loading ? "Loading..." : "Load More"}
                    </button>
                </div>
        )}
        
    </div>)}

export default Search;