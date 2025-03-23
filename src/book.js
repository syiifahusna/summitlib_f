const Book = () =>{
    return <div class="container py-5">
    <nav aria-label="breadcrumb" class="mb-4">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Books</a></li>
            <li class="breadcrumb-item active" aria-current="page">Book Details</li>
        </ol>
    </nav>

    <div class="card border-0 shadow-sm">
        <div class="card-body p-0">
            <div class="row g-0">
                <div class="col-md-4 p-4 text-center bg-light">
                    <img src="https://placehold.co/300x400" alt="Book Cover" class="img-fluid book-cover rounded"></img>
                    <div class="mt-4">
                        <span class="badge bg-success badge-availability fs-6">In Stock</span>
                        <p class="text-muted mt-2">Usually ships within 2-3 business days</p>
                        <button class="btn btn-primary mt-2 w-100">
                            <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                        </button>
                        <button class="btn btn-outline-secondary mt-2 w-100">
                            <i class="fas fa-heart me-2"></i>Add to Wishlist
                        </button>
                    </div>
                </div>
                
                <div class="col-md-8 p-4">
                    <h1 class="book-title mb-4">The Great Gatsby</h1>
                    <p class="lead mb-4">A vivid portrait of the Jazz Age and a powerful exploration of the American Dream in the roaring twenties, following the enigmatic millionaire Jay Gatsby and his obsession to reunite with his former lover, Daisy Buchanan.</p>
                    
                    <div class="book-details mb-4">
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Author:</div>
                            <div class="col-md-9">F. Scott Fitzgerald</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Publisher:</div>
                            <div class="col-md-9">Scribner</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Publication Date:</div>
                            <div class="col-md-9">April 10, 1925</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Language:</div>
                            <div class="col-md-9">English</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Pages:</div>
                            <div class="col-md-9">180</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">ISBN-13:</div>
                            <div class="col-md-9">978-0743273565</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">ISBN-10:</div>
                            <div class="col-md-9">0743273567</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Format:</div>
                            <div class="col-md-9">Paperback</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Dimensions:</div>
                            <div class="col-md-9">8.2 x 5.2 x 0.5 inches</div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-md-3 fw-bold">Weight:</div>
                            <div class="col-md-9">7.1 ounces</div>
                        </div>
                    </div>
                    
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <div class="d-flex align-items-center mb-3">
                                <div class="me-3">
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star text-warning"></i>
                                    <i class="fas fa-star-half-alt text-warning"></i>
                                </div>
                                <div>4.5 out of 5 stars (2,387 reviews)</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="d-flex justify-content-end gap-2">
                                <button class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-share-alt me-1"></i> Share
                                </button>
                                <button class="btn btn-outline-secondary btn-sm">
                                    <i class="fas fa-print me-1"></i> Print
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <hr class="my-4"></hr>
                    
                    <h5>About the Author</h5>
                    <p>F. Scott Fitzgerald (1896-1940) was an American novelist and short-story writer, widely regarded as one of the greatest American writers of the 20th century. He finished four novels during his lifetime, including "The Great Gatsby," which has been acclaimed as the Great American Novel.</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="mt-5">
        <ul class="nav nav-tabs" id="bookTabs" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Description</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false" tabindex="-1">Reviews</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="related-tab" data-bs-toggle="tab" data-bs-target="#related" type="button" role="tab" aria-controls="related" aria-selected="false" tabindex="-1">Related Books</button>
            </li>
        </ul>
        <div class="tab-content p-4 border border-top-0 rounded-bottom" id="bookTabsContent">
            <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                <p>The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.</p>
                <p>The novel was inspired by a youthful romance Fitzgerald had with socialite Ginevra King, and the riotous parties he attended on Long Island's North Shore in 1922. Following a move to the French Riviera, Fitzgerald completed a rough draft of the novel in 1924. He submitted it to editor Maxwell Perkins, who persuaded Fitzgerald to revise the work over the following winter. After making revisions, Fitzgerald was satisfied with the text, but remained ambivalent about the book's title and considered several alternatives.</p>
                <p>Fitzgerald died in 1940, believing himself to be a failure and his work forgotten. During World War II, the novel experienced an abrupt surge in popularity when the Council on Books in Wartime distributed free copies to American soldiers serving overseas. This new-found popularity launched a critical and scholarly re-examination, and the work soon became a core part of most American high school curricula and a part of American popular culture.</p>
            </div>
            <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                <div class="mb-4">
                    <h5>Customer Reviews</h5>
                    <div class="d-flex align-items-center mb-3">
                        <div class="me-3">
                            <span class="display-4">4.5</span>
                        </div>
                        <div>
                            <div>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star-half-alt text-warning"></i>
                            </div>
                            <p class="text-muted">Based on 2,387 reviews</p>
                        </div>
                    </div>
                </div>
                
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex mb-3">
                        <img src="/api/placeholder/40/40" alt="User Avatar" class="rounded-circle me-3"></img>
                        <div>
                            <h6 class="mb-0">Sarah Johnson</h6>
                            <div class="text-muted small">Verified Purchase</div>
                            <div class="mb-2">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                            </div>
                        </div>
                    </div>
                    <h6>Timeless Classic</h6>
                    <p>This book truly deserves its status as a classic. Fitzgerald's prose is beautiful and the story is both entertaining and thought-provoking. The characters feel real and flawed, and the themes of wealth, class, and the American Dream are as relevant today as they were in the 1920s.</p>
                </div>
                
                <div class="mb-4 pb-4 border-bottom">
                    <div class="d-flex mb-3">
                        <img src="/api/placeholder/40/40" alt="User Avatar" class="rounded-circle me-3"></img>
                        <div>
                            <h6 class="mb-0">Michael Rodriguez</h6>
                            <div class="text-muted small">Verified Purchase</div>
                            <div class="mb-2">
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="fas fa-star text-warning"></i>
                                <i class="far fa-star text-warning"></i>
                            </div>
                        </div>
                    </div>
                    <h6>Great for Literature Students</h6>
                    <p>I read this for my American Literature class and was surprised by how much I enjoyed it. The symbolism and themes are rich, making it perfect for analysis. My only critique is that some parts felt a bit slow, but the payoff is worth it.</p>
                </div>
                
                <button class="btn btn-primary">Load More Reviews</button>
            </div>
            <div class="tab-pane fade" id="related" role="tabpanel" aria-labelledby="related-tab">
                <h5 class="mb-4">You Might Also Like</h5>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://placehold.co/200x300" class="card-img-top" alt="Book Cover"></img>
                            <div class="card-body">
                                <h6 class="card-title">The Sun Also Rises</h6>
                                <p class="card-text small">Ernest Hemingway</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://placehold.co/200x300" class="card-img-top" alt="Book Cover"></img>
                            <div class="card-body">
                                <h6 class="card-title">Tender Is the Night</h6>
                                <p class="card-text small">F. Scott Fitzgerald</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://placehold.co/200x300" class="card-img-top" alt="Book Cover"></img>
                            <div class="card-body">
                                <h6 class="card-title">This Side of Paradise</h6>
                                <p class="card-text small">F. Scott Fitzgerald</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://placehold.co/200x300" class="card-img-top" alt="Book Cover"></img>
                            <div class="card-body">
                                <h6 class="card-title">The Beautiful and Damned</h6>
                                <p class="card-text small">F. Scott Fitzgerald</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
}

export default Book;