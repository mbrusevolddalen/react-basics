import Modal from '../components/Modal';
import useModal from '../components/Modal/useModal';
import useCounter from './useCounter';

function CounterComponent() {
  const { count, history, total, setCount } = useCounter();
  const { closeModal, isModalOpen, openModal } = useModal();

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <div className="flex gap-4">
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
