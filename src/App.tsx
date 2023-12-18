import { QueryClient, QueryClientProvider } from 'react-query';
import { ConfigProvider } from 'antd';
import UsersLayout from './components/UsersLayout';
import { configProviderTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={configProviderTheme}>
        <UsersLayout />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
