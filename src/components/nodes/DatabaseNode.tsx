import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Database, ArrowRight } from 'lucide-react';

const DatabaseNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-6 py-4 shadow-lg rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white border-2 border-green-700 min-w-[140px] transition-all duration-200 ${
      selected ? 'ring-4 ring-green-300 shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'
    }`}>
      <div className="flex items-center justify-center gap-2">
        <Database size={18} className="fill-white" />
        <div className="font-semibold text-sm">{data.label || 'Database'}</div>
      </div>
      {data.description && (
        <div className="text-xs text-green-100 mt-1 text-center">
          {data.description}
        </div>
      )}
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-green-700 border-2 border-white"
        style={{ top: -8 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 bg-green-700 border-2 border-white"
        style={{ bottom: -8 }}
      />
    </div>
  );
});

DatabaseNode.displayName = 'DatabaseNode';

export default DatabaseNode;
