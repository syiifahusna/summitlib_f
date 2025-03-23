const Categories = () =>{

return <>
        
        <section class="py-5">
        <div class="container">
            <h2 class="text-center mb-5">Book Categories</h2>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-dragon fa-3x text-primary mb-3"></i>
                            <h3 class="card-title">Fantasy</h3>
                            <p class="card-text">Explore magical worlds, mythical creatures, and epic adventures.</p>
                            <span class="badge bg-info">5,280 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Fantasy</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-rocket fa-3x text-danger mb-3"></i>
                            <h3 class="card-title">Science Fiction</h3>
                            <p class="card-text">Discover future worlds, advanced technology, and space exploration.</p>
                            <span class="badge bg-info">4,120 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Sci-Fi</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-heart fa-3x text-danger mb-3"></i>
                            <h3 class="card-title">Romance</h3>
                            <p class="card-text">Experience love stories, relationships, and emotional journeys.</p>
                            <span class="badge bg-info">3,840 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Romance</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-mask fa-3x text-dark mb-3"></i>
                            <h3 class="card-title">Mystery &amp; Thriller</h3>
                            <p class="card-text">Unravel crimes, suspense, and page-turning investigations.</p>
                            <span class="badge bg-info">3,560 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Mystery</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-graduation-cap fa-3x text-success mb-3"></i>
                            <h3 class="card-title">Young Adult</h3>
                            <p class="card-text">Find coming-of-age stories, teen adventures, and relatable characters.</p>
                            <span class="badge bg-info">2,980 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse YA</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-landmark fa-3x text-secondary mb-3"></i>
                            <h3 class="card-title">Historical Fiction</h3>
                            <p class="card-text">Travel through time with stories set in different historical periods.</p>
                            <span class="badge bg-info">2,450 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Historical</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-brain fa-3x text-info mb-3"></i>
                            <h3 class="card-title">Philosophy</h3>
                            <p class="card-text">Contemplate existence, ethics, and the nature of reality.</p>
                            <span class="badge bg-info">1,850 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Philosophy</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-microscope fa-3x text-primary mb-3"></i>
                            <h3 class="card-title">Science</h3>
                            <p class="card-text">Discover scientific principles, research, and innovations.</p>
                            <span class="badge bg-info">2,740 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Science</a>
                        </div>
                    </div>
                </div>
                
                <div class="col">
                    <div class="card h-100 category-card">
                        <div class="card-body text-center">
                            <i class="fas fa-utensils fa-3x text-warning mb-3"></i>
                            <h3 class="card-title">Cookbooks</h3>
                            <p class="card-text">Explore recipes, cooking techniques, and culinary traditions.</p>
                            <span class="badge bg-info">1,640 Books</span>
                        </div>
                        <div class="card-footer bg-transparent border-0 text-center">
                            <a href="#" class="btn btn-outline-primary">Browse Cookbooks</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</>
}


export default Categories;