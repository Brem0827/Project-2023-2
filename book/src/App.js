import UserContextProvider from '@contexts/UserContext'
import AppRouter from '@routes'

function App() {
  return (
    <UserContextProvider>
      <AppRouter />
    </UserContextProvider>
  );
}

export default App;
