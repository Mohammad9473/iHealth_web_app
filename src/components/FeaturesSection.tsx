import {
  FaHeartbeat,
  FaRunning,
  FaAppleAlt,
  FaCalendarCheck,
  FaChartBar,
  FaUsers,
  FaDumbbell,
  FaPills,
  FaWeight,
  FaMobileAlt,
  FaCloudUploadAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaHeartbeat className="w-8 h-8" />,
    title: "Real-time Health Monitoring",
    description:
      "Continuous tracking of heart rate, blood pressure, and vital signs with AI-powered alerts",
    gradient: "from-red-500 to-purple-600",
  },
  {
    icon: <FaRunning className="w-8 h-8" />,
    title: "Smart Activity Tracking",
    description:
      "Accurate step counting, distance measurement, and calorie burn calculation",
    gradient: "from-green-500 to-purple-600",
  },
  {
    icon: <FaAppleAlt className="w-8 h-8" />,
    title: "Personalized Meal Plans",
    description:
      "AI-generated nutrition plans based on your biometric data and dietary preferences",
    gradient: "from-yellow-500 to-purple-600",
  },
  {
    icon: <FaDumbbell className="w-8 h-8" />,
    title: "Custom Workout Routines",
    description:
      "Personalized exercise programs that adapt to your progress and fitness goals",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: <FaPills className="w-8 h-8" />,
    title: "Supplement Recommendations",
    description:
      "Science-based supplement suggestions based on your health metrics and goals",
    gradient: "from-orange-500 to-purple-600",
  },
  {
    icon: <FaWeight className="w-8 h-8" />,
    title: "Biometric Data Analysis",
    description:
      "Comprehensive analysis of weight, BMI, body fat percentage, and muscle mass",
    gradient: "from-teal-500 to-purple-600",
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    title: "Health Progress Dashboard",
    description:
      "Beautiful visualizations and insights about your health journey",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Family & Group Tracking",
    description:
      "Add multiple users and track health metrics for your entire family",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: <FaCalendarCheck className="w-8 h-8" />,
    title: "Health Goal Setting",
    description:
      "Set and track personalized health goals with milestone celebrations",
    gradient: "from-emerald-500 to-purple-600",
  },
  {
    icon: <FaMobileAlt className="w-8 h-8" />,
    title: "Wearable Integration",
    description:
      "Sync with Apple Health, Google Fit, Fitbit, and other wearables",
    gradient: "from-cyan-500 to-purple-600",
  },
  {
    icon: <FaCloudUploadAlt className="w-8 h-8" />,
    title: "Health Data Export",
    description:
      "Export your health reports to share with healthcare professionals",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "HIPAA Compliant Security",
    description:
      "Your health data is encrypted and protected with enterprise-grade security",
    gradient: "from-rose-500 to-purple-600",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-purple-950" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Your Complete Health Companion
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            From biometric tracking to personalized wellness plans, we've built
            everything you need for a healthier lifestyle in one beautiful app.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group relative">
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                }}
              />

              <div className="relative glass-effect p-8 rounded-2xl h-full hover:border-purple-500/50 transition-all duration-300 group-hover:scale-[1.02]">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${feature.gradient} w-fit mb-6 group-hover:rotate-12 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-200 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-purple-300">{feature.description}</p>

                <div className="mt-6 pt-4 border-t border-purple-800/30">
                  <span className="text-sm text-purple-400">
                    Coming in v1.0
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Health Metrics Preview */}
        <div className="mt-20 p-8 rounded-3xl glass-effect border border-purple-500/30">
          <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
            Track Everything That Matters
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Steps", value: "10,234", icon: "👣" },
              { name: "Calories", value: "2,450", icon: "🔥" },
              { name: "Heart Rate", value: "72 BPM", icon: "❤️" },
              { name: "Sleep", value: "7.5h", icon: "😴" },
              { name: "Water", value: "2.1L", icon: "💧" },
              { name: "BMI", value: "22.4", icon: "⚖️" },
            ].map((metric, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-xl bg-purple-900/30"
              >
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-lg font-bold text-white">
                  {metric.value}
                </div>
                <div className="text-sm text-purple-300">{metric.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
