import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
<<<<<<< HEAD
import BookDetailPage from '../BookDetailPage/BookDetailPage';
=======
import 'bootstrap/dist/css/bootstrap.min.css';

>>>>>>> 393ea02949320f3b24a4a954e37dbb06d868f01b
export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
          {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
          <Route path="/*" element={<Navigate to="/orders/new" />} />
        <Route path="/book/:bookName" element={<BookDetailPage/>}/>
        </Routes>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
