import React from 'react';
import { X, Command, Shift } from 'lucide-react';

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const shortcuts = [
    {
      category: 'Node Types',
      items: [
        { keys: ['Ctrl', 'Shift', 'A'], description: 'Select API Node' },
        { keys: ['Ctrl', 'Shift', 'D'], description: 'Select Database Node' },
        { keys: ['Ctrl', 'Shift', 'F'], description: 'Select Function Node' },
        { keys: ['Ctrl', 'Shift', 'S'], description: 'Select Service Node' },
        { keys: ['Ctrl', 'Shift', 'C'], description: 'Select Condition Node' },
        { keys: ['Ctrl', 'Shift', 'E'], description: 'Select Event Node' },
      ]
    },
    {
      category: 'Actions',
      items: [
        { keys: ['Ctrl', 'N'], description: 'Add New Node' },
        { keys: ['Ctrl', 'S'], description: 'Save/Export Flowchart' },
        { keys: ['Ctrl', 'Z'], description: 'Clear Flowchart' },
        { keys: ['Ctrl', 'A'], description: 'Select All Nodes' },
        { keys: ['Delete'], description: 'Delete Selected Nodes' },
        { keys: ['Escape'], description: 'Deselect All Nodes' },
      ]
    }
  ];

  const getKeyIcon = (key: string) => {
    if (key === 'Ctrl' || key === 'Command') {
      return <Command className="w-3 h-3" />;
    }
    if (key === 'Shift') {
      return <Shift className="w-3 h-3" />;
    }
    return <span className="text-xs font-mono">{key}</span>;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Keyboard Shortcuts</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {shortcuts.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between py-2">
                    <span className="text-gray-700 dark:text-gray-300">
                      {item.description}
                    </span>
                    <div className="flex items-center gap-1">
                      {item.keys.map((key, keyIndex) => (
                        <React.Fragment key={keyIndex}>
                          <div className="flex items-center gap-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-medium">
                            {getKeyIcon(key)}
                            <span className="font-mono">{key}</span>
                          </div>
                          {keyIndex < item.keys.length - 1 && (
                            <span className="text-gray-400 mx-1">+</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            Press <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-600 rounded text-xs">?</kbd> to toggle this help
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcutsModal;
