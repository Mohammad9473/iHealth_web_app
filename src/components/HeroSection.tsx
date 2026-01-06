export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/50 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow" />

      <div className="relative max-w-6xl mx-auto px-4 text-center">
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-800/30 to-purple-600/30 rounded-full border border-purple-500/50 mb-8">
          <span className="flex items-center text-purple-200">
            <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse mr-2"></span>
            Your Health Journey Starts Here
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-8 gradient-text leading-tight">
          Track. Analyze.
          <span className="block text-white">Transform Your Health</span>
        </h1>

        <p className="text-xl md:text-2xl text-purple-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          The all-in-one health tracking app that combines biometric monitoring,
          personalized meal plans, workout routines, and AI-powered health
          insights for iOS and Android.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#features"
            className="group px-8 py-4 bg-gradient-to-r from-red-600 to-purple-700 hover:from-red-700 hover:to-purple-800 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 flex items-center"
          >
            <span className="mr-3 group-hover:rotate-12 transition-transform">
              🏃‍♂️
            </span>
            Explore Health Features
          </a>
          <a
            href="#waitlist"
            className="group px-8 py-4 glass-effect hover:bg-purple-900/40 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center"
          >
            <span className="mr-3 group-hover:animate-bounce">❤️</span>
            Join Health Waitlist
          </a>
        </div>

        {/* Health Stats Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-purple-900/30 border border-purple-800/50">
            <div className="text-3xl font-bold text-white">24/7</div>
            <div className="text-purple-300">Health Monitoring</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-purple-900/30 border border-purple-800/50">
            <div className="text-3xl font-bold text-white">AI</div>
            <div className="text-purple-300">Personalized Plans</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-purple-900/30 border border-purple-800/50">
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-purple-300">Health Metrics</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-purple-900/30 border border-purple-800/50">
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-purple-300">Family Users</div>
          </div>
        </div>
      </div>
    </section>
  );
}
