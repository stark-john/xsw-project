class Goods{
    constructor(){
        this.case=document.querySelector(".sg")
        this.url="http://localhost/xsw/json/goods.json"

        this.init();
        this.addEvent();
    }
    init(){
        var that=this;
        ajaxGet(this.url).then(function(res){
            // console.log(res)
            that.res=JSON.parse(res)
            that.display()
        })
    }
    display(){
        

        var str="";
        for(var i=0;i<this.res.length;i++){

            str +=` <li index="${this.res[i].goodsId}">
            <a href="spxq.html">
                <img src="${this.res[i].url}" />
            </a>
                <p>${this.res[i].name}</p>
                <p>${this.res[i].price}<span>元</span></p>
                <p class="car">加入购物车</p>
            
        </li>`
       

        }
       
        this.case.innerHTML=str;
    }
    addEvent(){

        var that=this;
        this.case.addEventListener("click",function(eve){

            var e=eve || window.event;
            var target=e.target || e.srcElement;
            if(target.className=="car"){

                that.id=target.parentNode.getAttribute("index");

                that.setCookie()

            }
        })






    }
    setCookie(){

        this.goods=getCookie("goods");
        if(this.goods==""){

            this.goods=[{
                id:this.id,
                num:1
            }];

        }else{
            var onoff=true;
         this.goods=JSON.parse(this.goods)

         for(var i=0;i<this.goods.length;i++){

            if(this.goods[i].id==this.id){

                this.goods[i].num ++

                onoff=false
            
            }

         }
         if(onoff){

            this.goods.push({id:this.id,num:1
            })

         }

        }
        setCookie("goods",JSON.stringify(this.goods))


    }









}
new Goods()