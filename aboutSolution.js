```javascript
// pages/about.js

export default function About() {
  // Removed the import statement that was causing the error
  // import { nonExistentModule } from './nonExistentModule'; 
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}
```