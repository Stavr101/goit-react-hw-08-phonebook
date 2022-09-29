import MyPhonebook from './Phonebook/Phonebook.jsx';
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        color: '#010101',
      }}
    >
      {/* React homework template */}
      <MyPhonebook />
    </div>
  );
};
