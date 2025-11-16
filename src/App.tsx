import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Content from "./dummyContent";

// Main App Component
export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollThreshold = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isScrolled={isScrolled} />

      {/* Dummy content to make the page scrollable */}

        <Content />
        {/* This tall section ensures the page is scrollable */}
        <div className="h-screen bg-gray-200 rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page Section 1</h2>
          <p>This is a tall section of content. Keep scrolling...</p>
        </div>

        <div className="h-screen bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Page Section 2</h2>
          <p>
            More content to fill up space and demonstrate the scrolling effect
            on the navigation menu.
          </p>
        </div>

        <div className="h-screen bg-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Page Section 3</h2>
          <p>You've reached the end of the scrollable content.</p>
        </div>
    </>
  );
}
