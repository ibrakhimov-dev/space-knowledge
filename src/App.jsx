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
import Verification from './components/Verification/Verification';
import ChangePassword from './components/ChangePassword/ChangePassword';
import Application from './components/Application/Application';
import UserProfile from './components/UserProfile/UserProfile';
import Account from './components/Account/Account';
import Error from './components/Error/Error';
import Comparison from './components/Detail/Comparison';
import Versus from './components/Versus/Versus';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState(1);
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
            <Route path='versus' element={<Versus />} />
            {
              role === 1 ? <>
                <Route path='submit-application' element={<Application />} />
                <Route path='account' element={<Account />} />
                <Route path='user-profile' element={<UserProfile />} />
              </> : <></>
            }
            <Route path='detail' element={<Detail/>}> 
              <Route index element={<Description />} />
              <Route path='description' element={<Description />} />
              <Route path='comment' element={<Comment />} />
              <Route path='certificate' element={<Certificate />} />
              <Route path='comparison' element={<Comparison />} />
              <Route path='leave-application' element={<LeaveApplication />} />
            </Route>
          </Route>
          <Route path='*' element={<Error />} />
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='verification' element={<Verification />} />
          <Route path='change-password' element={<ChangePassword />} />
          {
            role === 2 ? <>
              <Route path='institution-admin' element={<Sidebar />}> 
                <Route index element={<Dashboard />} />
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='profile' element={<Profile />} />
                <Route path='my-advertising' element={<MyAdvertising />} />
                <Route path='create-Advertising' element={<CreateAdvertising />} />
                <Route path='increase-efficiency' element={<IncreaseEfficiency />} />
              </Route>
            </>: <></>
          }
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
