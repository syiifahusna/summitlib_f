import React, { useEffect, useState } from "react";
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
    const [adsTitle, setAdsTitle] = useState(null);
    const [adsDesc, setAdsDesc] = useState(null);

     useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch("http://127.0.0.1:8080/summitlib/api/public/advertisement");
            const result = await response.json();
    
            if (result.status === 200) {
              setAdsTitle(result.data.title);
              setAdsDesc(result.data.description)
            } else {
              console.error("Failed to retrieve categories:", result.message);
            }
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
    
        fetchCategories();
    }, []);





    return <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
      <div className="col-lg-6 px-0">
        <h1 className="display-4 fst-italic">{adsTitle ? adsTitle : "No Ads"}</h1>
        <p className="lead my-3">{adsDesc ? adsDesc : "No Ads"}</p>
      </div>
    </div>
  }
  
  
  const RecomendationBooks = () =>{

    const [books, setBooks] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
  
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/summitlib/api/public/book/recommended?limit=${limit}&offset=${offset}`
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
  
    useEffect(() => {
      // initial fetch
      fetchBooks();
    }, []);
  
    return (
      <div className="container mb-5">
        <h2>Latest Books For You</h2>
        <p className="text-muted mb-4">
          Recommended new books in our shelves
        </p>
  
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
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
    );
  
}

const Home = () =>{
    return <>
        <Jumbotron></Jumbotron>
        <Ads></Ads>
        <RecomendationBooks></RecomendationBooks>
    </>
}

export default Home;
  