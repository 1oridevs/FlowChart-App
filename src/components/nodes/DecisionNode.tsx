import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { Diamond } from 'lucide-react';

const DecisionNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-4 py-2 shadow-md bg-yellow-500 text-white border-2 border-yellow-600 min-w-[120px] transform rotate-45 ${
      selected ? 'ring-2 ring-yellow-300' : ''
    }`}>
      <div className="flex items-center justify-center gap-2 transform -rotate-45">
        <Diamond size={16} />
        <div className="font-medium text-sm">{data.label}</div>
      </div>
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-yellow-600"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-yellow-600"
      />
      <Handle
        type="source"
        position={Position.Right}
        className="w-3 h-3 bg-yellow-600"
      />
    </div>
  );
});

DecisionNode.displayName = 'DecisionNode';

export default DecisionNode;
