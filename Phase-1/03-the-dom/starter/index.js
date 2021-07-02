
//Render ***********
function renderAside(storeObj){
    //console.log(storeObj)
    document.querySelector('.location').textContent = storeObj.name
    document.querySelector('#hours').textContent = storeObj.hours
    document.querySelectorAll('aside ul li')[0].textContent = storeObj.number
    document.querySelectorAll('aside ul li')[1].textContent = storeObj.address
  }
  

function renderCard(book){
    //console.log(book)
    let li = document.createElement('li');
    li.className='card'
    //console.log(li);
    //let divContent = document.createElement('div');
    let h4Title = document.createElement('h4');
    h4Title.textContent = book.title
    //console.log(h4Title)
    let h4Author = document.createElement('h4');
    h4Author.textContent = book.author;

    let h5Price = document.createElement('h5');
    h5Price.textContent = "$" + book.price + ".00"

    let img = document.createElement('img');
    img.src = book.image_url;

    //console.log(h4Author)
    li.append(img, h4Title, h4Author, h5Price)
    document.querySelector('#book-list').appendChild(li)
  }


//Initial Render 
function initialRender(){
    renderAside(bookStore)
    document.querySelector('#book-list li').remove()
    //bookStore.inventory.forEach(book => renderCard(book)) //how to loop through each book in inventory (longer version)
    bookStore.inventory.forEach(renderCard) //shorter version
  
  }
  initialRender()
  


//   //starter code:

//   //Render

//   function renderAside(dataObjParameter){

//   }

//   function renderRightside(dataObjParmeter){

//   }


//   //Initial Render
//   function initialRender(){
//       renderAside(dataObject)
//       renderRightSide(dataObject)

//   }

//   initialRender()