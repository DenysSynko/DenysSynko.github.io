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
    }
});