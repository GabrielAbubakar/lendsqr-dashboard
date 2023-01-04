# Lendsqr Dashboard

## Overview
- This is the submission for the Lendsqr Frontend Engineer Assessment.
- The task was the development of a multipage web app that fetched users from an api to generate pages to be used to populate a dashboard page as well as a user details page.
- Some features present in the application include
  - API consumption
  - State management with React Hooks
  - Frontend Pagination
  - SASS mixins (for responsive development)
  
## Tech Stack
 - This project was required to be made with React.js, SCSS and Typescript alongside the API.
 - As opposed to Create React App, Vite (a frontend build tool) was used to bootstrap the application due to considerations of speed, light-weight nature to the development process.
 - Considering the multipage nature of the application React Router library was used for generating the neccessary routes through Client Side Rendering.
 - Below is a list of the technologies used and links to neccesarry resources:
    - **Framework**: [React.js](https://reactjs.org/)
    - **Build Tool**: [Vite](https://vitejs.dev/)
    - **Styling**: [SASS](https://sass-lang.com/)
    - **Testing**: 
        - [React Testing Library](https://testing-library.com/)
        - [Jest](https://jestjs.io/)
    - **Deployment**: [Vercel](https://www.vercel.com/)
    - **API**: 
        - [API Route1](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users)
        - [API Route1](https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/:id)
      
      
## Folder Structure
- Most of the development files can be found in the /src directory of the root folder
- /src/main.tsx is the root level file where all pages derive their routing from through React Router.
- /src/assets contains all static files from images to icons in png and svg formats.
- /src/components contains all non page level typescript files these range from interface declaration files to various components that serve the application.
- /src/pages contains all the page level files including a custom error 404 page.
- /src/styles contains all the styling of components and pages written in .scss files imported into a global.scss file while is served to the src/main.tsx file.
 


## Running Locally

```bash
$ git clone https://github.com/GabrielAbubakar/lendsqr-dashboard.git
$ cd lendsqr-dashboard
$ npm install
$ npm run dev
```

Open [http://localhost:5173/](http://localhost:5173/) with your browser to see the result.

You can start editing the page by modifying `src/main.tsx`. The page auto-updates as you edit the file.
