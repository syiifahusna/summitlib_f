import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import  BookCard  from './util/BookCard'

const Category = () =>{

    const { id } = useParams(); // get id from URL
    const navigate = useNavigate();
    const [title,setTitle] = useState("Loading...");
    const [books, setBooks] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);


    const fetchCategory = async () => {
        try {
            const response = await fetch(
                `http://127.0.0.1:8080/summitlib/api/public/book/categories/${id}`
            );
            const result = await response.json();
        
            if (result.status === 200) {
                setTitle(result.data)
            } else {
                navigate('/notfound')
            }
        } catch (error) {
            console.error('Fetch error:', error);
            navigate('/notfound');
        }
    };


    const fetchBooks = async () => {
        setLoading(true);
        try {
        const response = await fetch(
            `http://127.0.0.1:8080/summitlib/api/public/book/category/book/${id}?limit=${limit}&offset=${offset}`
        );
        const result = await response.json();
    
        if (result.status === 200 && result.data.length > 0) {
            setBooks((prev) => [...prev, ...result.data]);
            setOffset((prev) => prev + limit);
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

    useEffect(() =>{
        fetchCategory();
        fetchBooks();
    },[id, navigate])


    return <>
    <section className="py-5">
        <div className="container mb-5">
            <h2 className="text-center">{title.category}</h2>
            <p className="text-center text-muted mb-5">{title.description}</p>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mb-3">
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
            
        </div>
    </section>
</>
}

export default Category;