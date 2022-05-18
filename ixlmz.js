// ==UserScript==
// @name         IXL ModZ
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Custom profile pics & help with every single lesson 😋
// @author       GSRHackZ
// @match        https://www.ixl.com/*
// @icon         data:image/jpeg;base64,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
// @grant        none
// ==/UserScript==

const header = document.getElementsByClassName("box-site-nav-func")[0];
const profPics = document.getElementsByClassName("user-avatar")
const current=document.getElementsByClassName("user-nav-current-user")[0];
const init=document.getElementsByClassName("lk-profile-settings")[0];
const body = document.body;
const testImg = document.createElement("img");
current.style="display:flex;align-items:center;";
body.append(testImg);
let imgs = [],img,currentImg;
if(localStorage.getItem("imgs")!==null){
    imgs = JSON.parse(localStorage.getItem("imgs"));
}
if(localStorage.getItem("currImg")!==null){
    setImg(localStorage.getItem("currImg"));
}


init.innerText = "Profile, Settings, & Customization";

init.addEventListener("click",function(){
    setTimeout(function(){
        let imgsBox = document.getElementsByClassName("noborder nobkrnd spacertop")[0];
        if(imgs.length>0){
            imgsBox.innerHTML=`<h1 style="font-size:20px;">IXL ModZ By GSRHackZ</h1><br>`;
            imgsBox.style="width:100%;height:auto;padding:5px;padding-top: 25px;text-align:center;"
            for(let i=0;i<imgs.length;i++){
                let imgDisplay = document.createElement("div");
                imgDisplay.innerHTML=`<img class="imGsr" style="width:100%;height:100%;" src=${imgs[i]} />`
                imgDisplay.style=`
                width:120px;
                height:120px;
                border-radius:50%;
                overflow:hidden;
                display:flex;
                align-items:center;
                justify-content:center;
                margin:15px;
                float:left;
                cursor:pointer;
                transition:.6s;
                `
                imgsBox.append(imgDisplay)
            }
            let imGsr = document.getElementsByClassName("imGsr");
            for(let i=0;i<imGsr.length;i++){
                imGsr[i].addEventListener("mouseover",function(){
                    this.parentElement.style.boxShadow="2px 2px 8px grey"
                })
                imGsr[i].addEventListener("mouseleave",function(){
                    this.parentElement.style.boxShadow="none"
                })
                imGsr[i].addEventListener("click",function(){
                    setImg(this.src);
                    picked(imGsr);
                })
                let del = document.createElement("button");
                del.className="delImg";
                del.innerText="X"
                del.style="font-weight:500;position:absolute;margin-top:-100px;margin-right:-80px;color:red;background:white;outline:none;border:none;border-radius:50%;box-shadow:1px 1px 10px grey;display:flex;align-items:center;justify-content:center;"
                imGsr[i].parentElement.append(del)
            }
            picked(imGsr);
            if(document.getElementsByClassName("resetImgs")[0]==undefined){
                let resetBtn = document.createElement("button");
                resetBtn.className="resetImgs";
                resetBtn.innerText="Reset 🗑";
                resetBtn.style=`
            font-size:15px;
            padding:.46em 1.5em .54em;
            min-width:135px;
            box-sizing:border-box;
            border:none transparent;
            text-decoration:none;
            background: red;
            color:white;
            border-radius:5px;
            -webkit-font-smoothing:antialiased;
            transition: .1s linear box-shadow;
            display: inline-block;
            line-height: normal;
            white-space:nowrap;
            font: 400 13.3333px Arial;
            -webkit-writing-mode: horizontal-tb !important;
            zoom: 1;
            vertical-align: baseline;
            text-align:center;
            -webkit-user-drag: none;
            float:left;
            margin:10px;
            `;
                let ft = document.getElementsByClassName("ft")[0];
                ft.append(resetBtn)
                let reset = document.getElementsByClassName("resetImgs")[0];
                reset.addEventListener("click",function(){
                    let ask = confirm("This will remove all your saved images. Click ok to continue.")
                    if(ask){
                        localStorage.removeItem("imgs");
                        localStorage.removeItem("currImg");
                        location.reload();
                    }
                })
            }
            let x = document.getElementsByClassName("delImg");
            for(let i=0;i<x.length;i++){
                x[i].addEventListener("click",function(){
                    imgs.splice(i,1)
                    this.parentElement.remove();
                    localStorage.setItem("imgs",JSON.stringify(imgs));
                })
            }
        }
        else{
            imgsBox.children[0].innerText="Saved images will appear here. You have no images. Please save some."
        }
    },450)
})

let inp = document.createElement("input");
inp.style=`
width:200px;
border:.5px solid lightgrey;
box-shadow:.5px .5px .5px grey;
border-radius:5px;
padding:5px;
padding-left:6px;
color:grey;
outline:none;
margin:10px;
transition:.6s;
`;
inp.placeholder="Add Profile Picture...";
inp.addEventListener("blur",function(){
    this.style.letterSpacing="0px";
    this.style.color="grey"
    this.style.border=".5px solid lightgrey"
    this.style.boxShadow=".5px .5px .5px grey;"
    if(!this.value.trim().length>0){
        this.value="";
    }
})
inp.addEventListener("focus",function(){
    this.style.letterSpacing="1px";
    this.style.color="#00affa"
    this.style.border="1px solid #00affa"
    this.style.boxShadow=".5px .5px .5px #00affa;"
    if(!this.value.trim().length>0){
        this.value="";
    }
})
inp.addEventListener("keyup",function(evt){
    if(evt.keyCode==13){
        if(inp.value.trim().length>0){
            img = inp.value;
            filter(inp,testImg,img);
        }
    }

})
if(profPics[0]!==undefined){
    header.append(inp)
}





function picked(imgs){
    for(let i=0;i<imgs.length;i++){
        if(imgs[i].src==currentImg){
            imgs[i].parentElement.style.border="2px solid springgreen";
        }
        else{
            imgs[i].parentElement.style.border="2px solid transparent";
        }
    }
}

function many(func,times){
    for(let i=0;i<times;i++){
        eval(func)
    }
}
function filter(inp,elem,src){
    elem.src=src;
    elem.onload = function(){
        save(src)
        inp.value="";
    }
    elem.onerror = function(){
        console.clear();
        console.log("Cleared annoying IXL error msg...🤦‍♂️");
        alert("You have received this error for one or all of these reasons: \n\n1. Invalid Img Address 🙈\n\n2. IXL does not allow images that aren't coming driectly from google. Please use images only from google Images. 😋 \n\n Please try again...");
        inp.value="";
    }
}
function save(img){
    if(!imgs.includes(img)){
        imgs.push(img);
        localStorage.setItem("imgs",JSON.stringify(imgs));
    }
    setImg(img)
}
function setImg(src){
    for(let i=0;i<profPics.length-1;i++){
        profPics[i].src=src;
        profPics[i].style="margin-top:-3px;border-radius:50%;display:flex;justify-content:center;align-items:center;width:45px;height:45px;";
    }
    currentImg = src;
    localStorage.setItem("currImg",currentImg);
}

let isClicked=false;

const methods=[
    {
        'name':'Youtube',
        'url':'https://www.youtube.com/results?search_query=',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxvNnYVOApJlNiBES9skleujV-jwsAQ7KlcA&usqp=CAU'
    },
    {
        'name':'Google',
        'url':'https://www.google.com/search?q=',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_cun8R9jHc3KznCx3CLskWUG-YrkNT8SLgA&usqp=CAU'
    },
    {
        'name':'Khan Academy',
        'url':'https://www.khanacademy.org/search?search_again=1&page_search_query=',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpKdFRxBPuuwLl4lSpQa4TPnz4tDilNNHXlQ&usqp=CAU'
    }
];

if(document.getElementsByClassName("take-a-break")!==undefined){
    let check=document.getElementsByClassName("take-a-break")[0];
    let lesson=document.getElementsByClassName("breadcrumb-skill-name")[0].innerText;
    check.innerHTML="<button id='help-btn' style='border:1px solid #7ebb00;width:55px;padding:5px;opacity:56%;outline:none;border-radius:100px;transition:.6s;'>Help</button>";
    let help=document.getElementById("help-btn");
    help.onmouseover=function(){
        help.style.opacity="100%";
    }
    help.onmouseout=function(){
        help.style.opacity="56%";
    }
    help.addEventListener('click',function(){
        if(!isClicked){
            this.innerText="Close";
            isClicked=true;
            let box=document.createElement('div');
            box.setAttribute('id','box-help')
            box.style="background:white;display:flex;flex-direction:column;align-items:center;justify-content:center;position:absolute;z-index:5;width:200px;height:425px;padding:5px;border:1px solid lightgray;border-radius:10px;right:0;margin-top:175px;margin-right:50px;";
            document.body.append(box);
            box.innerHTML=methods.map(method => {
                return `
                       <a style="outline:none;border:none;" target="_Blank" href="${method.url+lesson}">
                         <img style="height:140px;object-fit:contain;outline:none;border:none;" title=${method.name} src=${method.img} alt="${method.name}"/>
                      </a>
                `;
            }).join('');
        }
        else{
            isClicked=false;
            this.innerText="Help"
            document.getElementById("box-help").remove();
        }
    })
}

