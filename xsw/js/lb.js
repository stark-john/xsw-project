class Lb{
    constructor(){
        this.imgbox=document.querySelector(".imgbox");
        this.img=this.imgbox.children;
        this.left=document.getElementById("left");
        this.right=document.getElementById("right");
        this.index=0;

        this.init();


        
        




    }
    init(){
        this.imgbox.style.width=this.img.length*this.img[0].offsetWidth+"px";


        this.addEvent()
    }
    addEvent(){

        this.left.onclick=()=>{
            this.changeIndex(1)

       }
    
        this.right.onclick=()=>{

            this.changeIndex(2)

        }


    }
    changeIndex(type){
        if(type ==1){
            if(this.index ==0){
                this.imgbox.style.left=-(this.img.length-1)*this.img[0].offsetWidth+"px";
                this.index=this.img.length-2
            }else{
                this.index--
            }

        }else{
            if(this.index == this.img.length-1){
                this.imgbox.style.left=0;
                this.index=1;
            }else{

                this.index++
            }


        }

        this.display()
    }
    display(){

        move(this.imgbox,{left:-this.img[0].offsetWidth*this.index})

    }






}
new Lb();
