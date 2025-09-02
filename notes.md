===================== Notes =============================

Input sections
-General Information (name, email, phone)
-Educational Experience (school name, title of study, and date of study)
-Practical Experience (company name, position title, main responsibilities, date from and until when you worked there)

Edit and submit function for each section, or for the whole CV
Submit should submit your form and display the value of your input fields in HTML elements

Edit button should add back (display) the input fields.
You should be able to edit and resubmit the content.

Create a components directory
Styles directory
Will need to import the CSS files in the component files to use them

====================== Lessons Learned ======================
You have to make sure you're creating a new object when
updating state. no newData = userData

instead do newData = {...userData}

====================== To Do ================================

Styling

Put all the CV styling in it's own css doc

Lets add a separator to the two sections

Job section:
Job Title is the main, in bold
Company is secondary,
description third
timeframe on the right of main
city on the right, secondary

Should use h2 for section titles
h3 for job title

Base the styling off of this
https://cv-builder-five-theta.vercel.app/