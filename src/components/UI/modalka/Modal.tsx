import { useState } from 'react';
import scss from './Modal.module.scss';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
	const [isClosing, setIsClosing] = useState(false);

	const handleClose = () => {
		setIsClosing(true);
		setTimeout(() => {
			setIsClosing(false);
			onClose();
		}, 300);
	};

	if (!isOpen && !isClosing) return null;

	return (
		<div
			className={`${scss.modal} ${isOpen ? scss.open : ''} ${
				isClosing ? scss.closing : ''
			}`}
		>
			<div className={scss.modal_overlay} onClick={handleClose}></div>
			<div className={scss.modal_content}>
				{children}
				<button className={scss.close_btn} onClick={handleClose}>
					Закрыть
				</button>
			</div>
		</div>
	);
};

export default Modal;
