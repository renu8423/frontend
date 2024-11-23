# React + Vite

# setup instrustion

1.clone the project
....
clone git ( https://github.com/renu8423/frontend.git )
....
2. move into the directory
....
cd lms-frontend
....
3.install depandencies
...
npm i
....

4.run the server
....
npm run dev
....


2. how to setup tailwind in project

1. install tailwinds & other dependensies
......
* tailwindcss.com
* npm install -D tailwindcss
 
 2. reate your tailwind.config.js file.

.....
npx tailwindcss init
.....

3.  create Configure template paths     
Add the paths to all of your template files in your tailwind.config.js file.
....
 content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
 ....

4. Add the Tailwind directives to your index .CSS file
.....
@tailwind base;
@tailwind components;
@tailwind utilities;
.....

3. Adding plugins & dependencies
.....
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
.....

4. Adding auto import sort for esline

1. Install the plugin
   ...
    npm i eslint-plugin-simple-import-sort
...

2. Add rule in .eslintrc.cjs
....   
    'simple-import-sort/imports': 'error',
...

3. Add simple-import-sort in the plugin array of .eslintrc.cjs file
...
    plugins: [..., 'simple-import-sort']
...

4. Open settings.json in vscode configuration settings
...
Add the following line

    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
    }
<<<<<<< HEAD
..
=======
..
>>>>>>> 3e65c5a (set Footer page)
