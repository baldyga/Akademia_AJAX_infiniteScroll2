function getData() {
    fetch('https://jsonplaceholder.typicode.com/users') 
        .then(data =>data.json())
        .then(data=>{
        console.log(data)
            
            let paragraphStart = document.createElement("p");
            let textStart = document.createTextNode( "---- BEGIN OF DATA ----" ); 
            paragraphStart.appendChild( textStart ); 
            document.body.appendChild(paragraphStart); 

        for(let i = 0; i < data.length; i++) {
            let paragraphId = document.createElement("p");
            let paragraphUrl = document.createElement("p");
            let paragraphName = document.createElement("p");
            
            let paragraphLine = document.createElement("p");
            let textLine = document.createTextNode( "------" );
            paragraphLine.appendChild( textLine ); 
            document.body.appendChild(paragraphLine); 

            paragraphId.innerHTML = data[i].id
            document.body.appendChild(paragraphId); 

            paragraphUrl.innerHTML = data[i].website
            document.body.appendChild(paragraphUrl); 

            paragraphName.innerHTML = data[i].name
            document.body.appendChild(paragraphName); 

    
        }
        let paragraphEnd = document.createElement("p");
            let textEnd = document.createTextNode( "---- END OF DATA ----" ); 
            paragraphEnd.appendChild( textEnd ); 
            document.body.appendChild(paragraphEnd); 
    });
}
getData()

window.addEventListener('scroll', function() {
    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;

    console.log("document.documentElement",document.documentElement)
    console.log("d.scrollTop",d.scrollTop)
    console.log("window.innerHeight",window.innerHeight)
    console.log("height",height)

    if (height == offset ) {
        getData()
    }
});
