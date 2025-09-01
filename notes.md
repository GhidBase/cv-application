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

So I want to switch each section so that instead of rendering
html based off of the inputSections array, it's based on the
userData array

However, I'll need a function that can go and grab the inputs
value from the inputSections object that has the matching
type

I could change it so inputSections is not an array anymore
but rather an object, andeach list of inputs is the value
part of the key named after that type

e.g. General: ["Full Name", "Email"]



How do I switch the inputSections to rendering based off of
userData?

I can just do the same map filter as before, and call inputs
inputSection[type]

Do I even need anything else in the inputSections array?

I think I'm good with just the 2D array