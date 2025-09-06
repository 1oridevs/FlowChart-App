import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Diamond } from 'lucide-react';

const DecisionNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-6 py-4 shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-2 border-yellow-700 min-w-[140px] transform rotate-45 transition-all duration-200 ${
      selected ? 'ring-4 ring-yellow-300 shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'
    }`}>
      <div className="flex items-center justify-center gap-2 transform -rotate-45">
        <Diamond size={18} className="fill-white" />
        <div className="font-semibold text-xs">{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-yellow-700 border-2 border-white"
        style={{ top: -8 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 bg-yellow-700 border-2 border-white"
        style={{ bottom: -8 }}
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-4 h-4 bg-yellow-700 border-2 border-white"
        style={{ right: -8 }}
      />
    </div>
  );
});

DecisionNode.displayName = 'DecisionNode';

export default DecisionNode;
