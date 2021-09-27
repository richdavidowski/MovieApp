import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import MovieList from './components/MovieList';
import ConAir from './components/ConAir.jpeg';
import ToyStory from './components/ToyStory.jpg';
import reportWebVitals from './reportWebVitals';


let movies = [
  {
      title: 'Con Air',
      image: ConAir,
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa diam, iaculis id aliquet in, fermentum at elit. Maecenas egestas bibendum sollicitudin. Aliquam erat volutpat. Morbi facilisis pretium suscipit. Nulla vitae sollicitudin elit. Aenean a porttitor lacus. Nullam vel condimentum tellus, vitae imperdiet erat. Pellentesque commodo finibus erat, a volutpat risus varius quis. Praesent porttitor dolor vitae gravida tempus. Ut id pulvinar ante. Praesent bibendum dolor ut sapien fermentum vestibulum. Duis augue odio, congue sed egestas id, vehicula facilisis nisl. Vestibulum pulvinar facilisis finibus. Vivamus dictum odio magna, non dictum tellus laoreet at. Fusce egestas arcu a aliquet semper. Nunc ornare finibus eros, vitae semper nulla faucibus nec.mary',
      rating: 'R'
  },
  {
      title: 'Toy Story',
      image: ToyStory,
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus massa diam, iaculis id aliquet in, fermentum at elit. Maecenas egestas bibendum sollicitudin. Aliquam erat volutpat. Morbi facilisis pretium suscipit. Nulla vitae sollicitudin elit. Aenean a porttitor lacus. Nullam vel condimentum tellus, vitae imperdiet erat. Pellentesque commodo finibus erat, a volutpat risus varius quis. Praesent porttitor dolor vitae gravida tempus. Ut id pulvinar ante. Praesent bibendum dolor ut sapien fermentum vestibulum. Duis augue odio, congue sed egestas id, vehicula facilisis nisl. Vestibulum pulvinar facilisis finibus. Vivamus dictum odio magna, non dictum tellus laoreet at. Fusce egestas arcu a aliquet semper. Nunc ornare finibus eros, vitae semper nulla faucibus nec.',
      rating: 'G'
  }
];

ReactDOM.render(
  <React.StrictMode>
  <MovieList {...{movies: movies}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
