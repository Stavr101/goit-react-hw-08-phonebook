import ErrorBoundary from './ErrorBoundary/ErrorBoundary.jsx';
import MyPhonebook from './Phonebook/Phonebook.jsx';
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',

        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      <ErrorBoundary>
        <MyPhonebook />
      </ErrorBoundary>
    </div>
  );
};
