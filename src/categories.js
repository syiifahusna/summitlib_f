import React, { useEffect, useState } from "react";

const Categories = () =>{

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch("http://127.0.0.1:8080/summitlib/api/public/book/categories");
            const result = await response.json();
    
            if (result.status === 200) {
              setCategories(result.data);
            } else {
              console.error("Failed to retrieve categories:", result.message);
            }
          } catch (error) {
            console.error("Error fetching categories:", error);
          }
        };
    
        fetchCategories();
      }, []);
    

    return <>
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Book Categories</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
      
                {categories.map((cat) => (
                    <div className="col" key={cat.id}>
                    <div className="card h-100 category-card">
                        <div className="card-body text-center">
                        <i className={`fas ${cat.icon} fa-3x text-primary mb-3`}></i>
                        <h3 className="card-title">{cat.category}</h3>
                        <p className="card-text">{cat.description}</p>
                        </div>
                        <div className="card-footer bg-transparent border-0 text-center">
                        <a href="#" className="btn btn-outline-primary">
                            Browse {cat.category}
                        </a>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    </>
}



export default Categories;