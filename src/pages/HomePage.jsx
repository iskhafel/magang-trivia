import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <Header />

      <section className="bg-slate-800">
        <div className="container mx-auto px-6 py-12 flex flex-col items-center justify-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white animate-pulse">
              DOT TRIVIA
            </h1>
            <p className="mt-4 text-lg text-white max-w-md mx-auto">
              Discover our amazing trivia app that will challenge your knowledge
              and help you grow. Are you ready for the quiz?
            </p>
          </div>
          {/* Decorative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold">Fast & Fun</h3>
              <p className="mt-2 text-gray-700">
                Quick trivia challenges that are both entertaining and
                educational.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold">Real-Time Scores</h3>
              <p className="mt-2 text-gray-700">
                Track your progress and compare with friends in real-time.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transform hover:scale-105 transition duration-300">
              <h3 className="text-xl font-bold">Various Topics</h3>
              <p className="mt-2 text-gray-700">
                Choose from a wide range of topics to match your interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Why Choose DOT TRIVIA?
            </h2>
            <p className="mt-4 text-gray-600">
              We offer engaging quizzes, real-time score tracking, and endless
              learning opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Engaging Quizzes
              </h3>
              <p className="mt-4 text-gray-600">
                Our quizzes are designed to keep you hooked with dynamic
                questions and a fun learning experience.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Interactive UI
              </h3>
              <p className="mt-4 text-gray-600">
                Enjoy a sleek, responsive design that looks great on all
                devices.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800">
                Learn & Compete
              </h3>
              <p className="mt-4 text-gray-600">
                Challenge yourself and compete with friends to see who knows the
                most.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
