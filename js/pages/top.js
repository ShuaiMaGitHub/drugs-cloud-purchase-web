const lyTop = {
    template: "\
    <div class='nav-top'> \
     <shortcut/>\
        <!--头部--> \
        <div class='header' id='headApp'> \
            <div class='py-container'> \
                <div class='yui3-g Logo'> \
                    <div class='yui3-u Left logoArea'> \
                        <a class='logo-bd' title='云购' href='index.html' target='_blank'></a> \
                    </div> \
                    <div class='yui3-u Center searchArea'> \
                        <div class='search'> \
                            <form action='' class='sui-form form-inline'> \
                                <!--searchAutoComplete--> \
                                <div class='input-append'> \
                                    <input type='text' id='autocomplete' v-model='key'  \
                                           class='input-error input-xxlarge' /> \
                                    <button @click='search' class='sui-btn btn-xlarge btn-danger' type='button'>搜索</button> \
                                </div> \
                            </form> \
                        </div> \
                        <div class='hotwords'> \
                            <ul> \
                                <li class='f-item'>云购首发</li> \
                                <li class='f-item'>亿元优惠</li> \
                                <li class='f-item'>9.9元团购</li> \
                                <li class='f-item'>每满99减30</li> \
                                <li class='f-item'>亿元优惠</li> \
                                <li class='f-item'>9.9元团购</li> \
                                <li class='f-item'>办公用品</li> \
                            </ul> \
                        </div> \
                    </div> \
                    <div class='yui3-u Right shopArea'> \
                        <div class='fr shopcar'> \
                            <div class='show-shopcar' id='shopcar'> \
                                <span class='car'></span> \
                                <a class='sui-btn btn-default btn-xlarge' href='cart.html' target='_blank'> \
                                    <span>我的购物车</span> \
                                    <i class='shopnum'>0</i> \
                                </a> \
                                <div class='clearfix shopcarlist' id='shopcarlist' style='display:none'> \
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> \
                                    <p>'啊哦，你的购物车还没有商品哦！'</p> \
                                </div> \
                            </div> \
                        </div> \
                    </div> \
                </div> \
                <div class='yui3-g NavList'> \
                    <div class='yui3-u Left all-sort' style=\"background: #79cb67\"> \
                        <h4>云购分类</h4> \
                    </div> \
                    <div class='yui3-u Center navArea'> \
                        <ul class='nav'> \
                            <li class='f-item'>海外自营管</li> \
                            <li class='f-item'>妇科馆</li> \
                            <li class='f-item'>保健馆</li> \
                            <li class='f-item'>医疗器械管</li> \
                            <li class='f-item'>母婴馆</li> \
                            <li class='f-item'>团购</li> \
                            <li class='f-item'>闪购</li> \
                            <!--<li class='f-item'><a href='seckill-index.html' target='_blank'>秒杀</a></li> -->\
                        </ul> \
                    </div> \
                    <div class='yui3-u Right'></div> \
                </div> \
            </div> \
        </div>\
       </div> \
      ",
    name:'ly-top',
    data() {
        return {
            key: "",
            query: location.search
        }
    },
    methods: {
        search() {
            window.location = '/search.html?key=' + this.key;
        },
        getUrlParam: function (name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) {
                return decodeURI(r[2]);
            }
            return null;
        }
    },
    created() {
        this.key = this.getUrlParam("key");
    },
    components: {
        shortcut:() => import('./shortcut.js')
    }
}
export default lyTop;