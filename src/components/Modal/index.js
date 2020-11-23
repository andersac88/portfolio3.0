import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
	return ReactDOM.createPortal(
		<div onClick={props.onDismiss} className="ui dimmer modals visible active">
			<div
				onClick={(event) => {
					event.stopPropagation();
				}}
				className="ui standard modal visible active"
			>
				<div className="header">DELETE FACEBOOK</div>
				<div className="content">Content</div>
				<div className="actions">Test</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
};

export default Modal;
