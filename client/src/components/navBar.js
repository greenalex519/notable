import React, { Component } from 'react';

class NavBar extends React.Component {
  render () {
    return (
      <div id="NavBar">
        <div id="title">title</div>
        <div id="cart">cart</div>
        <div id="catalogue">catalogue</div>
        <div id="profile">profile</div>
        <div id="leftHeader">left header</div>
        <div id="rightHeader">right header</div>
      </div>
    )
  };
};

/*
class Title //n-t
//default

class Cart //n-s
//[default]
//[edit]

class Catalogue //n-c
//[default]
//[product]

class Profile //n-p
//[deault]
//[edit]

class LeftHeading //n-lh
//[default] blank
//[edit] green blank

class RightHeading //n-rh
//[catalogue:subheadings.map]
//[order]
//Profile
//product




export //classes...
*/
