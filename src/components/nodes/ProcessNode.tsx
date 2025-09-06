import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Square } from 'lucide-react';

const ProcessNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-4 py-2 shadow-md rounded-md bg-blue-500 text-white border-2 border-blue-600 min-w-[120px] ${
      selected ? 'ring-2 ring-blue-300' : ''
    }`}>
      <div className="flex items-center gap-2">
        <Square size={16} />
        <div className="font-medium">{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-600"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-600"
      />
    </div>
  );
});

ProcessNode.displayName = 'ProcessNode';

export default ProcessNode;
