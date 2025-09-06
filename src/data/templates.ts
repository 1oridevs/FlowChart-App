import type { Node, Edge } from 'reactflow';

export interface FlowchartTemplate {
  id: string;
  name: string;
  description: string;
  category: string;
  nodes: Node[];
  edges: Edge[];
  tags: string[];
}

export const templates: FlowchartTemplate[] = [
  {
    id: 'rest-api-flow',
    name: 'REST API Flow',
    description: 'Complete REST API request/response flow with authentication and database operations',
    category: 'API',
    tags: ['REST', 'API', 'Authentication', 'Database'],
    nodes: [
      {
        id: '1',
        type: 'start',
        position: { x: 100, y: 100 },
        data: { label: 'Client Request' },
      },
      {
        id: '2',
        type: 'api',
        position: { x: 100, y: 200 },
        data: { 
          label: 'Auth API',
          description: 'Validate user credentials',
          method: 'POST'
        },
      },
      {
        id: '3',
        type: 'condition',
        position: { x: 100, y: 300 },
        data: { 
          label: 'Valid Token?',
          condition: 'token.isValid'
        },
      },
      {
        id: '4',
        type: 'api',
        position: { x: 300, y: 300 },
        data: { 
          label: 'Main API',
          description: 'Process business logic',
          method: 'GET'
        },
      },
      {
        id: '5',
        type: 'database',
        position: { x: 300, y: 400 },
        data: { 
          label: 'Database',
          description: 'Fetch data',
          type: 'PostgreSQL'
        },
      },
      {
        id: '6',
        type: 'api',
        position: { x: 300, y: 500 },
        data: { 
          label: 'Response API',
          description: 'Return data to client',
          method: 'GET'
        },
      },
      {
        id: '7',
        type: 'end',
        position: { x: 100, y: 400 },
        data: { label: 'Unauthorized' },
      },
      {
        id: '8',
        type: 'end',
        position: { x: 300, y: 600 },
        data: { label: 'Success Response' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4', sourceHandle: 'right' },
      { id: 'e3-7', source: '3', target: '7', sourceHandle: 'left' },
      { id: 'e4-5', source: '4', target: '5' },
      { id: 'e5-6', source: '5', target: '6' },
      { id: 'e6-8', source: '6', target: '8' },
    ],
  },
  {
    id: 'microservices-architecture',
    name: 'Microservices Architecture',
    description: 'Typical microservices communication pattern with API Gateway and service mesh',
    category: 'Architecture',
    tags: ['Microservices', 'API Gateway', 'Service Mesh', 'Architecture'],
    nodes: [
      {
        id: '1',
        type: 'start',
        position: { x: 100, y: 100 },
        data: { label: 'Client' },
      },
      {
        id: '2',
        type: 'api',
        position: { x: 300, y: 100 },
        data: { 
          label: 'API Gateway',
          description: 'Route requests to services',
          method: 'ALL'
        },
      },
      {
        id: '3',
        type: 'service',
        position: { x: 100, y: 250 },
        data: { 
          label: 'User Service',
          description: 'Handle user operations',
          status: 'Active'
        },
      },
      {
        id: '4',
        type: 'service',
        position: { x: 300, y: 250 },
        data: { 
          label: 'Order Service',
          description: 'Handle order operations',
          status: 'Active'
        },
      },
      {
        id: '5',
        type: 'service',
        position: { x: 500, y: 250 },
        data: { 
          label: 'Payment Service',
          description: 'Handle payment operations',
          status: 'Active'
        },
      },
      {
        id: '6',
        type: 'database',
        position: { x: 100, y: 400 },
        data: { 
          label: 'User DB',
          description: 'User data storage',
          type: 'PostgreSQL'
        },
      },
      {
        id: '7',
        type: 'database',
        position: { x: 300, y: 400 },
        data: { 
          label: 'Order DB',
          description: 'Order data storage',
          type: 'MongoDB'
        },
      },
      {
        id: '8',
        type: 'database',
        position: { x: 500, y: 400 },
        data: { 
          label: 'Payment DB',
          description: 'Payment data storage',
          type: 'PostgreSQL'
        },
      },
      {
        id: '9',
        type: 'event',
        position: { x: 200, y: 350 },
        data: { 
          label: 'Order Created',
          description: 'Publish order event',
          eventType: 'System Event'
        },
      },
      {
        id: '10',
        type: 'end',
        position: { x: 300, y: 500 },
        data: { label: 'Response' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e2-4', source: '2', target: '4' },
      { id: 'e2-5', source: '2', target: '5' },
      { id: 'e3-6', source: '3', target: '6' },
      { id: 'e4-7', source: '4', target: '7' },
      { id: 'e5-8', source: '5', target: '8' },
      { id: 'e4-9', source: '4', target: '9' },
      { id: 'e9-10', source: '9', target: '10' },
    ],
  },
  {
    id: 'data-processing-pipeline',
    name: 'Data Processing Pipeline',
    description: 'ETL pipeline for data processing with validation and transformation steps',
    category: 'Data',
    tags: ['ETL', 'Data Pipeline', 'Processing', 'Validation'],
    nodes: [
      {
        id: '1',
        type: 'start',
        position: { x: 100, y: 100 },
        data: { label: 'Data Source' },
      },
      {
        id: '2',
        type: 'function',
        position: { x: 100, y: 200 },
        data: { 
          label: 'Extract Data',
          description: 'Pull data from source',
          language: 'Python'
        },
      },
      {
        id: '3',
        type: 'function',
        position: { x: 100, y: 300 },
        data: { 
          label: 'Validate Data',
          description: 'Check data integrity',
          language: 'Python'
        },
      },
      {
        id: '4',
        type: 'condition',
        position: { x: 100, y: 400 },
        data: { 
          label: 'Valid Data?',
          condition: 'data.isValid'
        },
      },
      {
        id: '5',
        type: 'function',
        position: { x: 300, y: 400 },
        data: { 
          label: 'Transform Data',
          description: 'Clean and transform',
          language: 'Python'
        },
      },
      {
        id: '6',
        type: 'function',
        position: { x: 500, y: 400 },
        data: { 
          label: 'Load Data',
          description: 'Store in destination',
          language: 'Python'
        },
      },
      {
        id: '7',
        type: 'database',
        position: { x: 500, y: 500 },
        data: { 
          label: 'Data Warehouse',
          description: 'Final data storage',
          type: 'PostgreSQL'
        },
      },
      {
        id: '8',
        type: 'event',
        position: { x: 100, y: 500 },
        data: { 
          label: 'Data Error',
          description: 'Log validation error',
          eventType: 'Error'
        },
      },
      {
        id: '9',
        type: 'end',
        position: { x: 500, y: 600 },
        data: { label: 'Pipeline Complete' },
      },
      {
        id: '10',
        type: 'end',
        position: { x: 100, y: 600 },
        data: { label: 'Pipeline Failed' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5', sourceHandle: 'right' },
      { id: 'e4-8', source: '4', target: '8', sourceHandle: 'left' },
      { id: 'e5-6', source: '5', target: '6' },
      { id: 'e6-7', source: '6', target: '7' },
      { id: 'e7-9', source: '7', target: '9' },
      { id: 'e8-10', source: '8', target: '10' },
    ],
  },
  {
    id: 'authentication-flow',
    name: 'Authentication Flow',
    description: 'JWT-based authentication flow with refresh token mechanism',
    category: 'Security',
    tags: ['Authentication', 'JWT', 'Security', 'OAuth'],
    nodes: [
      {
        id: '1',
        type: 'start',
        position: { x: 100, y: 100 },
        data: { label: 'Login Request' },
      },
      {
        id: '2',
        type: 'api',
        position: { x: 100, y: 200 },
        data: { 
          label: 'Login API',
          description: 'Validate credentials',
          method: 'POST'
        },
      },
      {
        id: '3',
        type: 'database',
        position: { x: 100, y: 300 },
        data: { 
          label: 'User DB',
          description: 'Check user credentials',
          type: 'PostgreSQL'
        },
      },
      {
        id: '4',
        type: 'condition',
        position: { x: 100, y: 400 },
        data: { 
          label: 'Valid Credentials?',
          condition: 'user.isValid'
        },
      },
      {
        id: '5',
        type: 'function',
        position: { x: 300, y: 400 },
        data: { 
          label: 'Generate JWT',
          description: 'Create access token',
          language: 'JavaScript'
        },
      },
      {
        id: '6',
        type: 'function',
        position: { x: 500, y: 400 },
        data: { 
          label: 'Generate Refresh Token',
          description: 'Create refresh token',
          language: 'JavaScript'
        },
      },
      {
        id: '7',
        type: 'api',
        position: { x: 500, y: 500 },
        data: { 
          label: 'Token Response',
          description: 'Return tokens to client',
          method: 'POST'
        },
      },
      {
        id: '8',
        type: 'end',
        position: { x: 100, y: 500 },
        data: { label: 'Invalid Credentials' },
      },
      {
        id: '9',
        type: 'end',
        position: { x: 500, y: 600 },
        data: { label: 'Login Success' },
      },
    ],
    edges: [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
      { id: 'e4-5', source: '4', target: '5', sourceHandle: 'right' },
      { id: 'e4-8', source: '4', target: '8', sourceHandle: 'left' },
      { id: 'e5-6', source: '5', target: '6' },
      { id: 'e6-7', source: '6', target: '7' },
      { id: 'e7-9', source: '7', target: '9' },
    ],
  },
];
