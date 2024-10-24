import React, { useState, useEffect } from 'react';

interface Tool {
  type: string;
  code: string;
  brand: string;
}

type ToolSelectionProps = {
  onSelect: (toolCode: string) => void;
};

export default function ToolSelection({ onSelect }: ToolSelectionProps) {
  const [tools, setTools] = useState<Tool[]>([]);

  useEffect(() => {
    fetch('/api/tools')
      .then(response => response.json())
      .then(data => setTools(data));
  }, []);

  return (
    <div>
      <h3>Select a Tool</h3>
      <ul>
        {tools.map(tool => (
          <li key={tool.code}>
            {tool.brand} {tool.type} - {tool.code}
            <button onClick={() => onSelect(tool.code)}>Select</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
