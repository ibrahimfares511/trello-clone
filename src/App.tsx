// src/App.tsx
import { Link, Route, Routes } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { motion } from "framer-motion";
import { useCounterStore } from "./store/counterStore";

import { Button } from "@/components/ui/button";

const HomePage = () => <h2>Home Page</h2>;
const AboutPage = () => <h2>About Page</h2>;

const fetchTestData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  return response.data;
};

function App() {
  const { count, increment, decrement } = useCounterStore();

  // 2. اختبار TanStack Query + Axios
  const { data, isLoading, isError } = useQuery({
    queryKey: ["testData"],
    queryFn: fetchTestData,
  });

  return (
    // 3. اختبار Tailwind CSS
    <div className="min-h-screen bg-slate-900 p-8 text-white flex flex-col items-center gap-8">
      <h1 className="text-4xl font-bold text-cyan-400">
        Project Tech Stack Test
      </h1>

      {/* 4. اختبار React Router DOM */}
      <nav className="flex gap-4">
        <Link to="/" className="text-lg underline">
          Home
        </Link>
        <Link to="/about" className="text-lg underline">
          About
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <hr className="w-full border-slate-700" />

      {/* اختبار Zustand */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Zustand Test</h2>
        <p className="text-5xl my-4">{count}</p>
        <div className="flex gap-4">
          <Button onClick={increment}>Increment</Button>
          <Button variant="destructive" onClick={decrement}>
            Decrement
          </Button>
        </div>
      </div>

      <hr className="w-full border-slate-700" />

      {/* اختبار TanStack Query */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">TanStack Query Test</h2>
        {isLoading && <p className="text-yellow-400">Loading data...</p>}
        {isError && <p className="text-red-500">Error fetching data!</p>}
        {data && (
          <pre className="mt-2 bg-slate-800 p-4 rounded-md text-left text-green-400">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>

      <hr className="w-full border-slate-700" />

      {/* 5. اختبار Framer Motion */}
      <motion.div
        className="w-24 h-24 bg-purple-600 rounded-lg"
        animate={{
          scale: [1, 1.2, 1.2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
}

export default App;
