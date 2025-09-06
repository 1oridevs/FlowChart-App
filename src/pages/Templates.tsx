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
  Zap,
  Code,
  Database,
  Shield,
  Server
} from 'lucide-react';
import { templates, type FlowchartTemplate } from '../data/templates';
import { useFlowchartStore } from '../store/flowchartStore';

const Templates = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { setNodes, setEdges } = useFlowchartStore();

  const categories = [
    { id: 'all', name: 'All Templates', icon: <FileText className="w-4 h-4" />, count: templates.length },
    { id: 'API', name: 'API', icon: <Code className="w-4 h-4" />, count: templates.filter(t => t.category === 'API').length },
    { id: 'Architecture', name: 'Architecture', icon: <Server className="w-4 h-4" />, count: templates.filter(t => t.category === 'Architecture').length },
    { id: 'Data', name: 'Data', icon: <Database className="w-4 h-4" />, count: templates.filter(t => t.category === 'Data').length },
    { id: 'Security', name: 'Security', icon: <Shield className="w-4 h-4" />, count: templates.filter(t => t.category === 'Security').length },
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleUseTemplate = (template: FlowchartTemplate) => {
    setNodes(template.nodes);
    setEdges(template.edges);
    // Redirect to flowchart page
    window.location.href = '/flowchart';
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'API': return 'bg-gradient-to-br from-blue-500 to-blue-600';
      case 'Architecture': return 'bg-gradient-to-br from-purple-500 to-purple-600';
      case 'Data': return 'bg-gradient-to-br from-green-500 to-green-600';
      case 'Security': return 'bg-gradient-to-br from-red-500 to-red-600';
      default: return 'bg-gradient-to-br from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Developer Templates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Pre-built flowchart templates for common developer scenarios. Jumpstart your system design and architecture documentation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search developer templates..."
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
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {category.count}
                  </span>
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
              <div className={`h-48 ${getCategoryGradient(template.category)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-200" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                    {template.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {template.name}
                  </h3>
                  <p className="text-white/90 text-sm line-clamp-2">
                    {template.description}
                  </p>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {getCategoryGradient(template.category).includes('blue') && <Code className="w-4 h-4 text-blue-500" />}
                  {getCategoryGradient(template.category).includes('purple') && <Server className="w-4 h-4 text-purple-500" />}
                  {getCategoryGradient(template.category).includes('green') && <Database className="w-4 h-4 text-green-500" />}
                  {getCategoryGradient(template.category).includes('red') && <Shield className="w-4 h-4 text-red-500" />}
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {template.category}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {template.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md">
                      +{template.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Node Count */}
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Target className="w-4 h-4" />
                    {template.nodes.length} nodes
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    {template.edges.length} connections
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleUseTemplate(template)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    Use Template
                  </button>
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
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
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