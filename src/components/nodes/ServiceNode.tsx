import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import type { NodeProps } from 'reactflow';
import { Server, ArrowRight } from 'lucide-react';

const ServiceNode = memo(({ data, selected }: NodeProps) => {
  return (
    <div className={`px-6 py-4 shadow-xl rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white border-2 border-orange-800 min-w-[160px] max-w-[200px] transition-all duration-300 group ${
      selected ? 'ring-4 ring-orange-300 shadow-2xl scale-105 border-orange-400' : 'hover:shadow-2xl hover:scale-105 hover:border-orange-400'
    }`}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="p-1 bg-white/20 rounded-lg">
          <Server size={16} className="fill-white" />
        </div>
        <div className="font-bold text-sm">{data.label || 'Service'}</div>
      </div>
      {data.description && (
        <div className="text-xs text-orange-100 mb-2 text-center leading-relaxed">
          {data.description}
        </div>
      )}
      {data.status && (
        <div className="text-xs bg-white/20 px-2 py-1 rounded-full text-center font-mono">
          {data.status}
        </div>
      )}
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-orange-800 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ top: -6 }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-orange-800 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ bottom: -6 }}
      />
    </div>
  );
});

ServiceNode.displayName = 'ServiceNode';

export default ServiceNode;
