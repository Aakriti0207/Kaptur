export default function Login() {
  const handleLogin = () => {
    window.location.href = "http://localhost:8000/api/v1/auth/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-espresso-canvas">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-semibold text-caramel mb-2">kaptur</h1>
        <p className="text-sm text-espresso-textSecondary mb-8">Your job search, in one place.</p>
        <button
          onClick={handleLogin}
          className="bg-caramel text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-caramel-dark transition-colors"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
