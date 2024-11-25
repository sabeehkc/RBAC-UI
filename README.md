Permission Management System <br>

This is a Permission Management System built using React. The system allows managing roles (like Admin, Editor, Viewer) and their associated permissions (Read, Write, Delete). You can dynamically assign or revoke permissions for each role through an easy-to-use interface.

Getting Started with Create React App
This project was bootstrapped with Create React App.

Project Setup
Follow these steps to set up the project locally.

Step 1: Clone the repository
git clone https://github.com/sabeehkc/RBAC-UI <br>
Step 2: Navigate to the project directory
cd rbac-ui <br>
Step 3: Install dependencies
npm install
or
yarn install <br>
Step 4: Run the app
npm start
or
yarn start
The app will be available at http://localhost:3000.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

npm test
Launches the test runner in interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project and copy all configuration files and transitive dependencies (webpack, Babel, ESLint, etc.) into your project. After ejecting, you'll have full control over these configurations.

App Structure
Roles & Permissions
Roles: Admin, Editor, Viewer
Permissions: Read, Write, Delete
Each role can have different permissions assigned. Admin roles may have all permissions, while others may have limited permissions like Read or Write.

Components:
RoleManagement.js: Manages the creation, modification, and deletion of roles. <br>
PermissionManagement.js: Allows assigning and toggling permissions for each role. <br>
Modal.js: Reusable modal component for role-related operations. <br>
State Management: <br>
roles: Stores roles with their corresponding permissions. <br>
permissions: Stores the list of available permissions. <br>

How It Works <br>
Add Roles: Add new roles, e.g., Admin, Editor, and Viewer. <br>
Assign Permissions: Each role can have different permissions (Read, Write, Delete) which can be toggled. <br>
Edit Roles: Edit permissions for each role. <br>
Delete Roles: Remove roles from the system as needed. <br>

Learn More
You can learn more in the Create React App documentation.

To learn more about React, visit the React documentation.
