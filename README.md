# Mai-Rice-Photography
  # Mai Rice Photography
## "My First Website Project"

Welcome to my first website project!! This README file provides an overview of my photography website project, how to set it up, and how to use it.

- Table of Contents

- Project Overview

- Technologies Used

- Installation

- Usage

- File Structure

- Contributing



### Project Overview

This project is a basic website designed as part of a tech class. The goal was to create a simple, functional website using HTML, CSS, and JavaScript. 
   
The website includes a home page with a working carousel and a live web cam of one of my favorite places to take pictures, my old stomping grounds... Monterey, California. The gallery has hoverable and clickable photos. The about section that has a count down timer that changes to the closest prime whale watching seasons in Monterey.  It also has 2 different live cameras, one of the bay and one of the sea otters from the Monterey Bay Aquarium. The contact button will take you down to a  clickable email link.  I hope you enjoy my photos, they are just a taste of what I have and what is my passion!

##### Technologies Used

HTML: For structuring the content of the web pages.

CSS: For styling the appearance of the website.

JavaScript: For adding interactivity to the website.

Additional: frameworks - Bootstrap , array looping.


##### Installation
Follow these steps to set up the project locally using Git Bash and Visual Studio Code:

1. Clone the Repository:

Open Git Bash and run the following command to clone the repository:

git clone https://github.com/MaiPrincess/Mai-Rice-Photography.git



2. Navigate to the Project Directory:

Change to the project directory with:

cd Mai-Rice-Photography


3. Open the Project in Visual Studio Code:

Launch Visual Studio Code from Git Bash by running:

code .

this will open the current directory in VS Code.



##### Usage

###### To view and interact with the website:

https://maiprincess.github.io/Mai-Rice-Photography/index.html

or

Open index.html in Your Browser:

You can view the website by opening the index.html file directly in a web browser.

Edit Files:

HTML: Modify the content and structure in the .html files.

CSS: Adjust the styling in the .css files.

JavaScript: Update the interactive behavior in the .js files.

All changes made in VS Code will be reflected when you refresh the web browser.


##### File Structure
Here’s an overview of the project’s file structure:

Mai-Rice-Photography/

├── index.html                                        # Main HTML file
├── Gallery.html                                      # Gallery HTML file
├── about.html                                        # About Me HTML file

├── styles/                                               # Directory for CSS files
│   └── Mai_Rice_Photography.css           # Main stylesheet
      └── carousel.css                                # Carousel stylesheet
         └── live_feed.css                            # Live Feed stylesheet
            └── button.css                            # Scroll to top button stylesheet
               └── gallery.css                        # Gallery stylesheet
                  └── grid-gallery.css                # For the Grid in Gallery stylesheet
                     └── about.css                    # About Me stylesheet
                        └── count_down.css            # Count Down Timer stylesheet

├── scripts/   
    └── Javascript                                    # Carousel JavaScript file│    
       └── button.js                                  # Back to top Button JavaScript file
          └── gallery.js                              # Gallery array loop JavaScript file
             └── photos.js                            # Photo for Gallery array loop JavaScript file
                └── count_down.js                     # Count Down Timer JavaScript file
                   └── Monterey_cords.js              # Monterey Bay Aquarium Map Cords JavaScript file

└── images/                                           # Directory for image files
    └── Gallery Pictures folder holds all JPG         # Gallery Pictures Folder holds all image JPG files



##### Contributing
If you’d like to contribute to this project, please follow these steps:

1.  Fork the Repository: Create a copy of the repository under your own GitHub account.


2.  Clone Your Fork: Use Git Bash to clone your fork:

git clone https://github.com/yourusername/your-forked-repository-name.git


3.  Create a New Branch:

git checkout -b your-branch-name


4.  Make Your Changes: Edit files in Visual Studio Code.

5.  Commit Your Changes:


git add .
git commit -m "Describe your changes here"


6.  Push Your Changes:

git push origin your-branch-name


7.  Submit a Pull Request: Go to your GitHub repository and submit a pull request from your branch to the original repository.


