import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Play } from 'lucide-react';

const StartNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-8 py-6 shadow-xl rounded-full bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white border-2 border-green-800 min-w-[140px] max-w-[180px] transition-all duration-300 group ${
      selected ? 'ring-4 ring-green-300 shadow-2xl scale-105 border-green-400' : 'hover:shadow-2xl hover:scale-105 hover:border-green-400'
    }`}>
      <div className="flex items-center justify-center gap-2">
        <div className="p-1 bg-white/20 rounded-full">
          <Play size={16} className="fill-white" />
        </div>
        <div className="font-bold text-sm">{data.label || 'Start'}</div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-green-800 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ bottom: -6 }}
      />
    </div>
  );
});

StartNode.displayName = 'StartNode';

export default StartNode;
