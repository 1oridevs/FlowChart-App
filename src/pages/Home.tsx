import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Play, 
  Square, 
  Globe,
  Database,
  Code,
  Server,
  GitBranch,
  Zap,
  FileText, 
  Settings, 
  Users,
  BarChart3,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: "API Endpoints",
      description: "Design REST APIs and microservice communication"
    },
    {
      icon: <Database className="w-8 h-8 text-green-500" />,
      title: "Database Operations",
      description: "Map data flows and database interactions"
    },
    {
      icon: <Code className="w-8 h-8 text-purple-500" />,
      title: "Functions & Logic",
      description: "Visualize code functions and business logic"
    },
    {
      icon: <Server className="w-8 h-8 text-orange-500" />,
      title: "Services & Architecture",
      description: "Design system architecture and service dependencies"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-yellow-500" />,
      title: "Conditional Logic",
      description: "Create branching logic and decision trees"
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Events & Triggers",
      description: "Map event-driven architecture and triggers"
    }
  ];

  const stats = [
    { label: "System Diagrams", value: "2,847", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Developer Teams", value: "156", icon: <Users className="w-5 h-5" /> },
    { label: "API Templates", value: "42", icon: <FileText className="w-5 h-5" /> },
    { label: "Code Coverage", value: "94%", icon: <Zap className="w-5 h-5" /> }
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
              Developer
              <span className="gradient-text"> Flowchart</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Design system architectures, API flows, and code logic with developer-focused flowchart tools. 
              Perfect for software engineers, architects, and technical teams.
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
              Developer-Focused Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to design and document software systems
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            Ready to Design System Architecture?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start mapping your APIs, databases, and services with our developer-focused flowchart tools.
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
