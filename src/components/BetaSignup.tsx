import {
  FaFlask,
  FaUserMd,
  FaStethoscope,
  FaClipboardCheck,
} from "react-icons/fa";

export default function BetaSignup() {
  const handleBetaSignup = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Thank you for your interest in iHealthSync Beta! We'll contact qualified testers soon."
    );
  };

  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-red-900/20 via-purple-900/30 to-blue-900/20 rounded-3xl border border-purple-500/30 p-10 md:p-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-red-500 to-purple-600 mr-4">
                  <FaStethoscope size={24} />
                </div>
                <h3 className="text-3xl font-bold gradient-text">
                  Become a Beta Tester
                </h3>
              </div>

              <p className="text-purple-200 mb-8 text-lg leading-relaxed">
                Join our exclusive beta testing program and help shape the
                future of health tracking. As a beta tester, you'll get early
                access to all features and work directly with our development
                team.
              </p>

              <div className="space-y-5">
                <div className="flex items-start">
                  <FaUserMd className="text-red-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">Early Access</div>
                    <div className="text-purple-300">
                      Be among the first to use iHealthSync
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaClipboardCheck className="text-green-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">
                      Influence Development
                    </div>
                    <div className="text-purple-300">
                      Your feedback directly shapes the app
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaFlask className="text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white">
                      Exclusive Perks
                    </div>
                    <div className="text-purple-300">
                      Free premium subscription for testers
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              {/* <form onSubmit={handleBetaSignup} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-purple-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-purple-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-black/50 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-purple-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black/50 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-purple-300 mb-2">
                    Primary Platform
                  </label>
                  <select
                    className="w-full px-4 py-3 bg-black/50 border border-purple-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your device
                    </option>
                    <option value="ios">iPhone / iPad</option>
                    <option value="android">Android Phone / Tablet</option>
                    <option value="both">Both</option>
                    <option value="wearable">Smartwatch / Wearable</option>
                  </select>
                </div>

                <div>
                  <label className="block text-purple-300 mb-2">
                    Health Interests
                  </label>
                  <div className="space-y-2">
                    {[
                      "Fitness Tracking",
                      "Nutrition Planning",
                      "Weight Management",
                      "Heart Health",
                      "Sleep Tracking",
                      "Family Health",
                    ].map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          className="mr-3 rounded bg-purple-900 border-purple-700"
                        />
                        <span className="text-purple-200">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 hover:from-red-700 hover:via-purple-700 hover:to-blue-700 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02]"
                >
                  Apply for Beta Access
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
