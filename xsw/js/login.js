class Login{
    constructor(){
        this.user=document.getElementById("user")
        this.pass=document.getElementById("pass")
        this.btn=document.getElementById("login1")
        this.span=document.getElementById("ts")
        this.btn1=document.querySelector(".login4")
        this.btn2=document.querySelector(".login3")
        this.weima=document.querySelector(".login10")
        this.login1=document.querySelector(".login5")
    this.init()
    this.getData()
    this.addEvent()
    }
    init(){
        var that=this;
        this.btn.onclick=function(){
            that.yanzheng();
           
            
        }


    }
    getData(){
        this.abc=localStorage.getItem("abc");
        if(this.abc == null){

            this.abc= [];
        }else{
            this.abc=JSON.parse(this.abc)




        }

    }
    yanzheng(){
        for(var i=0;i<this.abc.length;i++){
            if(this.abc[i].user == this.user.value && this.abc[i].pass == this.pass.value){
                this.span.innerHTML="登录成功";

                this.abc[i].onoff = 1;

                localStorage.setItem("abc",JSON.stringify(this.abc))
                setTimeout(()=>{

                    location.href="index.html";
                },3000)
                return;



            }




        }
        this.span.innerHTML="用户名密码不符";







    }
    addEvent(){
        this.btn1.onclick=()=>{

            this.weima.style.display="block";
            this.login1.style.display="none";





        }
        this.btn2.onclick=()=>{

            this.weima.style.display="none";
            this.login1.style.display="block";





        }





        



    }




}
new Login()