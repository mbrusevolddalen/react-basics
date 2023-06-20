import useCounter from './useCounter';
import Modal from '../components/Modal';
import useModal from '../components/Modal/useModal';

function CounterComponent() {
  const {
    count, isNegative, history, increment, decrement, total, isPending,
  } = useCounter();
  const { closeModal, isModalOpen, openModal } = useModal();

  return (
    <div>
      <p>
        Count:
        {count}
      </p>
      <div>
        <button type="button" onClick={increment}>Increase</button>
        <button type="button" onClick={decrement}>Decrease</button>
        <button type="button" onClick={openModal}>Show History</button>
      </div>
      {isNegative && <p className="bg-red-400 text-white">No negative values!</p>}
      {isPending && <p>Loading...</p>}
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
