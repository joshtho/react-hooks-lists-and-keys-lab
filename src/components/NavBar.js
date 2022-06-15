import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let linksArr = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })
  //console.log(linksArr)
  return <nav>{linksArr}</nav>;
}

export default NavBar;
