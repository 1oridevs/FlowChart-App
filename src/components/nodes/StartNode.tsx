import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Play } from 'lucide-react';

const StartNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-4 py-2 shadow-md rounded-full bg-green-500 text-white border-2 border-green-600 min-w-[100px] ${
      selected ? 'ring-2 ring-green-300' : ''
    }`}>
      <div className="flex items-center gap-2">
        <Play size={16} />
        <div className="font-medium">{data.label}</div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-green-600"
      />
    </div>
  );
});

StartNode.displayName = 'StartNode';

export default StartNode;
