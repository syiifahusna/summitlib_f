const MessageModal = ({ show, handleClose, title, children }) =>{
    if (!show) return null;

    return (
        <>
          <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
    
                <div className="modal-header">
                  <h5 className="modal-title">{title}</h5>
                </div>
    
                <div className="modal-body">
                  {children}
                </div>
    
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>
                    Close
                  </button>
                </div>
    
              </div>
            </div>
          </div>
          {/* Backdrop */}
          <div className="modal-backdrop fade show"></div>
        </>
      );
}

export default MessageModal;