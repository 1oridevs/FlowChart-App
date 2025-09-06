import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Square } from 'lucide-react';

const EndNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-8 py-6 shadow-xl rounded-full bg-gradient-to-br from-red-500 via-red-600 to-red-700 text-white border-2 border-red-800 min-w-[160px] max-w-[200px] transition-all duration-300 group ${
      selected ? 'ring-4 ring-red-300 shadow-2xl scale-105 border-red-400' : 'hover:shadow-2xl hover:scale-105 hover:border-red-400'
    }`}>
      <div className="flex items-center justify-center gap-2">
        <div className="p-1 bg-white/20 rounded-full">
          <Square size={16} className="fill-white" />
        </div>
        <div className="font-bold text-sm">{data.label || 'End'}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-red-800 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ top: -6 }}
      />
    </div>
  );
});

EndNode.displayName = 'EndNode';

export default EndNode;
