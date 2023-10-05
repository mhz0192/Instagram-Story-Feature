 var shumti = [
    {dp:"https://images.unsplash.com/photo-1631947430066-48c30d57b943?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1916&q=80"
    ,story:"https://images.unsplash.com/photo-1624700636207-a02b569c9457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1624700636207-a02b569c9457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    ,story:"https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1631947431457-29e3c8b753cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    ,story:"https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1627386100558-072f80c17b86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    ,story:"https://images.unsplash.com/photo-1649217708497-7e5ca8c20703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
    {dp:"https://images.unsplash.com/photo-1619018835000-f326c26196b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    ,story:"https://images.unsplash.com/photo-1626401740089-64040bf7d74f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"},
 ];

var stories = document.querySelector("#stories")
 var clutter = "";
 shumti.forEach(function(hassan,index){
    clutter += `<div class="story">
    <img id="${index}" src="${hassan.dp}" alt="">
  </div>`
 });

 stories.innerHTML = clutter;
 stories.addEventListener("click", function(dets){
    document.querySelector("#screen").style.display = "block"
    document.querySelector("#screen").style.backgroundImage = `url(${shumti[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector("#screen").style.display = "none"
    }, 3000)
 });