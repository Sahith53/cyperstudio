import React from 'react'

const FileExplorer = ({ files, activeFile, onFileSelect, onCreateFile, onDeleteFile, onRenameFile , onSave, onLoad }) => {

  const handleCreateFile = () => {
    const fileName = prompt('Enter file name (e.g., MyComponent.js):')
    if (fileName) {
      onCreateFile(fileName)
    }
  }

  const handleRenameFile = (fileName) => {
    const newName = prompt('Enter new name:', fileName.replace('/', ''))
    if (newName && newName !== fileName.replace('/', '')) {
      onRenameFile(fileName, newName)
    }
  }

  const handleDeleteFile = (fileName) => {
    onDeleteFile(fileName)
  }

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200">Files</h3>
          <button
            onClick={handleCreateFile}
            className="text-xs bg-blue-500 text-white px-3 py-1.5 rounded-md hover:bg-blue-600 transition-colors"
          >
            + New File
          </button>
        </div>
        
        {/* Save/Load Buttons */}
        <div className="flex space-x-2">
          <button
            onClick={onSave}
            className="text-xs bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 transition-colors flex-1 flex items-center justify-center space-x-1"
          >
            <span>💾</span>
            <span>Save</span>
          </button>
          <button
            onClick={onLoad}
            className="text-xs bg-purple-500 text-white px-3 py-1.5 rounded-md hover:bg-purple-600 transition-colors flex-1 flex items-center justify-center space-x-1"
          >
            <span>📁</span>
            <span>Load</span>
          </button>
        </div>
      </div>
      
      {/* File List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {Object.keys(files).map(fileName => (
            <div 
              key={fileName}
              className={`text-sm cursor-pointer p-3 rounded-lg flex items-center justify-between group transition-all duration-200 ${
                activeFile === fileName 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-700' 
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
              onClick={() => onFileSelect(fileName)}
            >
              <div className="flex items-center space-x-2">
                <span className="text-lg">📄</span>
                <span className="font-medium">{fileName.replace('/', '')}</span>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 flex space-x-1 transition-opacity">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRenameFile(fileName)
                  }}
                  className="p-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 hover:bg-blue-100 dark:hover:bg-blue-800 rounded"
                  title="Rename"
                >
                  ✏️
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteFile(fileName)
                  }}
                  className="p-1 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 hover:bg-red-100 dark:hover:bg-red-800 rounded"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FileExplorer