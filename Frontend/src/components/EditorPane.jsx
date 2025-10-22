import Editor from "@monaco-editor/react";
import { useState, useEffect } from "react";

export default function EditorPane({ code, onChange, activeFile, files, onFileSelect }) {
  const openFiles = Object.keys(files)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    updateTheme()
    window.addEventListener('theme-changed', updateTheme)
    
    return () => window.removeEventListener('theme-changed', updateTheme)
  }, [])
  
  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800">
      {/* File Tabs */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 flex overflow-x-auto">
        {openFiles.map(fileName => (
          <div
            key={fileName}
            className={`px-4 py-3 text-sm cursor-pointer border-r border-gray-200 dark:border-gray-600 flex items-center space-x-2 whitespace-nowrap transition-all duration-200 ${
              activeFile === fileName 
                ? 'bg-white dark:bg-gray-800 border-b-2 border-blue-500 text-blue-600 dark:text-blue-400 font-medium' 
                : 'bg-gray-100 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
            onClick={() => onFileSelect(fileName)}
          >
            <span className="text-base">📄</span>
            <span className="font-medium">{fileName.replace('/', '')}</span>
          </div>
        ))}
      </div>
      
      {/* Editor */}
      <div className="flex-1 relative">
        <Editor 
          height="100%" 
          defaultLanguage="javascript" 
          value={code} 
          onChange={onChange}
          theme={isDark ? 'vs-dark' : 'vs-light'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            wordWrap: 'on',
            padding: { top: 16, bottom: 16 },
            scrollBeyondLastLine: false,
            automaticLayout: true
          }}
        />
      </div>
    </div>
  );
}