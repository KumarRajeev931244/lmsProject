#lms frontend

installing the react + vite 

creating the clone  on the git hub

installing the tailwind css

1. installing the tailwind
```
    npm install -D tailwindcss postcss autoprefixer
```
2. creating the tailwind 
```
   npx tailwindcss init
```
3. creating tailwind config file

```
        Configure your template paths
```
4. add file extension to tailwind config file in the contents property

```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

5. Add the Tailwind directives to the index.css

```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
```

### adding plugin and dependencies

  
  1. @reduxjs/toolkit : This package simplifies the    process of setting up and managing Redux in your applications.

  2. react-redux : The react-redux package provides official bindings to integrate React with Redux.

  react-router-dom :The react-router-dom package is used for handling routing in React web applications. Here are its primary uses:

  Declarative Routing: Allows you to define routes in a declarative manner, making it easy to manage navigation within your app.

  Dynamic Routing: Supports dynamic routing, enabling you to load different components based on the URL.

  Browser History Management: Manages the browser history, allowing for navigation using the browser’s back and forward buttons.

  Nested Routes: Supports nested routes, enabling complex routing structures within your application.

  Route Parameters: Allows you to define and use route parameters for dynamic content loading.

  3. react-icons: The react-icons package is used to  easily include popular icons in your React projects.

  4. react-chartjs-2: The react-chartjs-2 package is a React wrapper for Chart.js, a popular charting library.

  5. chart.js: The chart.js package is a popular JavaScript library used for creating a variety of charts and visualizations.

  6. daisyui: The daisyUI library is a Tailwind CSS plugin that provides a collection of pre-designed components and utilities to enhance the development experience.

  7. axios: The axios library is a popular JavaScript library used for making HTTP requests.

  8. react-hot-toast:The react-hot-toast library is used for adding beautiful and customizable toast notifications to your React applications.
  
  9. @tailwindcss/line-clamp: The @tailwindcss/line-clamp library is a Tailwind CSS plugin that provides utilities for truncating text after a specified number of lines.

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast
```


### importing the <BrowserRouter> in main.jsx
```
   import {BrowserRouter} from 'react-router-dom'
```

### importing the routes

```
    import { Routes } from 'react-router-dom'
```

### installing the eslint
1. install simple import sore

```
    npm i -D eslint-plugin-simple-import-sort
```
2. add rule in `.eslint.cjs`

```
   `simple-import-sort/imports`: `error`
```
3. add simple-import sort plugin in `.eslint.cjs`

```
    plugins: [...,'simple-import-sort]
```

4. to enable auto import sort on file save in vscode
    -open `settings.json`
    add the following config
    ```
      "editor.codeActionsOnSave": {
        "source.fillAll.eslint": true
      }
    ```

### create AuthSlice.js

### creating axios 

### creating footer

1. importing facebook,twitter,instagram, linkedin from react-icons/bs(bootstrap)

```
    import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
```

### for giving UI to the web pages

  ```
  [require('daisyui')]
  ```