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

I have a map() drawing all the different sections

I should add a type, and display them in order of type using
3 maps that apply a filter

Right now I have all the fields just saved in the userData
object as userData.fieldName

but, to make it work with multiple jobs and educations, you would
need to have an array of jobs and educations and store objects in
there. (Below)

But, you would still be able to have the 3 input sections
General, Educational, Job input sections

jobs=[
    {
        company: Company
        position: Position
        responsibilities: Responsibilities
        from: from
        to: to
    },
    {
        company: Company
        position: Position
        responsibilities: Responsibilities
        from: from
        to: to
    }
]

education=[
    {
        school: School
        title: title
        date: date
    }
    
]

I need to make the fields controlled fields

Read the documentation about controlled fields