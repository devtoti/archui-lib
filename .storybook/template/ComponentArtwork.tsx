import * as React from "react";
import { useOf } from "@storybook/addon-docs/blocks";

export function ComponentArtwork() {
  try {
    const resolved = useOf("meta", ["meta"]);
    const meta = resolved.preparedMeta;
    
    // Get artwork path from meta parameters
    const artworkPath = meta.parameters?.docs?.artwork;
    
    if (!artworkPath) {
      return null;
    }

    return (
      <div style={{ 
        marginBottom: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem',
        backgroundColor: 'transparent'
      }}>
        <img 
          src={artworkPath} 
          alt={`${meta.title || 'Component'} artwork`}
          style={{
            maxWidth: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
      </div>
    );
  } catch {
    return null;
  }
}

