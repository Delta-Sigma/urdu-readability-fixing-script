# Urdu Readability Fixing Script

## Prerequisites for Usage
1. Nastaleeq Fonts (Jameel Noori Nastaleeq or Alvi Nastaleeq)
2. User Script Manager Add-on for your browser e.g. Greasemonkey on Firefox

## Usage
This is a user script which runs after a web page loads to edit and make the Urdu text look beautiful. To use this you would need the fonts Jameel Noori Nastaleeq or Alvi Nastaleeq installed on your computer. I find Jameel Noori prettier and works fine with Urdu, but it does not support the full character set of some languages (Pashto, for example). You would need to install this script from GreaseMonkey, and it will work. 

## Development
Prior Warning: Noob post. This is my very first project to be written to GitHub.

This is a user script which was born in one night without any prior knowledge of JavaScript and with very basic knowledge of CSS because every website I saw didn't know how Urdu was supposed to be written (i.e. in Nastaleeq script). All it does is find elements marked right-to-left or explicitly marked as Urdu text and changes it's font to a Nastaleeq one.

### 1. It is so simple, it is stupid! No really, it is!
It does not differentiate between Urdu text and other languages with Arabic script, because how can it? Can it? Maybe it needs to give user the options to select some text and immunize it to the font change. Maybe it also needs to let the user see text without extra formatting at times because going Nastaleeq causes space issues, especially issues about line height, and some text may disappear. Also it expects the user to know how to obtain and install Nastaleeq fonts, and use a script with Greasemonkey or something of the sort. The novice user cannot be expected to go to such great lengths.

### 2. It works! (for me at least)
Ever since I started using it, I haven't stopped. And it hasn't bothered me enough to make me work on it more. (Anger makes me work.)

### 3. Feel Free to hate me, or add more to the project. Thanks.
