import { useEffect } from 'react';
import { useFlowchartStore } from '../store/flowchartStore';

export const useKeyboardShortcuts = () => {
  const { 
    selectedNodeType, 
    setSelectedNodeType, 
    addNode, 
    clearFlowchart,
    nodes,
    setNodes 
  } = useFlowchartStore();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent shortcuts when typing in inputs
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      const { key, ctrlKey, metaKey, shiftKey } = event;
      const isModifier = ctrlKey || metaKey;

      // Node type shortcuts
      if (isModifier && shiftKey) {
        switch (key) {
          case 'A':
            event.preventDefault();
            setSelectedNodeType('api');
            break;
          case 'D':
            event.preventDefault();
            setSelectedNodeType('database');
            break;
          case 'F':
            event.preventDefault();
            setSelectedNodeType('function');
            break;
          case 'S':
            event.preventDefault();
            setSelectedNodeType('service');
            break;
          case 'C':
            event.preventDefault();
            setSelectedNodeType('condition');
            break;
          case 'E':
            event.preventDefault();
            setSelectedNodeType('event');
            break;
        }
      }

      // Action shortcuts
      if (isModifier) {
        switch (key) {
          case 'n':
            event.preventDefault();
            // Add node at center of viewport
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            addNode({
              type: selectedNodeType,
              position: { x: centerX - 100, y: centerY - 100 },
              data: { label: `${selectedNodeType.charAt(0).toUpperCase() + selectedNodeType.slice(1)} Node` },
            });
            break;
          case 's':
            event.preventDefault();
            // Save/Export
            const { nodes, edges } = useFlowchartStore.getState();
            const data = { 
              nodes, 
              edges,
              metadata: {
                version: '1.0',
                created: new Date().toISOString(),
                type: 'developer-flowchart'
              }
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `flowchart-${new Date().toISOString().split('T')[0]}.json`;
            a.click();
            URL.revokeObjectURL(url);
            break;
          case 'z':
            event.preventDefault();
            // Clear flowchart
            if (confirm('Are you sure you want to clear the flowchart? This action cannot be undone.')) {
              clearFlowchart();
            }
            break;
          case 'a':
            event.preventDefault();
            // Select all nodes
            const updatedNodes = nodes.map(node => ({ ...node, selected: true }));
            setNodes(updatedNodes);
            break;
        }
      }

      // Delete selected nodes
      if (key === 'Delete' || key === 'Backspace') {
        event.preventDefault();
        const selectedNodes = nodes.filter(node => node.selected);
        if (selectedNodes.length > 0) {
          const remainingNodes = nodes.filter(node => !node.selected);
          setNodes(remainingNodes);
        }
      }

      // Escape to deselect all
      if (key === 'Escape') {
        event.preventDefault();
        const deselectedNodes = nodes.map(node => ({ ...node, selected: false }));
        setNodes(deselectedNodes);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedNodeType, setSelectedNodeType, addNode, clearFlowchart, nodes, setNodes]);
};
