/* Results: remove rounded corners only when a panel actually touches a viewport edge. */
(()=>{
  'use strict';
  const selector='[data-results-edge-panel], .hero.hero-featured > .hero-grid, .interior-main .interior-hero-grid, .course-landing .landing-hero-grid';
  const panels=()=>document.querySelectorAll(selector);
  let pending=false;
  function update(){
    pending=false;
    const width=document.documentElement.clientWidth;
    for(const panel of panels()){
      // Removing the class before measurement prevents self-influencing geometry.
      panel.classList.remove('results-edge-flush');
      const r=panel.getBoundingClientRect();
      const touchesLeft=r.left<=1&&r.right>0;
      const touchesRight=r.right>=width-1&&r.left<width;
      panel.classList.toggle('results-edge-flush',touchesLeft||touchesRight);
    }
  }
  function schedule(){if(!pending){pending=true;requestAnimationFrame(update)}}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true});else schedule();
  window.addEventListener('resize',schedule,{passive:true});
  if('ResizeObserver'in window){
    const observer=new ResizeObserver(schedule);
    function observe(){for(const panel of panels())observer.observe(panel)}
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',observe,{once:true});else observe();
  }
})();
