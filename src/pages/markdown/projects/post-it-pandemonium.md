---
title          : Post-It Pandemonium
excerpt        : Building a 8-foot-tall QR code out of 900 Post-Its.
header         :
  teaser       : /assets/images/projects/post-it-pandemonium/teaser.jpg
gallery        :
  - url        : /assets/images/projects/post-it-pandemonium/gallery-1.jpg
    image_path : /assets/images/projects/post-it-pandemonium/gallery-1.jpg
    alt        : >-
                 The color chart for the QR code being built.
                 This shows the number of Post-Its that were used for each color.
    title      : >-
                 The color chart for the QR code being built.
                 This shows the number of Post-Its that were used for each color.
  - url        : /assets/images/projects/post-it-pandemonium/gallery-2.jpg
    image_path : /assets/images/projects/post-it-pandemonium/gallery-2.jpg
    alt        : >-
                 An example of a page that is distributed to helpers.
                 They place Post-Its on the other side of the page, then affix the assembly to the main poster board.
    title      : >-
                 An example of a page that is distributed to helpers.
                 They place Post-Its on the other side of the page, then affix the assembly to the main poster board.
  - url        : /assets/images/projects/post-it-pandemonium/gallery-3.jpg
    image_path : /assets/images/projects/post-it-pandemonium/gallery-3.jpg
    alt        : >-
                 The backing poster board before any Post-Its were applied.
                 Each side is approximately eight feet long.
    title      : >-
                 The backing poster board before any Post-Its were applied.
                 Each side is approximately eight feet long.
  - url        : /assets/images/projects/post-it-pandemonium/gallery-4.jpg
    image_path : /assets/images/projects/post-it-pandemonium/gallery-4.jpg
    alt        : >-
                 QR code being built.
                 About 3/4ths of the Post-Its have been placed at this point.
    title      : >-
                 QR code being built.
                 About 3/4ths of the Post-Its have been placed at this point.
  - url        : /assets/images/projects/post-it-pandemonium/gallery-5.jpg
    image_path : /assets/images/projects/post-it-pandemonium/gallery-5.jpg
    alt        : >-
                 Finished QR code.
                 You might even be able to scan it with your phone!
    title      : >-
                 Finished QR code.
                 You might even be able to scan it with your phone!
  - url        : /assets/images/projects/post-it-pandemonium/gallery-6.jpg
    image_path : /assets/images/projects/post-it-pandemonium/gallery-6.jpg
    alt        : >-
                 Myself in front of the finished QR code for scale.
                 Photo credit to Alan Zhao.
    title      : >-
                 Myself in front of the finished QR code for scale.
                 Photo credit to Alan Zhao.
---

You can find additional pictures of the project in the [gallery below](#gallery).

![The teaser image, which is a picture of the finished QR code.]({{ page.header.teaser }})

## Background

In 2019, I attended the [Special Interests Group in Computer Science Education (SIGCSE) Technical Symposium](http://sigcse2019.sigcse.org/) in Minneapolis, Minnesota.
This conference focuses on computer science education and research in that field.
I was teaching computer science classes at the time, so I hoped that attending the conference would be beneficial to my teaching.

One of the meetings I attended was the [Nifty Assignments](http://nifty.stanford.edu/) session.
As per their website, this session is about "gathering and distributing great assignment ideas and their materials."
Within that session, the [*Post-It Pandemonium*](http://nifty.stanford.edu/2019/popyack-nifty-post-it/) presentation by [Jeffrey L. Popyack of Drexel University](https://drexel.edu/cci/about/directory/P/Popyack-Jeffrey/) caught my eye.
The project involves multiple people placing different color Post-Its at specific points on a board or wall to create a larger image.
At smaller image resolutions, the concept is identical to [pixel art](https://en.wikipedia.org/wiki/Pixel_art).

*Post-It Pandemonium* is an example of an "unplugged" computer science activity.
It teaches computer science concepts while not having to be on a computer.
Specifically, it teaches about the following:

  * algorithms, how different methods of decoding and building can lead to the same result
  * data representation, how image files are represented
  * data compression, as the colors of Post-Its to place are encoded with indices and must be decoded to the color
  * parallelism, how multiple workers can speed up the decoding or building of an image

## Project

I loved Popyack's example and thought about how I could replicate it on my own.
Doing this for one of my classes didn't make sense, as I couldn't relate it to what I was teaching at the time.
Instead, I decided to work on the project and represent [UC Davis's Department of Computer Science](https://cs.ucdavis.edu/) at the following events:

  * Decision Day 2019 on April 6, aimed at potential freshmen students
  * [Picnic Day 2019](https://www.ucdavis.edu/news/insiders-guide-uc-davis-picnic-day/) on April 13, a family-friendly event all about UC Davis

The image I chose was a [QR code](https://en.wikipedia.org/wiki/QR_code) that leads to [my department's home page](https://cs.ucdavis.edu/).
I used three colors to represent the image based on the Post-It colors I had available:

  * blue, to represent black in the QR code
  * yellow, to represent white in the QR code
  * pink, to represent the quiet zone around the QR code

Attendees at both events put together 6 Post-Its to fill in one section of the poster board.
The sections ranged from A1-J15, for a total of 150 sections and 900 Post-Its.
Each Post-It was 3 inches by 3 inches, and with 30 Post-Its per side, the QR code was 90 inches on each side, or approximately 8 feet.
You can find an example of the instructions given to each attendee and pictures of the QR code being built and completed in the [gallery below](#gallery).

I have to say thank you to all the people who helped me with the project at the events and with the setup, especially Alan Zhao (who took the photo in the teaser) and [Melinda Meeker](https://cs.ucdavis.edu/directory/melinda-meeker) (my department's receptionist).
The best part of the event for me was when children would participate and have fun building and learning.
One girl in particular took a lot of interest in the project and was asking her father afterwards about computer science-related topics.
I hope I've inspired some interest in computer science for some of these children.

## Gallery

Gallery of relevant photos to this project.

{% include gallery %}
