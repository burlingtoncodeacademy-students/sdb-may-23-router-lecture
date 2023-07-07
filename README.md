# React Router

A dependency when implemented, will allow us to create endpoints within our front end application

These endpoints will correspond to the endpoints within our server

The endpoints will render a particular component we wish for them to display

## Getting Started
1. Install React Router by using `npm i react-router-dom@6`

### React Router Components

- Router
    - component that provides clean URL's
    - a wrapper for all components which utilize the routing system
- Routes (formerly Switch v5 & below)
    - containers for nested tree of elements that renders the branch that best matches the current location
    - declcare where each dynamic component will belong
- Route
    - an invididual route specifying component to be rendered when hit
    - consists of path and element props (there are more)
    - `path` sepcifies route definition
    - `element` specifies the component to be mounted when the route is hit
    