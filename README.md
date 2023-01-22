# STAR WARS databank

> This project behaves as a personal reference archive for the Star Wars ecosystem. Currently, it includes some characters, planets and vehicles. It also allows the user to define favorites, saving them in the localStorage. It consumes an external API for the data.

## Background

This project is part of the learning path in 4Geeks Academy Spain. It combines intermediate React concepts with API usage. It uses React Router and React Context to create a simple representation of a store management system (such as Flux).

## Usage

The user is able to browse through different entities of the Star Wars saga. They can view a detailed page for each element. They can also mark their favorites, which get stored for future sessions. Finally, there is a search functionality which searches by name within the existing elements.

## Installation

Upon downloading the project, install and start scripts are automatically launched. It can be visualized in the browser.
To run the project at any time:

```
  npm run start
```

## API

The API used is explained in detail [here](https://www.swapi.tech/). The official one is no longer maintained, but this one is functional thanks to someone who created it with the data.
The images are taken via url from [here](https://starwars-visualguide.com/#/) using the extension '/assets/img/[group]/[id]', where 'group' means the entity category (e.g. planets), and the corresponding id, coming from the API results.

## Components/Views/Store

The 'layout.jsx' file is the top component, where React Router is combined with the store. This is the one passed to React.root.render in 'index.js'. The navbar and the footer lay outside of the routed pages. There are 3 routes: home, entity detail (dynamic route) and 404-NotFound page.

Within the js folder, we find 3 sub-folders: component (self-descriptive), views (where full-page layouts are created for the router to consume), and store (where, using useContext hook, a pseudo-store like Flux is implemented to centralize data and actions for the whole site).

The styles are contained in the 'styles' folder. 

### Components

The components are structured as follows:
- Navbar: 
- Footer: 
- CardList: 
- MyCard: 
- DetailCard: 
- SearchList: 
- FavoritesList: 
- ScrollToTop: self-descriptive inherited component.

### Store

- appContext
- Flux

### Views

- Home
- Detail

## Contact info

You can contact me at [marcelrm11@gmail.com](mailto:marcelrm11@gmail.com).

## License

[MIT](https://opensource.org/licenses/MIT)

## Credits

This project was build using a 4Geeks Academy boilerplate. 
For more information see this github [repo](https://github.com/4GeeksAcademy/react-hello-webapp).
