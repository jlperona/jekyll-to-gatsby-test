---
title          : Death Star Wayfinding
excerpt        : Helping navigate through UC Davis' Death Star.
header         :
  teaser       : /assets/images/projects/death-star-wayfinding/teaser.jpg
gallery        :
  - url        : /assets/images/projects/death-star-wayfinding/gallery-1.jpg
    image_path : /assets/images/projects/death-star-wayfinding/gallery-1.jpg
    alt        : >-
                 UC Davis' Social Sciences and Humanities Building.
                 It's nicknamed the 'Death Star' for how confusing it is to navigate.
    title      : >-
                 UC Davis' Social Sciences and Humanities Building.
                 It's nicknamed the 'Death Star' for how confusing it is to navigate.
  - url        : /assets/images/projects/death-star-wayfinding/gallery-2.jpg
    image_path : /assets/images/projects/death-star-wayfinding/gallery-2.jpg
    alt        : >-
                 An example rendering of the SVG for the 0th (bottom) floor of the Death Star.
                 The lines between rooms are valid paths that the algorithm can travel on.
                 Lines that appear to go nowhere, such as the ones on the far right, are 'portals' that travel between floors.
    title      : >-
                 An example rendering of the SVG for the 0th (bottom) floor of the Death Star.
                 The lines between rooms are valid paths that the algorithm can travel on.
                 Lines that appear to go nowhere, such as the ones on the far right, are 'portals' that travel between floors.
  - url        : /assets/images/projects/death-star-wayfinding/gallery-3.jpg
    image_path : /assets/images/projects/death-star-wayfinding/gallery-3.jpg
    alt        : >-
                 An example rendering of a wayfinding from one room to another.
                 Example taken from the UC Davis Wayfinding GitHub page.
    title      : >-
                 An example rendering of a wayfinding from one room to another.
                 Example taken from https://ucdavis.github.io/wayfinding/.
---

You can see the relevant pull request [on GitHub](https://github.com/ucdavis/wayfinding/pull/43).

![The teaser image, which is a picture of UC Davis' Social Sciences and Humanities Building.]({{ page.header.teaser }})

## Background

In my senior year of my Bachelor's degree, I took ECS 193AB (Senior Design Project) with [Professor Xin Liu](https://xinliu.engineering.ucdavis.edu/).
This two-quarter class sequence was the capstone design project for that degree.

My team's choice of project was to improve the [Division of Social Services Wayfinding](https://github.com/ucdavis/dss-wayfinding) application.
The program was designed to help people navigate UC Davis' Social Sciences and Humanities Building, designed by [Antoine Predock](http://www.predock.com/SocialSciences/UC%20Davis.html).
Students call it the "Death Star" as it's well-known for being confusing to navigate.

Our team divided ourselves into pairs of two to work on separate portions of the program.
My partner and I worked on designing a linter to clean up the SVGs that mapped out the Death Star.

## Project

[Scalable Vector Graphics (SVGs)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) form the basis of the wayfinding application.
You can see an example SVG in the [gallery below](#gallery).
The base layer defines the layout of a building's floor and its associated rooms.
Lines between the rooms are valid paths that someone can travel on.
There are lines that appear to go nowhere; these are "portals" to connect different floors and thus different SVGs.

The wayfinding itself is done via [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).
To facilitate this, the set of SVGs defines a graph via the following:

  * rooms form nodes in the graph and are the starting and ending nodes for pathfinding
  * paths form the edges in the graph
  * points where paths in a SVG meet are intermediary nodes to connect rooms
  * portals are edges between nodes defined in different SVG files

Due to impreciseness in SVG editors such as Adobe Illustrator, subtle errors can pop up and affect the correctness of the pathfinding:

  * rooms or nodes can be unreachable
  * two nodes can unintentionally be "close" to each other instead of being the same node, causing pathfinding errors
  * portals can be ill-defined and thus not connect to other portals properly

To solve these issues, my partner and I wrote a linter in C++ to analyze the SVGs.
The linter uses a breadth-first-search to determine connectivity and to determine if portals are defined correctly.
For "close" nodes, the linter calculates Euclidian distances between all points on a floor and displays point pairs that are within a certain threshold distance.

You can see the relevant pull request [on GitHub](https://github.com/ucdavis/wayfinding/pull/43).

## Gallery

Gallery of relevant photos to this project.

{% include gallery %}
