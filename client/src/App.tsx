import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/login";
import { ProtectedRoute } from "./pages/protected.route";
import Post from "./pages/post";
import { Toaster } from "./components/ui/sonner";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Signup from "./pages/signup";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/create-post" 
              element={
                <ProtectedRoute>
                  <Post />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}