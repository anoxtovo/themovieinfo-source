## Make sure you install NodeJS before use this app
### Clone and setup

`$ git clone https://github.com/anoxtovo/themovieinfo-source`
`$ cd themovieinfo-source`

### Install dependencies
`$ npm install`

### Link with the API
Navigate to the [https://www.themoviedb.org/](https://www.themoviedb.org/) and setup your free accour and generate your own free tmdb API.
Switch back to the repo and find and change the `const url=https://api.themoviedb.org/3/search/movie?api_key=<your_API_KEY>&language=en-US&query=${query}&page=1&include_adult=false;` <your_API_KEY> section with your own API.

example: `const url=https://api.themoviedb.org/3/search/movie?api_key=1a79a4d60de6718e8e5b326e338ae533&language=en-US&query=${query}&page=1&include_adult=false;`

__NOTE: `1a79a4d60de6718e8e5b326e338ae533` is not a valid API key__

### Run and Enjoy!
`$ npm start`

### Resources

[Build a Movie Search App in React course by Scrimba](https://scrimba.com/learn/reactmovie "Build a Movie Search App in React")

[The Movie DB API Reference](https://developer.themoviedb.org/reference/intro/getting-started "Getting Started with TMDB API")