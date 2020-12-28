import React, {useContext} from 'react';
import {AlertContext} from "../context/alert/AlertContext";

const Alert = () => {
  const {alert, hide} = useContext(AlertContext)

  if (!alert) return null

  return (
    <div
      className={`alert alert-${alert.type || 'secondary' } alert-dismissible d-flex`}
      role="alert"
    >
      { alert.text }
      <button
        type="button"
        className="btn-close ml-auto"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;