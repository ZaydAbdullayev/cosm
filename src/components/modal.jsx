import "./index.scss";

export const GalacticModal = ({ isOpen, onClose, title, children, btn_t }) => {
  if (!isOpen) return null;

  return (
    <div className="galactic-modal-backdrop">
      <div className="galactic-modal-box frame">
        <div className="galactic-modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="galactic-modal-body">{children}</div>
        <div className="galactic-modal-footer">
          <span className="mini-card" onClick={onClose}>
            <span>{btn_t}</span>
          </span>
        </div>
        <span className="corner-right-bottom"></span>
        <span className="corner-left-bottom"></span>
      </div>
    </div>
  );
};
