# WS.Demos.TuringMachine
This project contains a React implementation of the Turing Machines described in *The Annotated Turing* by Charles Petzold.

It is entirely written in `TypeScript` and `React` to run in the browser. There is no server side code. Presentation is via `Bootstrap`. Since upgrading to Bootstrap 4 the project has switched from using the `react-bootstrap` to the `reactstrap` module.

Use `npm` to download the required modules and `webpack` to compile the TypeScript files into a JavaScript distribution file. Then just open `index.html` in a browser.

## Current Features

* Select from a list of Turing Machines
* Step through operation of the selected Turing Machine with current instruction highlighted
* Run the selected Turing Machine automatically

## Future Development
Here is a list of functionality that I hope to add to the project:

* Implement more than the first few Turing Machines
* Load Turing Machine definitions from file
* Write or edit Turing Machines
* Save Turing Machines to a file
