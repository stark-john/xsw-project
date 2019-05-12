class Dh{

    constructor(){

        this.ul1=document.querySelector(".ul3");
        this.li1=this.ul1.children
        // console.log(this.li1)
        this.li2=document.querySelector(".xl")
        this.li3=this.li2.children
        this.ul2=document.querySelectorAll(".xl2");

        // console.log(this.li3)

        this.xl();

    }
    xl(){
       var that=this;

        for(let index=0;index<this.li1.length;index++){
            // console.log(index)

            
            this.li1[index].onmouseover=function(){
                

                that.li2.style.display="block"
                console.log(index)
                
                for (let i=0;i<that.li3.length;i++){
                    
                    that.li3[i].onmouseover=function(){

                        // console.log(i)
                        // console.log(that.ul2[i])
                        for(let i=0;i<that.ul2.length;i++){

                            that.ul2[i].style.display="none"



                        }

                        that.ul2[i].style.display="block"


                      
                    }
                    that.li3[i].omouseout=function(){

                        that.ul2[i].style.display="none"
                    }

                }

                // that.li2[i].onmouseout=function(){

                //     that.li3.style.display="none"
                // }

                
            }
            this.ul1.onmouseout=function(){

                that.li2.style.display="none"
            }

           
        }

        
    }
   
}
new Dh()