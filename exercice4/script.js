let post = document.getElementById("btn-post");
let data = []
class User{
    static counter = 10;
    constructor(name){
        this.name = name ; 
        this.idUser = User.counter++;
    }

}


class Post{
    static counter = 0 ;
    constructor(name,title,description){
        this.idPost = ++Post.counter
        this.user= new User(name);
        this.description = description;
    }

}

post.addEventListener("click",function(){
   

    let name = document.getElementById("username");
    let title = document.getElementById("title");
    let description = document.getElementById("description");
    if (name === "" || title === "" || description === "") {
        alert("Please fill in all fields before posting.");
        return;
    }
    let post = new Post(name.value,title.value,description.value);
    localStorage.setItem(name.value,JSON.stringify(post))
     

})
document.querySelector(".add-post").onclick=function(){
     document.getElementById("username").value="";
     document.getElementById("title").value="";
     document.getElementById("description").value="";
}
document.getElementById("json").addEventListener("click",()=>{
   
    let json = JSON.stringify(data,null,2);
    const blob = new Blob([json],{type:"application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url;
    a.download = "data.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  
})

