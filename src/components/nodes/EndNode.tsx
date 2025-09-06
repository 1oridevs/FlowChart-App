import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Square } from 'lucide-react';

const EndNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-6 py-4 shadow-lg rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white border-2 border-red-700 min-w-[120px] transition-all duration-200 ${
      selected ? 'ring-4 ring-red-300 shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'
    }`}>
      <div className="flex items-center justify-center gap-2">
        <Square size={18} className="fill-white" />
        <div className="font-semibold text-sm">{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-red-700 border-2 border-white"
        style={{ top: -8 }}
      />
    </div>
  );
});

EndNode.displayName = 'EndNode';

export default EndNode;
