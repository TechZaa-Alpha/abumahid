import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./pages/Works";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";
import SocialSidebar from "./components/SocialSidebar";
import DecorativeElements from "./components/DecorativeElements";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative min-h-screen">
          <SocialSidebar />
          <Navigation />
          <DecorativeElements />
          <main className="relative z-10 lg:ml-12">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/works" element={<Works />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
