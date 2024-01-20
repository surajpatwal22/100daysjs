This is a simple counter app that can be used to increment, decrement and reset the count.

The HTML file contains the following elements:

* A container div that will hold all the other elements
* A container-div that will hold the heading and the count
* A count span that will display the current count
* A buttons div that will hold the three buttons

The CSS file contains the following styles:

* The container div is set to a light blue background color and has a flex layout
* The container-div is set to a dark blue background color and has padding and text-align center
* The count span is set to a large font size
* The buttons div is set to have padding and margin, and the buttons are set to have rounded corners and a cursor pointer
* The fas class is set to have a margin-right of 1px
* The subtract class is set to have an orangered background color, white text, and no border
* The reset class is set to have a white background color, black text, and no border
* The add class is set to have a green background color, white text, and no border

The JavaScript file contains the following code:

* The first approach is to add event listeners to each of the buttons
* The second approach is to use event delegation and add a single event listener to the buttons div
* The third approach is to use a variable to store the current count and increment it each time the add button is clicked

The setColor function is used to change the color of the count span based on the current count.

To run the app, open the index.html file in a browser.