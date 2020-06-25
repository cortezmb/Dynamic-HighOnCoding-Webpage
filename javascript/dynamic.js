
//Parent element of body
var bodyMain = document.querySelectorAll('body');
    console.log(bodyMain);

//Child element of body <div id ="container">
var divContainer = document.createElement('div');
    divContainer.setAttribute('class','container-fluid')
    divContainer.id = "Container-fluid";

    bodyMain[0].appendChild(divContainer);

//**Beginning of first row**

//Child element of divContainer
var myContainer = document.getElementById('Container')

//New div element <div class="row w-100 ">
var newDivElement = document.createElement('div');
    newDivElement.setAttribute('class', 'row w-100');

    myContainer.appendChild(newDivElement);

//Parent of new div
var myRow = document.getElementById('row w-100');

//New div element <div class ="col list colHt bg-primary d-flex flex-wrap align-items-center justify-content-center justify-content-between p-5 text-white">
var newDivElement2 = document.createElement('div');
    newDivElement2.setAttribute('class', 'col list colHt bg-primary d-flex flex-wrap align-items-center justify-content-center justify-content-between p-5 text-white');
    
    myRow.appendChild(newDivElement2);

//Parent of new list <div id = ""></div>
var myDiv = document.getElementById('col list colHt bg-primary d-flex flex-wrap align-items-center justify-content-center justify-content-between p-5 text-white');

//New list item <li></li>
var myList = document.createElement('li');
    
    myDiv.appendChild(myList);

//Parent of new header 
var myHeader1 = document.querySelectorAll('li');

//Child of list item #1 <h1>HighOnCoding</h1>
var newHeaderElement = document.createElement('h1');
    newHeaderElement.textContent = 'HighOnCoding';

    myHeader1[0].appendChild(newHeaderElement);

//New list Item #2 <li></li>
var myList2 = document.createElement('li');
    
    myDiv.appendChild(myList2);

//Child of list item #2 <h2>Home</h2>
var newHeaderElement2 = document.createElement('h2');
    newHeaderElement2.textContent = 'Home';

    myHeader1[0].appendChild(newHeaderElement2);

//New list Item #3 <li></li>
var myList3 = document.createElement('li');
    
    myDiv.appendChild(myList3);

//Child of list item #3 <h1>Categories</h1>
var newHeaderElement3 = document.createElement('h2');
    newHeaderElement3.setAttribute('class', 'font-weight-lighter');
    newHeaderElement3.textContent = 'Categories';

    myHeader1[0].appendChild(newHeaderElement3);


//**Beginning of second row**

//New div element <div class="row ht-auto w-100">
var newDivElement2 = document.createElement('div');
    newDivElement2.setAttribute('class', 'row w-100');


    myContainer.appendChild(newDivElement2);

//Parent of Row 2 new div
var myRow2 = document.getElementById('row ht-auto w-100');

//New div element <div class ="col-11 offset-1 colHt lightGray">
var newDivElement3 = document.createElement('div');
    newDivElement3.setAttribute ('class', 'col list colHt bg-primary d-flex flex-wrap align-items-center justify-content-center justify-content-between p-5 text-white');

    myRow2.appendChild(newDivElement3);

//Parent of new h1 <div id = ""></div>
var myDiv2 = document.getElementById('col-11 offset-1 colHt lightGray');

//New Row 2 h1 item <h1></h1>
var myList2 = document.createElement('h1');
    myList2.textContent = 'Curse of the Current Reviews';
    myList2.setAttribute('class','text-dark');
    myDiv2.appendChild(myList2);

var paragraphRow2 = document.createElement('p');
    paragraphRow2.textContent = 'When you want to buy any applciation from Apple iTunes store you have more choices that you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on right column of your webpage. Thier choice is dependent on three important factors price, screenshot and reviews.';
    myDiv2.appendChild(paragraphRow2);


//**Beginning of third row**

//New div element <div class="row ht-25 w-100">
var newDivElement4 = document.createElement('div');
    newDivElement4.setAttribute('class','row ht-25 w-100');
 
    myContainer.appendChild(newDivElement4);

//Parent of Row 3 new div
var myRow3 = document.getElementById('row ht-25 w-100 colht');

//New div element <div class ="col-11 offset-1 colHt bg-light">
var newDivElement5 = document.createElement('div');
    newDivElement5.setAttribute('class', 'col-11 offset-1 colHt bg-light');

    myRow3.appendChild(newDivElement5);

//Parent of h3 <div id = ""></div>
var myDiv3 = document.getElementById('col-11 offset-1 colHt bg-light');

//New Row 3 h3 item <h3></h3>
var myList3 = document.createElement('h3');
    myList3.textContent = 'Hello WatchKit';
    myList3.setAttribute('class','blue');
    myDiv3.appendChild(myList3);

var paragraphRow3 = document.createElement('p');
    paragraphRow3.textContent = 'Last month Apple released the anticipated WatchKit Framework for devlopers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to creat Apple Watch applications. In this article we are going to focus on the basics of getting started with teh WatchKit framwork and developing apps for the Apple Watch.';
    myDiv3.appendChild(paragraphRow3);

var mychildDiv3 = document.createElement('div');
    mychildDiv3.setAttribute('class', 'row bg-info orange');

    myDiv3.appendChild(mychildDiv3);

//New Row 3 list Item #1 <li></li>
var myList1Row3 = document.createElement('li');
    myList1Row3.textContent = "12 comments"
    mychildDiv3.appendChild(myList1Row3);

//New Row 3 list Item #2 <li></li>
var myList2Row3 = document.createElement('li');
    myList2Row3.textContent = "124 likes"
    mychildDiv3.appendChild(myList2Row3);    


//**Beginning of fourth row**

// var myRow4 = document.getElementById('row ht-25 w-100',[1]);
var myContainer = document.getElementById('Container')

//New div element <div class ="row ht-25 w-100">
var newDivElement6 = document.createElement('div');
    newDivElement6.setAttribute('class', 'row ht-25 w-100');

    myContainer.appendChild(newDivElement6);

//Parent of Row 4 new div
var myRow4 = document.getElementById('row ht-25 w-100');

//New div element <div class ="col-11 offset-1 colHt bg-light">
var newDivElement7 = document.createElement('div');
    newDivElement7.setAttribute ('class', 'col-11 offset-1 colHt bg-light');

    myRow4.appendChild(newDivElement7);

//Parent of h3 <div id = ""></div>
var myDiv4 = document.getElementById('col-11 offset-1 colHt bg-light', [1]);

//New Row 4 h3 item <h3></h3>
var myList4 = document.createElement('h3');
    myList4.textContent = 'Introduction to Swift';
    myList4.id = 'blue');
    myDiv4.appendChild(myList4);

var paragraphRow4 = document.createElement('p');
    paragraphRow4.textContent = 'Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new languge and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.';
    myDiv4.appendChild(paragraphRow4);

var mychildDiv4 = document.createElement('div');
    mychildDiv4.id = "col orange text-white list1 d-flex align-items-center p-3"

    myRow3.appendChild(mychildDiv3);  

//New Row 4 list Item #1 <li></li>
var myList1Row4 = document.createElement('li');
    myList1Row4.textContent = "15 comments"
    mychildDiv4.appendChild(myList1Row4);

//New Row 4 list Item #2 <li></li>
var myList2Row4 = document.createElement('li');
    myList2Row4.textContent = "45 likes"
    mychildDiv4.appendChild(myList2Row4);    