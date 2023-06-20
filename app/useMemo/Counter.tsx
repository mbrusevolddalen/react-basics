import { useState } from 'react';
import Modal from '../components/Modal';
import useCounter from './useCounter';

function CounterComponent() {
  const {
    count, history, total, setCount,
  } = useCounter();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <div>
        <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
        <button type="button" onClick={() => setCount(count - 1)}>Decrease</button>
        <button type="button" onClick={openModal}>Show History</button>
      </div>
      <p>
        Total of all counts:
        {total}
      </p>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>History</h2>
        <p>{history.join(', ')}</p>
      </Modal>
    </div>
  );
}

export default CounterComponent;
