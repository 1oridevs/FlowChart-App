import React, { useState } from 'react';
import { 
  User, 
  Palette, 
  Bell, 
  Shield, 
  Download, 
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff,
  Sun,
  Moon,
  Monitor,
  Globe,
  Lock,
  Key,
  Database,
  HardDrive
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
    marketing: false
  });

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User className="w-5 h-5" /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette className="w-5 h-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="w-5 h-5" /> },
    { id: 'privacy', label: 'Privacy', icon: <Shield className="w-5 h-5" /> },
    { id: 'data', label: 'Data', icon: <Database className="w-5 h-5" /> }
  ];

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const handleExportData = () => {
    // TODO: Implement data export
    console.log('Exporting data...');
  };

  const handleImportData = () => {
    // TODO: Implement data import
    console.log('Importing data...');
  };

  const handleDeleteAccount = () => {
    // TODO: Implement account deletion
    console.log('Deleting account...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage your account preferences and application settings
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-lg backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-8">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Profile Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          defaultValue="John"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          defaultValue="Doe"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          defaultValue="Acme Corp"
                          className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Save className="w-4 h-4 inline mr-2" />
                      Save Changes
                    </button>
                  </div>
                </div>
              )}

              {/* Appearance Tab */}
              {activeTab === 'appearance' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Appearance Settings
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                          Theme
                        </label>
                        <div className="grid grid-cols-3 gap-4">
                          <button
                            onClick={() => setIsDarkMode(false)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                              !isDarkMode
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <Sun className="w-8 h-8 mx-auto mb-2 text-yellow-500" />
                            <div className="text-sm font-medium">Light</div>
                          </button>
                          <button
                            onClick={() => setIsDarkMode(true)}
                            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                              isDarkMode
                                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }`}
                          >
                            <Moon className="w-8 h-8 mx-auto mb-2 text-blue-500" />
                            <div className="text-sm font-medium">Dark</div>
                          </button>
                          <button className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200">
                            <Monitor className="w-8 h-8 mx-auto mb-2 text-gray-500" />
                            <div className="text-sm font-medium">System</div>
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                          Language
                        </label>
                        <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>English</option>
                          <option>Spanish</option>
                          <option>French</option>
                          <option>German</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Notification Preferences
                    </h2>
                    
                    <div className="space-y-4">
                      {Object.entries(notifications).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {key === 'email' && 'Receive notifications via email'}
                              {key === 'push' && 'Receive push notifications'}
                              {key === 'updates' && 'Get notified about app updates'}
                              {key === 'marketing' && 'Receive marketing communications'}
                            </div>
                          </div>
                          <button
                            onClick={() => handleNotificationChange(key, !value)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              value ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                value ? 'translate-x-6' : 'translate-x-1'
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Privacy Tab */}
              {activeTab === 'privacy' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Privacy & Security
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Lock className="w-6 h-6 text-green-500" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Password
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Last changed 30 days ago
                        </p>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Change Password
                        </button>
                      </div>

                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Key className="w-6 h-6 text-blue-500" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Two-Factor Authentication
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Add an extra layer of security to your account
                        </p>
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                          Enable 2FA
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Data Tab */}
              {activeTab === 'data' && (
                <div className="space-y-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Data Management
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Download className="w-6 h-6 text-blue-500" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Export Data
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Download all your flowcharts and data in JSON format
                        </p>
                        <button
                          onClick={handleExportData}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Export All Data
                        </button>
                      </div>

                      <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <div className="flex items-center gap-3 mb-4">
                          <Upload className="w-6 h-6 text-green-500" />
                          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Import Data
                          </h3>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Import flowcharts from a JSON file
                        </p>
                        <button
                          onClick={handleImportData}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Import Data
                        </button>
                      </div>

                      <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                        <div className="flex items-center gap-3 mb-4">
                          <Trash2 className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-semibold text-red-900 dark:text-red-100">
                            Delete Account
                          </h3>
                        </div>
                        <p className="text-red-700 dark:text-red-300 mb-4">
                          Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <button
                          onClick={handleDeleteAccount}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                          Delete Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
