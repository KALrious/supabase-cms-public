"use client"; // Si vous utilisez Next.js App Router

import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const MarkdownEditor = () => {
  const [value, setValue] = useState<string | undefined>(
    "# Hello, Markdown!\n\nÉcrivez votre contenu ici..."
  );

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Éditeur Markdown</h2>
      <MDEditor
        id="mardown-editor"
        value={value}
        onChange={setValue}
        height={600}
        preview="live" // Mode prévisualisation en temps réel
        visibleDragbar={true} // Affiche la barre de séparation
        hideToolbar={false} // Affiche la barre d'outils
        enableScroll={true} // Active le défilement
      />
      <input
        className="hidden"
        type="hidden"
        name="markdown-editor"
        value={value}
      />
    </div>
  );
};

export default MarkdownEditor;
