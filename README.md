# Budget

Budget is a web app being made with React with the goal of splitting money and expenses between _accounts_ without actually having seperate accounts tied with your bank.

### Stuff Used
The web app uses React via create-react-app which has been ejected so that it can use SCSS files as CSS modules. It also uses React-Router to route between accounts.

The web app will be using firebase as the external database with use of html5 localstorage and service workers for offline use.

### Getting Setup Locally
* Clone the repository and checkout the **dev** branch.
* Run `npm install` in the root folder.
* The project uses webpack to compile assets as well as livereload so just run `npm start` to get started developing or `npm run build` to output a production build.

### Branches
* Components should be in their own branch like:
`component/myComponent`
* Bug fixes (if the primary goal of the branch) should be like so: `bug/name-of-my-bug`

This project is something I am working on whenever I get free time but if you want to contribute in any capacity then please feel free to create a pull request or create/solve an issue and I will gladly merge changes in.
