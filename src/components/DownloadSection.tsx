import {
  FaApple,
  FaGooglePlay,
  FaEnvelope,
  FaClock,
  FaHeartbeat,
} from "react-icons/fa";

export default function DownloadSection() {
  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thanks for joining our health journey! We'll notify you when iHealthSync launches."
    );
  };

  return (
    <section id="download" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Your Health Journey Starts Here
          </h2>
          <p className="text-xl text-purple-200 mb-10">
            Coming soon to iOS and Android. Be the first to transform your
            health.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* iOS Coming Soon */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative glass-effect p-8 rounded-3xl">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-black">
                  <FaApple size={32} className="text-gray-300" />
                </div>
                <div className="ml-6">
                  <div className="text-sm text-purple-300">Coming Soon to</div>
                  <div className="text-3xl font-bold">Apple App Store</div>
                </div>
              </div>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Apple Health integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Optimized for iPhone & iPad
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Apple Watch support
                </li>
              </ul>
            </div>
            <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-full text-sm font-semibold">
              iOS 15+
            </div>
          </div>

          {/* Android Coming Soon */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative glass-effect p-8 rounded-3xl">
              <div className="flex items-center mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-900 to-black">
                  <FaGooglePlay size={32} className="text-green-400" />
                </div>
                <div className="ml-6">
                  <div className="text-sm text-purple-300">Coming Soon to</div>
                  <div className="text-3xl font-bold">Google Play</div>
                </div>
              </div>
              <ul className="space-y-3 text-purple-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Google Fit integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Wear OS & Android Wear support
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  All Android devices supported
                </li>
              </ul>
            </div>
            <div className="absolute -top-3 -right-3 px-4 py-2 bg-gradient-to-r from-green-500 to-purple-600 rounded-full text-sm font-semibold">
              Android 10+
            </div>
          </div>
        </div>

        {/* Notify Me Section */}
        <div id="waitlist" className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 rounded-3xl blur opacity-30 animate-pulse-slow"></div>
          <div className="relative bg-gradient-to-br from-purple-900/50 to-red-900/30 rounded-3xl border border-purple-500/30 p-10 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <div className="flex items-center mb-4">
                  <FaHeartbeat className="text-red-400 mr-4" size={28} />
                  <h3 className="text-2xl font-bold">
                    Join Our Health Revolution
                  </h3>
                </div>
                <p className="text-purple-200 mb-6">
                  Be among the first to transform your health. Get notified when
                  we launch and receive exclusive early access offers.
                </p>
                <div className="flex items-center text-sm text-purple-300">
                  <FaClock className="mr-2" />
                  <span>Expected Launch: Spring 2026</span>
                </div>
              </div>

              {/* <div className="md:w-1/3">
                <form onSubmit={handleNotifySubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-700 hover:to-purple-700 rounded-lg font-semibold transition-all flex items-center justify-center"
                  >
                    <FaEnvelope className="mr-2" />
                    Notify Me
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>

        {/* Development Progress */}
        <div className="mt-20 p-8 rounded-3xl glass-effect max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Development Progress
          </h3>
          <div className="space-y-6">
            {[
              {
                label: "Core Health Algorithms",
                progress: 90,
                color: "from-red-500 to-purple-600",
              },
              {
                label: "Mobile App UI/UX",
                progress: 85,
                color: "from-purple-500 to-blue-600",
              },
              {
                label: "Biometric Integration",
                progress: 75,
                color: "from-green-500 to-purple-600",
              },
              {
                label: "AI Meal Planning",
                progress: 65,
                color: "from-yellow-500 to-purple-600",
              },
              {
                label: "Workout Database",
                progress: 80,
                color: "from-orange-500 to-purple-600",
              },
            ].map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-purple-200">{item.label}</span>
                  <span className="text-purple-300">{item.progress}%</span>
                </div>
                <div className="w-full bg-purple-900/30 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                    style={{ width: `${item.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
