const bookdata =[
    {image :"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSzCTVV-GU8Op3zkUVYjMtkQ-IyNsknTChW7zqtzCmASuK7xrkGelPTynYXzDWLi291ymXCno0mGnhQhwmidddl39vvEaRc3FRsAbH179VCR4d9fTk8L8Gfww",price:465},
    {image :"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQNTZjs64IxmRyc-VHw1-jr9raUFnw4mLl-coDcespQq_vH1gWDxj8g_SbxkLcmpVr8CoHGbHQd6puQPDLlF6CJGhukNIib-kf0eTPVdAoE0Hae_hv3pxIH",price:729},
    {image :"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRUahWy1APGvwviwOSf13tD3jIku6hVODvLSs-kvLMilvOw3pJm7Z4cZZG1v7IYtFM_ZgdzM5FSOAQxfDTF23EgKM6_mlfIbXy4ju74Dctg",price:629},
]

function book(data){
const div= document.createElement("div");
div.setAttribute("class","book");
const image = document.createElement("img",data.image);
image.setAttribute("src",data.image);
image.setAttribute("height","100px");
image.setAttribute("width","100px");
const heading = document.createElement("h2");
heading.innerText="Price :" +data.price+"₹";
const bt = document.createElement("button");
bt.innerText= "Add to Cart";
div.appendChild(image);
div.appendChild(heading);
div.appendChild(bt);
return div;
}
 const bookstore =bookdata.map((i)=>(
    book(i)
))
const parent = document.getElementById("root");
for (b of bookstore){
parent.appendChild(b);
}