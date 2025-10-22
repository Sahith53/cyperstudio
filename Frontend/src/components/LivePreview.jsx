import React from 'react'

export default function LivePreview({ files }) {
  // Get the App component code
  const appCode = files['/App.js']?.code || ''
  
  console.log('App code:', appCode) // Debug log
  
  // Extract the JSX from the App component - FIXED REGEX
  const extractJSX = (code) => {
    // Try multiple patterns to match different return formats
    let match = code.match(/return\s*\(\s*([\s\S]*?)\s*\)\s*;?\s*}/) // return (JSX)
    if (!match) {
      match = code.match(/return\s+([\s\S]*?)\s*;?\s*}/) // return JSX
    }
    if (!match) {
      match = code.match(/return\s*([\s\S]*?)\s*;?\s*}/) // return JSX (any format)
    }
    
    console.log('Match result:', match) // Debug log
    
    return match ? match[1].trim() : '<div>No JSX found</div>'
  }
  
  const appJSX = extractJSX(appCode)
  console.log('Extracted JSX:', appJSX) // Debug log
  
  return (
    <div className="h-full flex flex-col bg-white dark:bg-gray-800">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 px-4 py-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg">👁️</span>
          <span className="font-semibold text-gray-800 dark:text-gray-200">Live Preview</span>
        </div>
      </div>
      
      {/* Preview Content */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="h-full border border-gray-200 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 overflow-auto">
          <div className="p-6">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: appJSX
                  .replace(/<h1>/g, '<h1 style="color: #2563eb; font-size: 2rem; margin-bottom: 1rem; font-weight: 600;">')
                  .replace(/<div>/g, '<div style="padding: 1rem;">')
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}