import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Server, ArrowRight } from 'lucide-react';

const ServiceNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-6 py-4 shadow-lg rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white border-2 border-orange-700 min-w-[140px] transition-all duration-200 ${
      selected ? 'ring-4 ring-orange-300 shadow-2xl scale-105' : 'hover:shadow-xl hover:scale-102'
    }`}>
      <div className="flex items-center justify-center gap-2">
        <Server size={18} className="fill-white" />
        <div className="font-semibold text-sm">{data.label || 'Service'}</div>
      </div>
      {data.description && (
        <div className="text-xs text-orange-100 mt-1 text-center">
          {data.description}
        </div>
      )}
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-orange-700 border-2 border-white"
        style={{ top: -8 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 bg-orange-700 border-2 border-white"
        style={{ bottom: -8 }}
      />
    </div>
  );
});

ServiceNode.displayName = 'ServiceNode';

export default ServiceNode;
