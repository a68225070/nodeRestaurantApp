doctype
html
head
title Feed Me
body
h1 Restaurants
hr
each d in data
li
a(href='/menu/'+d.name)= d.name