
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CourseListPage from './pages/CourseListPage';
import CourseDetailPage from './pages/CourseDetailPage';
import MyLearningPage from './pages/MyLearningPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/core/Layout';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/CartContext';
import LessonPlayerPage from './pages/LessonPlayerPage';
import { CurrencyProvider } from './contexts/CurrencyContext'; // Import CurrencyProvider

const App: React.FC = () => {
  return (
    <CurrencyProvider> {/* Wrap with CurrencyProvider */}
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CourseListPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            <Route path="/courses/:courseId/lessons/:lessonId/preview" element={<LessonPlayerPage />} />
            <Route path="/my-learning" element={<MyLearningPage />} />
            <Route path="/cart" element={<CartPage />} />
            {/* Add more routes here, e.g., profile */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CartProvider>
    </CurrencyProvider>
  );
};

export default App;
