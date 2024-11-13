var a=document.getElementById("header");
var list1=[
    "https://res.cloudinary.com/dngn2hghx/image/upload/v1730739081/gym/h91whoxom6k6glcu8yjw.jpg",
    "https://res.cloudinary.com/dngn2hghx/image/upload/v1730739081/gym/hynwmhjcb7mfwuv1hr9s.jpg",
    "https://res.cloudinary.com/dngn2hghx/image/upload/v1730739080/gym/ahbww03mge1ux8yxga7r.jpg",
    "https://res.cloudinary.com/dngn2hghx/image/upload/v1730740383/gym/za4l5siodkbm0uenuk3d.jpg"
];
let i=0;
setInterval(() =>{
    a.style.transform = "translate";
    a.style.transitionDuration ="2s"
    a.style.backgroundImage=`url(${list1[i]})`;
    a.classList.add('.img-fluid')
    i+=1
    if (i>=list1.length)
        {
        i=0;
    }
},3000);




