import React, { useState } from 'react'
import FileExplorer from '../components/FileExplorer'
import EditorPane from '../components/EditorPane'
import LivePreview from '../components/LivePreview'
import ThemeToggle from '../components/ThemeToggle'

const IDEpage = () => {
  const [files, setFiles] = useState({
    "/App.js": {
      code: `export default function App() { 
  return <h1>Hello CipherStudio!</h1> 
}`
    },
    "/index.js": {
      code: `import ReactDOM from 'react-dom/client'; 
import App from './App'; 
ReactDOM.createRoot(document.getElementById('root')).render(<App />);`
    }
  });

  const [activeFile, setActiveFile] = useState('/App.js');
  const [code, setCode] = useState(files['/App.js'].code);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    setFiles(prev => ({
      ...prev,
      [activeFile]: { ...prev[activeFile], code: newCode }
    }));
  };

  const handleFileSelect = (fileName) => {
    setActiveFile(fileName);
    setCode(files[fileName].code);
  };

  // File Management Functions
  const handleCreateFile = (fileName = 'NewFile.js') => {
    const newFile = {
      code: `// New file created
export default function ${fileName.replace('.js', '')}() {
  return (
    <div>
      <h1>New Component</h1>
    </div>
  );
}`
    };
    
    setFiles(prev => ({
      ...prev,
      [`/${fileName}`]: newFile
    }));
    
    setActiveFile(`/${fileName}`);
    setCode(newFile.code);
  };

  const handleDeleteFile = (fileName) => {
    if (confirm(`Are you sure you want to delete ${fileName}?`)) {
      setFiles(prev => {
        const newFiles = { ...prev };
        delete newFiles[fileName];
        return newFiles;
      });
      
      // Switch to another file if we deleted the active one
      if (activeFile === fileName) {
        const remainingFiles = Object.keys(files).filter(f => f !== fileName);
        if (remainingFiles.length > 0) {
          const newActiveFile = remainingFiles[0];
          setActiveFile(newActiveFile);
          setCode(files[newActiveFile].code);
        }
      }
    }
  };

  const handleRenameFile = (oldName, newName) => {
    if (newName && newName !== oldName) {
      setFiles(prev => {
        const newFiles = { ...prev };
        newFiles[`/${newName}`] = newFiles[oldName];
        delete newFiles[oldName];
        return newFiles;
      });
      
      if (activeFile === oldName) {
        setActiveFile(`/${newName}`);
      }
    }
  };
  // Add these functions after your file management functions
const saveProject = () => {
    const projectData = {
      files,
      activeFile,
      timestamp: new Date().toISOString()
    }
    localStorage.setItem('cipherstudio-project', JSON.stringify(projectData))
    alert('Project saved successfully!')
  }
  
  const loadProject = () => {
    const saved = localStorage.getItem('cipherstudio-project')
    if (saved) {
      const projectData = JSON.parse(saved)
      setFiles(projectData.files)
      setActiveFile(projectData.activeFile)
      setCode(projectData.files[projectData.activeFile].code)
      alert('Project loaded successfully!')
    } else {
      alert('No saved project found!')
    }
  }
  
  // Add save/load buttons to your FileExplorer

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CS</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">CipherStudio</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {Object.keys(files).length} files
          </div>
          <ThemeToggle />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* File Explorer */}
        <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0">
          <FileExplorer 
            files={files} 
            activeFile={activeFile} 
            onFileSelect={handleFileSelect}
            onCreateFile={handleCreateFile}
            onDeleteFile={handleDeleteFile}
            onRenameFile={handleRenameFile}
            onSave={saveProject}
            onLoad={loadProject}
          />
        </div>

        {/* Editor Section */}
        <div className="flex-1 flex flex-col">
          <EditorPane 
            code={code} 
            onChange={handleCodeChange}
            activeFile={activeFile}
            files={files}
            onFileSelect={handleFileSelect}
          />
        </div>

        {/* Live Preview */}
        <div className="w-96 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 flex-shrink-0">
          <LivePreview files={files} />
        </div>
      </div>
    </div>
  )
}

export default IDEpage