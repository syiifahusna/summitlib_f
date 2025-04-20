 const NotFound = () => {
    return <div className="container py-5">
               <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6">
                        <div className="card shadow text-center p-5">
                           <h1 className="display-1 fw-bold">404</h1>
                           <hr className="mx-auto w-25 mb-4"></hr>
                           <h2 className="mb-3">Page Not Found</h2>
                           <p className="lead mb-3">Oops! The page you're looking for seems to have vanished into the digital void.</p>
                           <p className="text-muted mb-4">It might have been moved, deleted, or never existed in the first place.</p>
                           <a href="/" className="btn btn-primary btn-lg">Back to Home</a>
                        </div>
                  </div>
               </div>
            </div>
}


export default NotFound;