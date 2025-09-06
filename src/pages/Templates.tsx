import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  Star,
  Clock,
  Users,
  FileText,
  Workflow,
  GitBranch,
  Target,
  Zap
} from 'lucide-react';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Templates', icon: <FileText className="w-4 h-4" /> },
    { id: 'business', name: 'Business Process', icon: <Workflow className="w-4 h-4" /> },
    { id: 'decision', name: 'Decision Trees', icon: <GitBranch className="w-4 h-4" /> },
    { id: 'workflow', name: 'Workflows', icon: <Target className="w-4 h-4" /> },
    { id: 'system', name: 'System Design', icon: <Zap className="w-4 h-4" /> }
  ];

  const templates = [
    {
      id: 1,
      title: "Customer Onboarding Process",
      description: "Complete customer onboarding workflow from signup to first value",
      category: "business",
      difficulty: "Beginner",
      downloads: 1234,
      rating: 4.8,
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      tags: ["onboarding", "customer", "process"]
    },
    {
      id: 2,
      title: "Decision Tree for Product Features",
      description: "Structured decision making process for feature prioritization",
      category: "decision",
      difficulty: "Intermediate",
      downloads: 892,
      rating: 4.6,
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      tags: ["product", "features", "decision"]
    },
    {
      id: 3,
      title: "Software Development Workflow",
      description: "End-to-end development process from planning to deployment",
      category: "workflow",
      difficulty: "Advanced",
      downloads: 2156,
      rating: 4.9,
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      tags: ["development", "agile", "deployment"]
    },
    {
      id: 4,
      title: "User Authentication Flow",
      description: "Complete authentication system design and user journey",
      category: "system",
      difficulty: "Intermediate",
      downloads: 1789,
      rating: 4.7,
      image: "bg-gradient-to-br from-purple-500 to-pink-600",
      tags: ["auth", "security", "user"]
    },
    {
      id: 5,
      title: "E-commerce Checkout Process",
      description: "Optimized checkout flow to reduce cart abandonment",
      category: "business",
      difficulty: "Beginner",
      downloads: 1456,
      rating: 4.5,
      image: "bg-gradient-to-br from-indigo-500 to-blue-600",
      tags: ["ecommerce", "checkout", "conversion"]
    },
    {
      id: 6,
      title: "API Integration Architecture",
      description: "Microservices integration patterns and data flow",
      category: "system",
      difficulty: "Advanced",
      downloads: 987,
      rating: 4.8,
      image: "bg-gradient-to-br from-teal-500 to-green-600",
      tags: ["api", "microservices", "architecture"]
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'Advanced': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Flowchart Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Choose from our collection of professionally designed templates to jumpstart your flowchart creation
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.icon}
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 overflow-hidden group"
            >
              {/* Template Preview */}
              <div className={`h-48 ${template.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-200" />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(template.difficulty)}`}>
                    {template.difficulty}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {template.title}
                  </h3>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {template.downloads.toLocaleString()}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    {template.rating}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    to={`/flowchart?template=${template.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Use Template
                  </Link>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No templates found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Templates;
