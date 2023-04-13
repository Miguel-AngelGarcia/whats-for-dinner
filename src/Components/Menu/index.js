//Menu -> index.js
export { default } from "./Menu";

//
/*
https://stackoverflow.com/questions/71112113/react-js-export-problems-possible-exports-default
I've been doing something alittle different. Inside my Components Folder, I will list all my components, and when Im done, I will add an index.jsx file. And inside the index.jsx file I'll list all the components inside there.

export { default as Navbar } from './Navbar';
export { default as Home } from './Home';
export { default as Footer } from './Footer';
export { default as Contact } from './Contact';
export { default as Body } from './Body';
export { default as Subscribe } from './Subscribe';
Then inside App.js, I'll import everything like this.

import { 
  Navbar, 
  Home, 
  Footer, 
  Blog, 
  Contact,
  Subscribe } from './components'; 
  */
