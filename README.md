# Documentation

-   ## Index

    -   Introduction
    -   Getting started
        -   Technology used
        -   Tools used
    -   Application architecture
        -   Directory structure
        -   Logical architecture
    -   Development
    -   Production
    -   Deployment
    -   Contributing
    -   Versioning
    -   Authors
    -   License
    -   Acknowledgement

-   ## Introduction

    -   This is a portfolio project.

-   ## Getting started

    -   ### Technologies used

        -   HTML5
        -   CSS3
        -   SASS
        -   Javascript
        -   Jquery
            -   Plugins
        -   Bootstrap

    -   ### Tools used

        -   VScode
            -   Live sass plugin
        -   Chrome

-   ## Application architecture

    -   ### Directory structure

            /.git
            /.vscode
            /assets
                /css
                /fonts
                /images
                /js
                /scss
            /views
            index.html
            readme.md

    -   ### Logical architecture

        -   #### HTML

            -   All the html pages are included in the /views directory
            -   The common layout elements like header, footer are included in the /common directory

        -   #### CSS/SCSS

            -   CSS is written using SASS preprocessor and gets compiled to /css/main.min.css
            -   The SASS architecture is based on the "OOCSS" using "SMACSS" architecture with "BEM" naming convention
            -   If you think you don't have enough time or skills to utilize the above mentioned architecture, don't worry, you are covered, just name your classes like this "df-your-class-name" and write all your css or scss in the \_dirtyfix.scss file

        -   #### Javascript

            -   The javascript is written in modular fashion utilizing revealing and pubsub design pattern

        -   Other documentation related files are include in the documentation related directory

-   ## Development

    -   Start the development on this project with a simple local host setup.
    -   SASS is compiled using vscode live sass plugin, the settings are included in the project directory, if you want to use new strategy to compile sass please don't forget to mention it in this documentation.

-   ## Production
    -   No additional steps for production
-   ## Deployment
    -   Just put the project files into the root of the web server
-   ## Contributing
    -   This is an individually developed project
-   ## Versioning
    -   There is no versioning for this project
-   ## Authors
    -   Mayank Kumar
        -   Contact me at mayankupadhyay191298@gmail.com
-   ## License
    -   MIT licence
-   ## Acknowledgement
    -   This project acknowledges the effort of all the developers who develops, maintains and make their work free to use for other small developers like me, without their intellectual thoughts, plugins, libraries and tools this project would have not been possible.
