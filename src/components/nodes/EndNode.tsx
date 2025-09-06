import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Square } from 'lucide-react';

const EndNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-4 py-2 shadow-md rounded-full bg-red-500 text-white border-2 border-red-600 min-w-[100px] ${
      selected ? 'ring-2 ring-red-300' : ''
    }`}>
      <div className="flex items-center gap-2">
        <Square size={16} />
        <div className="font-medium">{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-red-600"
      />
    </div>
  );
});

EndNode.displayName = 'EndNode';

export default EndNode;
