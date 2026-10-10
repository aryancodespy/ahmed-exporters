"use strict";
(() => {
  const menuButton=document.querySelector(".menu-button");
  const mobileNav=document.getElementById("mobile-navigation");
  const desktopBreakpoint=1080;
  function closeMenu(){
    if(!menuButton||!mobileNav)return;
    mobileNav.hidden=true;
    menuButton.setAttribute("aria-expanded","false");
    menuButton.setAttribute("aria-label","Open navigation");
  }
  if(menuButton&&mobileNav){
    menuButton.addEventListener("click",()=>{
      const opening=mobileNav.hidden;
      mobileNav.hidden=!opening;
      menuButton.setAttribute("aria-expanded",String(opening));
      menuButton.setAttribute("aria-label",opening?"Close navigation":"Open navigation");
    });
    mobileNav.addEventListener("click",event=>{
      if(event.target.closest("a"))closeMenu();
    });
    document.addEventListener("keydown",event=>{
      if(event.key==="Escape"&&!mobileNav.hidden){closeMenu();menuButton.focus();}
    });
    window.addEventListener("resize",()=>{
      if(window.innerWidth>desktopBreakpoint)closeMenu();
    });
    document.addEventListener("click",event=>{
      if(!mobileNav.hidden&&!mobileNav.contains(event.target)&&!menuButton.contains(event.target))closeMenu();
    });
  }
  document.querySelectorAll("[data-year]").forEach(node=>{
    node.textContent=String(new Date().getFullYear());
  });
  const form=document.getElementById("enquiry-form");
  const status=document.getElementById("enquiry-status");
  if(form){
    const search=new URLSearchParams(location.search);
    const interest=search.get("interest");
    if(interest&&interest.length<=160){
      const productField=form.elements.namedItem("interest");
      if(productField)productField.value=interest;
    }
    form.addEventListener("submit",event=>{
      event.preventDefault();
      if(!form.reportValidity())return;
      const values=new FormData(form);
      const get=key=>String(values.get(key)||"").trim();
      const subject="Sourcing enquiry — "+(get("interest")||get("type"));
      const body=[
        "Ahmed Exporters — Business Enquiry","",
        "Full name: "+get("name"),
        "Company: "+(get("company")||"Not provided"),
        "Email: "+get("email"),
        "Destination market: "+(get("destination")||"Not specified"),
        "Enquiry type: "+get("type"),
        "Product interest: "+(get("interest")||"Not specified"),
        "Estimated quantity: "+(get("quantity")||"Not specified"),"",
        "Buying requirement:","",get("message"),"",
        "—",
        "Prepared via the Ahmed Exporters website"
      ].join("\n");
      const draft="mailto:info@ahmedexporters.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
      if(status){
        status.textContent="Your email application should open with the completed draft. Review the details and press Send; this website does not transmit the enquiry automatically.";
      }
      window.location.href=draft;
    });
  }
})();
