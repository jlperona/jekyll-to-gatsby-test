---
title          : BART Passenger Heatmap
excerpt        : Shiny app for displaying BART hourly origin-destination data.
header         :
  teaser       : /assets/images/projects/bart-passenger-heatmap/teaser.jpg
gallery        :
  - url        : /assets/images/projects/bart-passenger-heatmap/gallery-1.jpg
    image_path : /assets/images/projects/bart-passenger-heatmap/gallery-1.jpg
    alt        : >-
                 One of the San Francisco Bay Area Rapid Transit (BART) trains.
                 I used BART's passenger data as the basis for my heatmap.
    title      : >-
                 One of the San Francisco Bay Area Rapid Transit (BART) trains.
                 I used BART's passenger data as the basis for my heatmap.
  - url        : /assets/images/projects/bart-passenger-heatmap/gallery-2.jpg
    image_path : /assets/images/projects/bart-passenger-heatmap/gallery-2.jpg
    alt        : >-
                 A PowerPoint slide detailing my favorite part in designing the heatmap.
                 This slide came from my project presentation for ECI 254, the class I made this heatmap for.
    title      : >-
                 A PowerPoint slide detailing my favorite part in designing the heatmap.
                 This slide came from my project presentation for ECI 254, the class I made this heatmap for.
  - url        : /assets/images/projects/bart-passenger-heatmap/gallery-3.jpg
    image_path : /assets/images/projects/bart-passenger-heatmap/gallery-3.jpg
    alt        : >-
                 The default view for the heatmap, visually showing the distribution of passengers on the BART network.
                 You can find a hosted version of the heatmap on shinyapps.io.
    title      : >-
                 The default view for the heatmap, visually showing the distribution of passengers on the BART network.
                 You can find a hosted version of the heatmap at https://jlperona.shinyapps.io/bart-passenger-heatmap/.
---

You can find a hosted version of this project on [shinyapps.io](https://jlperona.shinyapps.io/bart-passenger-heatmap/).

![The teaser image, which is a picture of a San Francisco Bay Area Rapid Transit (BART) train.]({{ page.header.teaser }})

## Background

During the course of my Master's degree, I took ECI 254 (Exploring Data from Built Environment Using R) with [Professor Deb Niemeier](https://faculty.engineering.ucdavis.edu/dniemeier/).
My choice for the final project for that class was to create a heatmap of passengers that traveled through the [San Francisco Bay Area Rapid Transit (BART)](https://www.bart.gov/) system.
As the class required the use of [R](https://www.r-project.org/), I decided to use [Shiny](https://shiny.rstudio.com/) to help me build the heatmap.

The heatmap is heavily based on one of my previous projects, [jlperona/bart-hourly-dataset-parser](https://github.com/jlperona/bart-hourly-dataset-parser).
I wrote that parser for MAE 253 (Network Theory and Applications) with [Professor Raissa D'Souza](http://mae.engr.ucdavis.edu/dsouza/).
Its purpose is to parse [BART hourly origin-destination data](https://www.bart.gov/about/reports/ridership) into network files that can be imported into another program.

## Project

I wanted to see the BART network mapped with actual GIS data, and with the passenger data that BART provides on their website.
One of the ways of doing that was by combining Shiny, which helps me create a web application, with [*leaflet*](https://rstudio.github.io/leaflet/), which lets me map the GIS data.

To do so, I wrote a [preparser](https://github.com/jlperona/bart-passenger-heatmap/tree/master/preparser) to first parse all the data into a file that could be quickly parsed by the application.
After I had the file, I wrote the code to parse the data in plain R, then the code to render the data as a heatmap using Shiny and *leaflet*.
For more details on the technical aspects of the project, see [this RMarkdown document in the repository](https://github.com/jlperona/bart-passenger-heatmap/blob/master/bart-passenger-heatmap.Rmd).

You can find a hosted version of this project on [shinyapps.io](https://jlperona.shinyapps.io/bart-passenger-heatmap/).
All code is open-source and available on GitHub at [jlperona/bart-passenger-heatmap](https://github.com/jlperona/bart-passenger-heatmap).
Both it and its predecessor are licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Gallery

Gallery of relevant photos to this project.

{% include gallery %}
