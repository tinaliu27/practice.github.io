const scrollProgressElement = document.querySelector("#scroll-progress");
function scrollProgress() {
    const totalheightofWebpage = document.body.scrollHeight; 
    const currentDistanceFromTop = document.documentElement.scrollTop; 

    const windowheight = document.documentElement.clientHeight; 
    const scrolledPercentage = (currentDistanceFromTop / (totalheightofWebpage - windowheight)) * 100; 

    scrollProgressElement.style.width = Math.round(scrolledPercentage) + "%";
    
}
document.adddEventListener("scroll", scrollProgress); 