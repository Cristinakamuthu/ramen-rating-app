# Ramen rater - README

This project is a simple web application called "Ramen Rater" that allows users to view and rate different types of ramen. The application is built using HTML, CSS, and JavaScript. Below is a detailed explanation of each part of the code.

## HTML Structure

### <!DOCTYPE html>
- Declares the document type and version of HTML being used (HTML5).
 - the #ramen-menu div is used to display a list 
of ramen items.
- every ramen item is displayed as an image. when clicked details about the ramen are displayed.
- details such us the ;
image --- represented by the #foodImage id
name ---- represented by the #select id
restaurant--- represented by the #restaurant id
rating ---- represented by the #rating id
comment ---- represented by the #comment id

A RAMEN FORM
- This form at the bottom of the page allows users to add a new ramen to the menu.
- The form includes details such as;
The Ramen's name,
the Restaurant where the ramen is served
the URL of the image of the ramen
the rating of the ramen (1-100)
A comment about the ramen

HOW JAVASCRIPT WAS USED ;

- The ramens and their details were displayed using the function 
displayRamens().it appends them to the #ramen-menu div.where when an image is selected it displays information about the ramen 

- the function of handleclick() adds to the ramen sectionwith the ramen's information.

- the addEventListener() function listens for the form submission.thus whe the form is submitted, a new ramen is created with the details added to the ramens arraya and displayed using the displayRamens() function.

HERE IS THE LINK FOR THE RAMEN-RATING APP
link :
https://cristinakamuthu.github.io/ramen-rating-app/




