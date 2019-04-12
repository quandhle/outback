import React, {Component} from 'react';
import './modal.scss';

class Modal extends Component {
    render() {
        if (this.props.isOpen) {
            return (
                <div className="ws-modal-content">
                    <h1 className="center">This is a Modal</h1>

                    <div className="ws-modal-actions center">
                        <button onClick={this.props.close}>Okay</button>
                    </div>
                </div>
            )
        }

        return null;
    }
}