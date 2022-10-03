# Hacker News - Practice

Utilizing the [Hacker News API](https://github.com/HackerNews/API) via [Firebase](https://firebase.google.com/) to redesign [Hacker News](https://news.ycombinator.com/news).

## Features

- Custom subscribing hook to be used with Firebase in general
- Realtime updates
- Animations added for eye candy, but also To prevent [Change Blindness](https://www.nngroup.com/articles/change-blindness-definition/#:~:text=Definition%3A%20Change%20blindness%20refers%20to,experiments%20performed%20in%20mid%201990s.)
  - If post changes position rerun animation to see what has changed on screen.
- Utilization of Generics
- Date diff calculation to create a label for how long it's post has been up compared to current time
  - I.E. Display longest time value ( seconds, days, years) that comes back from difference
 
## Thoughts that keep me up at night

- Material UI... Do I utilize the props for styling? Or is it better to create separate file? Or is styled components the way to go?
- Javascript dates... Thanks to the unit tests I found out the calculations of months and years were off. Would need to investigate a way to handle that. Until then seconds, minutes, and days to display will have to do.

## Time

- 8 - 9 hours

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
