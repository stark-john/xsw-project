class Dh{
    constructor(){
        this.one = document.querySelectorAll(".ul3>li");
        this.two = document.querySelectorAll(".xl>.xl1");
        this.xl();
    }
    xl(){
       for(var i=0;i<this.one.length;i++){
            this.one[i].onmouseover = function(){
                if(this.children[1]){
                    this.children[1].style.display = "block";
                }
            }
            this.one[i].onmouseout = function(){
                if(this.children[1]){
                    this.children[1].style.display = "none";
                }
            }
       }
// -------------------------
       for(var i=0;i<this.two.length;i++){
            this.two[i].onmouseover = function(){
                if(this.children[1]){
                    this.children[1].style.display = "block";
                }
            }
            this.two[i].onmouseout = function(){
                if(this.children[1]){
                    this.children[1].style.display = "none";
                }
            }
       }
    }
}
new Dh()

class Index{

    constructor(){

        
        this.span=document.querySelector(".login");
        this.p=document.querySelector(".login2");
        this.p1=document.querySelectorAll(".login1");
        this.p2=document.querySelector(".login4");
        this.exit=document.getElementById("exit")
        this.getData();
        this.addEvent();





    }
    getData(){
        this.abc = localStorage.getItem("abc");
        if(this.abc == null){

            this.abc= [];
        }else{
            this.abc=JSON.parse(this.abc)




        }
        this.panduan()

    }
    panduan(){
        for( var i=0;i<this.abc.length;i++){
            if(this.abc[i].onoff == 1){
                this.span.innerHTML=this.abc[i].user;
                this.p.style.display="block";
                this.p1[0].style.display="none";
                this.p1[1].style.display="none";

                this.p2.style.display="block";
                this.successUser=this.abc[i].user;
                return;

            }

        }
        
        this.span.innerHTML="";
        this.p.style.display="none";
        this.p1[0].style.display="block";
        this.p1[1].style.display="block";
        this.p2.style.display="none";
        
    }
    addEvent(){
        var that=this;
        this.exit.onclick=function(){
            if(that.successUser){
                    for(var i=0;i<that.abc.length;i++){
                        if(that.abc[i].user === that.successUser){
                            that.abc[i].onoff=0;
                            localStorage.setItem("abc",JSON.stringify(that.abc))
                            that.panduan();

                        }

                    }

                 }

            }
        }

    }
new Index()