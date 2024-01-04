import { useEffect, useState } from "react";
import { useModelsContext } from "../../hooks/useModelsContext";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
// @ts-expect-error https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/407
import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";
import { generateCode } from "../../utils";

SyntaxHighlighter.registerLanguage("jsx", jsx);

function CodeViewer() {
  const { selectedModel } = useModelsContext();
  const [code, setCode] = useState("");

  useEffect(() => {
    if (selectedModel) setCode(generateCode(selectedModel));
  }, [selectedModel]);

  return (
    <main className="flex-1 w-full">
      {!selectedModel ? (
        <h1 className="text-center text-gray-600 text-3xl mt-64">
          No selected
        </h1>
      ) : (
        <div className="code-viewer h-full">
          <SyntaxHighlighter language="js" style={{ ...darcula }}>
            {code}
          </SyntaxHighlighter>
        </div>
      )}
    </main>
  );
}

export default CodeViewer;
