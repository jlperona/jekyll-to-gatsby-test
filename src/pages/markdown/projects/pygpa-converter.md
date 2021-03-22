---
title: pygpa-converter
excerpt: Python script to take international student transcript data and output a 4.0 scale GPA.
header:
  teaser: /assets/images/projects/pygpa-converter/teaser.png
gallery:
  - url: /assets/images/projects/pygpa-converter/gallery-1.jpg
    image_path: /assets/images/projects/pygpa-converter/gallery-1.jpg
    alt: >-
      A spreadsheet of Indian universities that maps their letter grades to the Indian 10-point grade scale.
      You can find this spreadsheet on this project's GitHub repository.
    title: >-
      A spreadsheet of Indian universities that maps their letter grades to the Indian 10-point grade scale.
      You can find this spreadsheet at https://github.com/jlperona/pygpa-converter/blob/master/data/india10.csv.
  - url: /assets/images/projects/pygpa-converter/gallery-2.jpg
    image_path: /assets/images/projects/pygpa-converter/gallery-2.jpg
    alt: >-
      A test spreadsheet for verifying that GPA conversions that are correct.
      Normally, student transcript data would be input in each row.
    title: >-
      A test spreadsheet for verifying that GPA conversions that are correct.
      Normally, student transcript data would be input in each row.
  - url: /assets/images/projects/pygpa-converter/gallery-3.jpg
    image_path: /assets/images/projects/pygpa-converter/gallery-3.jpg
    alt: >-
      The result of running pygpa-converter on the test spreadsheet from the previous picture.
      For each grade scale (or student in normal usage) pygpa-converter computes the input's 4.0 GPA scale-equivalent.
    title: >-
      The result of running pygpa-converter on the test spreadsheet from the previous picture.
      For each grade scale (or student in normal usage) pygpa-converter computes the input's 4.0 GPA scale-equivalent.
---

You can find this project on GitHub at [jlperona/pygpa-converter](https://github.com/jlperona/pygpa-converter).

![The teaser image, which is a picture of the repository's name in GitHub's naming style.](../../../images/projects/pygpa-converter/teaser.png)

## Background

From 2016-2020, I served as a graduate peer adviser in [UC Davis's Department of Computer Science](https://cs.ucdavis.edu/).
One of my responsibilities in that role was to help with graduate student admissions.

Every year, our program received over 2000 applications.
A significant percentage of those were international applicants from countries who do not use the United States' 4.0 GPA scale.
In order to fairly compare with domestic students, their GPAs need to be converted over to the 4.0 GPA scale.

This process is extremely tedious, as it requires looking at every student's transcripts and all their classes.
Trying to automate this process via optical image recognition or machine learning is impractical due to the differences in transcripts across universities and how students submit their transcripts.
Some students submit images, while other students submit PDFs provided by their universities.
There is an incredible amount of variance just within the United States, to say nothing about other countries with different scales.
It would be incredibly intensive (though possibly a good idea for a company) to develop a method to automate GPA calculation for every single university that exists.

Instead, I created a script for my own use to make this process more efficient.
It also saved time for my team who was helping me with the applications.

## Project

The script takes in student transcript data via CSV, then calculates 4.0 GPA equivalents and outputs those.
If there are any errors, the script will warn the user.
See the [gallery below](#gallery) for input and output examples.

[My first version of this script](https://github.com/jlperona/gpa-converter) was written in C++.
I didn't know Python very well at the time, but I did know C++.
That program was _okay_, but it wasn't great.
The base of the program worked just fine, but eventually I decided I wanted to implement support for a specific type of grade scale used in India.
This would have taken a significant amount of work to do in C++, but is fairly easy in Python.

As with any rewrite, eventually I "bit the bullet" and decided to go forward with it.
I'm glad that I did so, as the code is far more readable and less verbose in Python.
Error handling and providing feedback to the end user on what went wrong is much clearer, as well.

This project is open-source and available on GitHub at [jlperona/pygpa-converter](https://github.com/jlperona/pygpa-converter).
Its C++ predecessor is also open-source and available on GitHub at [jlperona/gpa-converter](https://github.com/jlperona/gpa-converter).

## Gallery

Gallery of relevant photos to this project.

{% include gallery %}
