import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Square, 
  Diamond, 
  FileText, 
  Settings, 
  Zap,
  Users,
  BarChart3,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Play className="w-8 h-8 text-green-500" />,
      title: "Start Nodes",
      description: "Begin your flowchart with clear starting points"
    },
    {
      icon: <Square className="w-8 h-8 text-blue-500" />,
      title: "Process Nodes",
      description: "Define processing steps and actions"
    },
    {
      icon: <Diamond className="w-8 h-8 text-yellow-500" />,
      title: "Decision Nodes",
      description: "Create branching logic and decision points"
    },
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: "End Nodes",
      description: "Mark clear endpoints in your flow"
    }
  ];

  const stats = [
    { label: "Flowcharts Created", value: "1,234", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Active Users", value: "567", icon: <Users className="w-5 h-5" /> },
    { label: "Templates", value: "89", icon: <FileText className="w-5 h-5" /> },
    { label: "Success Rate", value: "98%", icon: <Zap className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Flowchart
              <span className="gradient-text"> Mapper</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Create beautiful, interactive flowcharts with our modern, intuitive design tools. 
              Perfect for process mapping, decision trees, and workflow visualization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/flowchart"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4"
              >
                Start Creating
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/templates"
                className="btn-secondary inline-flex items-center gap-2 px-8 py-4"
              >
                Browse Templates
                <FileText className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to create professional flowcharts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-6"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join the community of successful flowchart creators
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Create Amazing Flowcharts?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start building your first flowchart in minutes with our intuitive drag-and-drop interface.
          </p>
          <Link
            to="/flowchart"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
