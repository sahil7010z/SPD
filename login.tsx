import { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
    // TODO: Call backend /api/v1/auth/login with fetch/axios
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-lime-50 to-emerald-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <Leaf className="text-green-600 w-8 h-8" />
          <h1 className="text-2xl font-bold text-green-700">DealDrop Grocery</h1>
        </div>

        <p className="text-center text-gray-500 mb-6">
          Fresh deals for your daily needs. Login to continue.
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-xl"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-2"
          >
            Login
          </Button>
        </form>

        {/* Links */}
        <div className="flex items-center justify-between mt-6 text-sm">
          <a href="#" className="text-green-600 hover:underline">Forgot password?</a>
          <a href="#" className="text-green-600 hover:underline">Create account</a>
        </div>

        {/* Footer slogan */}
        <div className="mt-8 flex justify-center gap-2 text-gray-500">
          <ShoppingCart className="w-5 h-5" />
          <span className="text-sm">Shop smart, save more!</span>
        </div>
      </motion.div>
    </div>
  );
}
