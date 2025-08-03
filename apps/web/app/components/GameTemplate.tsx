import React, { useEffect, useRef } from 'react';

interface GameTemplateProps {
  category: 'quiz' | 'reaction' | 'music' | 'puzzle';
}

const GameTemplate: React.FC<GameTemplateProps> = ({ category }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = `/games/${category}/index.html`;
    }
  }, [category]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <iframe
        ref={iframeRef}
        title={`${category} game`}
        className="w-full h-full border-none"
      ></iframe>
    </div>
  );
};

export default GameTemplate;
