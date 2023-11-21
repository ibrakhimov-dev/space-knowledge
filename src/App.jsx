import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { themeOptions } from './style/Variables';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Search from './components/Search/Search';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Like from './components/Like/Like';
import Detail from './components/Detail/Detail';
import Description from './components/Detail/Description';
import Comment from './components/Detail/Comment';
import Certificate from './components/Detail/Certificate';
import LeaveApplication from './components/Detail/LeaveApplication';
import Sidebar from './components/InstitutionAdmin/Sidebar/Sidebar';
import Dashboard from './components/InstitutionAdmin/Dashboard/Dashboard';
import Profile from './components/InstitutionAdmin/Profile/Profile';
import IncreaseEfficiency from './components/InstitutionAdmin/IncreaseeEfficiency/IncreaseEfficiency';
import MyAdvertising from './components/InstitutionAdmin/MyAdvertising/MyAdvertising';
import CreateAdvertising from './components/InstitutionAdmin/CreateAdvertising/CreateAdvertising';

function App() {
  return (
    <ThemeProvider theme={themeOptions}>
      <CssBaseline />
      <BrowserRouter>
        <Routes >
          <Route path='' element={<Header />}> 
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='search' element={<Search />} />
            <Route path='like' element={<Like />} />
            <Route path='detail' element={<Detail/>}> 
              <Route index element={<Description />} />
              <Route path='description' element={<Description />} />
              <Route path='comment' element={<Comment />} />
              <Route path='certificate' element={<Certificate />} />
              <Route path='leave-application' element={<LeaveApplication />} />
            </Route>
          </Route>
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='institution-admin' element={<Sidebar />}> 
            <Route index element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='my-advertising' element={<MyAdvertising />} />
            <Route path='create-Advertising' element={<CreateAdvertising />} />
            <Route path='inc-efficiency' element={<IncreaseEfficiency />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
