var app = new Vue({
    el:".container2",
    data:{
        products:[{'id':1, 'title':'TAG 1000 (TAG 803)','image':'american.jpg', 'short_text': 'American Giant', 'desc': 'Full description'},
        {'id':2, 'title':'TAG 1001 (TAG 821)','image':'arnica.jpg', 'short_text': 'Arnika', 'desc': 'Full description'},
        {'id':3, 'title':'TAG 1002 (TAG 849)','image':'autumnbeauty.jpg', 'short_text': 'Autumn Beauty', 'desc': 'Full description'},
        {'id':4, 'title':'TAG 1003 (TAG 862 )','image':'aztec.jpg', 'short_text': 'Aztec Sun', 'desc': 'Full description'},
        {'id':5, 'title':'TAG 1004 (TAG 886)','image':'evening.jpg', 'short_text': 'Evening Sun', 'desc': 'Full description'}],
        product:[],
        cart:[],
        contactFields:[],
        menu:0,
        btnVisible:0,
        order:0
    },
    mounted:function(){
        this.getProduct();
        this.checkInCart();
        this.getCart();
    },
    methods:{
        getProduct(){
            if(window.location.hash!=null){
                let id = window.location.hash.replace('#', '');
    
                if(this.products!=null && this.products.length>0){
                    for(let i in this.products){
                        if(this.products[i] != null && this.products[i].id != null && this.products[i].id==id) this.product = this.products[i];
                    }
                }
            }
        },
        addToCart: function (id) {
            var cart = [];
            if (window.localStorage.getItem('cart') != null) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if (cart.indexOf(String(id)) == -1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join(','));
                this.btnVisible = 1;
            }
        },
        checkInCart(){
            if(this.product!=null && this.product.id!=null && window.localStorage.getItem('cart')!=null && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1) this.btnVisible=1;
        },
        getCart(){
            if(window.localStorage.getItem('cart') != null){
                if(this.products!=null && this.products.length>0){
                    for(let i in this.products){
                        if(this.products[i] !=null && this.products[i].id !=null && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id))!=-1)this.cart.push(this.products[i]);
                    }
                }
            }
        },
        removeFromCart(id){
            let cart = [];
            if(window.localStorage.getItem('cart') != null){
                cart = window.localStorage.getItem('cart').split(',');
            }

            if(cart.indexOf(String(id))!=-1){
                cart.splice(cart.indexOf(String(id)),1);
                window.localStorage.setItem('cart', cart.join(','));
                this.cart = [];
                this.getCart();
            }
        },
        makeOrder(){
            this.cart = [];
            window.localStorage.getItem('cart','');
            this.order=1;
          }
        
    }
});