# CipherStudio - Project TODO List

## 🚀 PROJECT OVERVIEW
**Objective**: Build a browser-based React IDE similar to NextLeap.js or CodeSandbox
**Tech Stack**: React + Vite + Sandpack + Monaco Editor + Express + MongoDB + AWS S3
**Timeline**: 3-5 days

---

## 📋 TODO LIST

### 🔧 **IMMEDIATE FIXES (Priority 1)**
- [ ] **Fix file navigation issue** - FileExplorer paths don't match files state
- [ ] **Test file switching** - Ensure clicking files loads correct content in editor
- [ ] **Verify Monaco Editor is working** - Check if editor is interactive or static

### 🎨 **FRONTEND CORE FEATURES (Priority 2)**
- [ ] **File Management System**
  - [ ] Create new files (with proper paths like /src/App.js)
  - [ ] Delete files
  - [ ] Rename files
  - [ ] Create folders
  - [ ] Delete folders
- [ ] **Enhanced File Structure**
  - [ ] Add proper project structure (src/, public/, components/)
  - [ ] Add more sample files (Header.js, Footer.js, index.html, package.json)
  - [ ] Implement folder expansion/collapse
- [ ] **Editor Improvements**
  - [ ] Add file tabs at top of editor
  - [ ] Add syntax highlighting for different file types
  - [ ] Add save indicator (saved/unsaved)
  - [ ] Add keyboard shortcuts (Ctrl+S to save)

### 💾 **PERSISTENCE & STORAGE (Priority 3)**
- [ ] **LocalStorage Integration**
  - [ ] Save project to localStorage
  - [ ] Load project from localStorage
  - [ ] Project management (multiple projects)
- [ ] **Autosave Feature**
  - [ ] Toggle autosave on/off
  - [ ] Debounced autosave (500ms delay)
  - [ ] Visual indicator for autosave status

### 🎨 **UI/UX ENHANCEMENTS (Priority 4)**
- [ ] **Theme System**
  - [ ] Dark/Light theme toggle
  - [ ] Theme persistence
  - [ ] Monaco Editor theme switching
- [ ] **Responsive Design**
  - [ ] Mobile/tablet support
  - [ ] Collapsible panels
  - [ ] Resizable panels
- [ ] **User Experience**
  - [ ] Loading states
  - [ ] Error handling
  - [ ] Toast notifications
  - [ ] Keyboard shortcuts

### 🔐 **BACKEND DEVELOPMENT (Priority 5)**
- [ ] **Express.js Setup**
  - [ ] Initialize Node.js backend
  - [ ] Install dependencies (express, mongoose, cors, dotenv, etc.)
  - [ ] Basic server setup
- [ ] **Database Schema**
  - [ ] User model (email, password, name)
  - [ ] Project model (name, description, ownerId)
  - [ ] File model (name, type, content, projectId, parentId)
  - [ ] MongoDB connection
- [ ] **API Endpoints**
  - [ ] POST /api/users (register)
  - [ ] POST /api/users/login (login)
  - [ ] POST /api/projects (create project)
  - [ ] GET /api/projects/:userId (get user projects)
  - [ ] GET /api/projects/:id (get project)
  - [ ] PUT /api/projects/:id (update project)
  - [ ] DELETE /api/projects/:id (delete project)
  - [ ] POST /api/files (create file/folder)
  - [ ] GET /api/files/:id (get file)
  - [ ] PUT /api/files/:id (update file)
  - [ ] DELETE /api/files/:id (delete file)

### 🔐 **AUTHENTICATION (Priority 6)**
- [ ] **User Authentication**
  - [ ] JWT token implementation
  - [ ] Login/Register forms
  - [ ] Protected routes
  - [ ] User session management

### ☁️ **CLOUD STORAGE (Priority 7)**
- [ ] **AWS S3 Integration**
  - [ ] S3 bucket setup
  - [ ] File upload to S3
  - [ ] File download from S3
  - [ ] CORS configuration

### 🚀 **DEPLOYMENT (Priority 8)**
- [ ] **Frontend Deployment**
  - [ ] Vercel deployment
  - [ ] Environment variables setup
  - [ ] Build optimization
- [ ] **Backend Deployment**
  - [ ] Railway/Render deployment
  - [ ] Environment variables
  - [ ] Database connection
- [ ] **Domain & SSL**
  - [ ] Custom domain setup
  - [ ] SSL certificate

### 🎯 **ADVANCED FEATURES (Priority 9)**
- [ ] **Project Sharing**
  - [ ] Generate shareable URLs
  - [ ] Public/private projects
  - [ ] Project collaboration
- [ ] **Export/Import**
  - [ ] Export project as ZIP
  - [ ] Import project from ZIP
  - [ ] Project templates
- [ ] **Search & Navigation**
  - [ ] File search (Ctrl+P)
  - [ ] Quick file open
  - [ ] Recent files

### 📚 **DOCUMENTATION (Priority 10)**
- [ ] **README.md**
  - [ ] Project description
  - [ ] Setup instructions
  - [ ] API documentation
  - [ ] Screenshots/GIFs
- [ ] **Demo Video**
  - [ ] 2-3 minute demo
  - [ ] Feature showcase
  - [ ] User flow demonstration

---

## 📊 **PROGRESS TRACKING**

### ✅ **COMPLETED (35%)**
- [x] Basic React app setup
- [x] Three-panel layout
- [x] Monaco Editor integration
- [x] Sandpack integration
- [x] Basic state management
- [x] File navigation structure

### 🔄 **IN PROGRESS (5%)**
- [ ] File navigation fix
- [ ] File structure enhancement

### ❌ **NOT STARTED (60%)**
- [ ] File management
- [ ] Backend development
- [ ] Database setup
- [ ] Authentication
- [ ] Deployment

---

## 🎯 **CURRENT SPRINT GOALS**
1. Fix file navigation issue
2. Add proper file structure
3. Implement file management (create/delete)
4. Add localStorage persistence
5. Test core functionality

---

## 📝 **NOTES**
- Focus on MVP first (core functionality)
- Test each feature before moving to next
- Keep UI simple and functional
- Document any issues or decisions made

---

**Last Updated**: [Current Date]
**Next Review**: After completing current sprint goals
