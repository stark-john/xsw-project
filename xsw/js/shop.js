class Shop{
    constructor(){
        this.tbody=document.querySelector("tbody")
        this.price=document.querySelector(".price")
        this.zs=document.getElementById("num")
        this.xj=0;
        this.dj=0;
        this.url="http://localhost/xsw/json/goods.json"
        this.addEvent();
        this.init();
    }
    init(){
        var that=this;
        ajaxGet(this.url).then(function(res){
           
            that.res=JSON.parse(res)
            that.getCookie()
        })

    }
    getCookie(){

        this.goods=getCookie("goods") !="" ? JSON.parse(getCookie("goods")) :[];
        this.display()
        

    }
    display(){
        var str=""
        var cont=0
        var sum=0
        for( var i=0;i<this.res.length;i++){
            for( var j=0;j<this.goods.length;j++){

                if(this.res[i].goodsId ==this.goods[j].id){

                  cont += this.res[i].price*this.goods[j].num
                    // cont=(this.res[i].price*this.goods[j].num).toFixed(2);
                  this.xj=this.res[i].price*this.goods[j].num
                   sum +=Number(this.goods[j].num)

                    str +=`<tr id="list" index="${this.goods[j].id}">
                    <td class="car1"><img src="${this.res[i].url}"/></td>
                    <td>${this.res[i].name}</td>
                    <td class="price">${this.res[i].price}</td>
                    <td class="sl"><input type="number" min=1 value="${this.goods[j].num}" class="num" /></td>
                    <td><span class="price1">${this.xj}</span><span>元</span></td>
                    <td><em class="dele">删除</em></td>               
                    </tr>`

                    

                }
                
                
                
            }
            

        }
        
        
        this.tbody.innerHTML=str;
        this.price.innerHTML=cont;
        this.zs.innerHTML=sum

        
    }
    addEvent(){
        var that=this;
        
        this.tbody.addEventListener("input",function(eve){
            var e=eve || window.event;
            var target=e.target || e.srcElement;
            if(target.className =="num"){

                that.num=target.value;
                
                
                
                
                that.id=target.parentNode.parentNode.getAttribute("index");
                that.dj=target.parentNode.previousElementSibling.innerHTML
                target.parentNode.nextElementSibling.children[0].innerHTML=that.dj*target.value;
                
                
                that.changeCookie()
                that.count()
                

            }

        })
        this.tbody.addEventListener("click",function(eve){
            var e=eve || window.event;
            var target=e.target || e.srcElement;
            if(target.className=="dele"){
                that.id=target.parentNode.parentNode.getAttribute("index")
               
                target.parentNode.parentNode.remove();

                that.removeCookie();
                that.count();
                


            }
            

        })
        

    }
    changeCookie(){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id==this.id){
                this.goods[i].num=this.num;




            }
        }
        
        setCookie("goods",JSON.stringify(this.goods))
      
     
       

    }
    removeCookie(){
        for(var i=0;i<this.goods.length;i++){
            if(this.goods[i].id==this.id){
                this.goods.splice(i,1)
            }
        }
        
        setCookie("goods",JSON.stringify(this.goods))
       
    }
    count(){
      
        var cont=0
        var js=0
      
        for( var i=0;i<this.res.length;i++){
            for( var j=0;j<this.goods.length;j++){

                if(this.res[i].goodsId ==this.goods[j].id){
                 
                   
                  cont += this.res[i].price*this.goods[j].num

                   js  +=Number(this.goods[j].num)

                }
                
                
                
            }
            

        }
      
        this.price.innerHTML=cont;
        this.zs.innerHTML=js
        

    }
  










}
new Shop()