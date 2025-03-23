 const NotFound = () => {
    return <div class="container py-5">
               <div class="row justify-content-center">
                  <div class="col-md-8 col-lg-6">
                        <div class="card shadow text-center p-5">
                           <h1 class="display-1 fw-bold">404</h1>
                           <hr class="mx-auto w-25 mb-4"></hr>
                           <h2 class="mb-3">Page Not Found</h2>
                           <p class="lead mb-3">Oops! The page you're looking for seems to have vanished into the digital void.</p>
                           <p class="text-muted mb-4">It might have been moved, deleted, or never existed in the first place.</p>
                           <a href="/" class="btn btn-primary btn-lg">Back to Home</a>
                        </div>
                  </div>
               </div>
            </div>
}


export default NotFound;