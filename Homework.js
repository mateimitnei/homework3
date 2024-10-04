/*
Template - Homework template folder.
Task: You need to build an image gallery using one of three methods (better to implement with all of them):
- using the replace method,
- using template strings,
- using the createElement method.

General description: You need to take the data located in the file data.js, process this data, and display it on the screen.
To display the images on the screen, you need to implement a loop that will create the necessary HTML code for subsequent
insertion into the page.
HTML code can be created using one of three possible methods. Two of these methods are shown in the template.
The third was covered in the lecture on the DOM topic.

Recommendation: This task is extensive, try to implement as much as you can. If something is unclear, skip it or do as you understand it.

Step-by-step algorithm:
• Take the data from data.js.
Display only the image, title, description, and date from the original data. For these data, use transformations that
 were in the previous homework. Discard the remaining data.
• Get the resulting array of objects.
Determine the type of gallery you will build. To do this, get the value from the first select box. An example of how to
    do this is provided in the code. You will get values 0, 1, 2, etc., which are the content of the value attribute.
• Determine the number of items you will display in the gallery. To do this, get the value from the second select box.
• After clicking the "build gallery" button, trigger the `run` or `init` function, which will build the gallery.
• Iterate through the array of objects using a loop. The number of iterations depends on the value selected in the second select box.
• On each iteration of the loop, create HTML code using the method chosen in the first select box. Examples of creating
    HTML code are provided in the template.
• When building the gallery, hide all blocks that do not belong to the selected type of gallery. Accordingly, only one
    title and the gallery itself should be displayed. Each such block is located inside a container with a class
    (first-group, second-group, third-group). Thus, for example, if the second-group block is displayed, all other blocks should be hidden.
• If the user changes the parameters by selecting different values in the select box, after clicking the "build gallery"
    button, the gallery should be recreated according to the new parameters.
    For example, if the building method is changed, hide the second-group block and show the one that is needed, and rebuild
    the gallery using the new method. At the same time, read the value from the second select box again and build the required number of items.
*/
