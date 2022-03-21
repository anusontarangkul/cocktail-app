# The Cocktail App

A fun cocktail app using https://www.thecocktaildb.com/ API. Users can create an account through Google. Users can search for cocktails, view a single cocktail, save a single cocktail, and view all cocktails.

![screenshot](/screenshot-live.png)
| | | |
| :-------------------------------------: | :-------------------------------------: | :-----------------------------------------: |
| [Introduction](#the-cocktail-app) | [Table of Contents](#table-of-contents) | [Development Process](#development-process) |
| [Page Directory](#page-directory) | [Deployment](#deployment) | [Code Hightlights](#code-highlights) |
| [Technologies Used](#Technologies-Used) | [Credits](#Credits) | [License](#License) |

## Development Process

I began the process by coming up with user stories and turning them into github issues.

![screenshot](/screenshot-github.png)

I created a wireframe through Adobe XD.

![screenshot](/screenshot.png)

I created the UI of the app and then added functionality.

## Page Directory

The react components are organized in the components folder. Each CSS file for each component is in the corresponding folder. A pages is used to organize the pages per Next.jS. A redux folder holds all of the reducers for the app. The CocktailContext is the useContext state for the app.

## Deployment

This app was deployed using [Vercel](https://vercel.com/). The github is connected to Vercel for continous depoloyment on push to main.

Here is the [deployed](https://cocktail-app-anusontarangkul.vercel.app/) link.

## Code Highlights

Used redux for asynchronous calls through to thecocktaildb API. The appropriate state is rendered depending on the status of the API call. The Display of the search term is used in a different component than where the results of the search are shown.

```JavaScript
export const getCocktails = createAsyncThunk(
    'cocktail/getCocktails',
    async (search) => {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
            .then((res) => res.json())
    }
)

const initialState = {
    results: [],
    display: "",
    status: null
}


export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState,
    extraReducers: {
        [getCocktails.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getCocktails.fulfilled]: (state, action) => {
            state.results = action.payload
            state.display = action.meta.arg
            state.status = 'success'
        },
        [getCocktails.rejected]: () => {
            state.status = 'failed'
        }
    }
})


export default cocktailSlice.reducer
```

Signed in using Firebase Google auth. After the sign in, an alert is displayed to the user for a successful login.

```JavaScript
  const googleProvider = new GoogleAuthProvider();
  const handleSignIn = () => {
    toggleDrawer('right', false);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setAlert({
          open: true,
          message: `Login Successful. Welcome ${res.user.displayName}`,
          type: 'success',
        });
      })
      .catch((error) => {
        setAlert({
          open: true,
          message: error.message,
          type: 'error',
        });
      });
  };
```

## Technologies Used

### Front End

- [Next.js](https://nextjs.org/)
- [MUI](https://mui.com/)
- [Redux-Toolkit](https://redux-toolkit.js.org/)

### Back End

- [Firebase](https://firebase.google.com/)

## Credits

|                           |                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **David Anusontarangkul** | [![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/anusontarangkul/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/anusontarangkul) |

## License

Copyright 2021

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
