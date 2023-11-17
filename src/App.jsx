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
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
