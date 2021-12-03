var app = new Vue({
    el: '#homepage-app',
    data: {
        dropdownmenu: menulist,
        selectedDropDownMenu: {},
        selectedDropDownCatalog: {},
        selectedDropDownItem: {},
        selectedItem: {},
        isFirstTimeSelectingItems: true,
        searchBar: {
            isActive: false,
            searchTerm: '',
            lastPoint: '',
            timeOut: '123',
            timeOutWithText: '123'
        },
        isSocialMediaActive: false,
        socialbutton:{
            sminstagram: "sm-instagram",
            smfacebook: "sm-facebook"
        },
        ourPartnersImages: ourPartnersImagesMock,
        homePageContentList: []
    },
    mounted: function(){
        let self = this;
        self.timerOnOurPartnersCard();
        self.callStartedEndpoint();
    },
    methods: {
        callStartedEndpoint: function(){
            let self = this;
            let isDevEnv = true; //Environment variable
            if(isDevEnv){
                self.homePageContentList.push(one_started_banner);
                self.homePageContentList.push(singleSpaceJustLine);
                self.homePageContentList.push(two_floating_cards);
                self.homePageContentList.push(noneSpaceWithRedIcon);
                self.homePageContentList.push(three_promo_materials);
                self.homePageContentList.push(noneSpace);
                self.homePageContentList.push(four_engager);
                self.homePageContentList.push(singleSpaceJustLine);
                self.homePageContentList.push(five_floating_cards);
                self.homePageContentList.push(noneSpaceWithRedIcon);
                self.homePageContentList.push(six_promo_materials);
                self.homePageContentList.push(noneSpace);
                self.homePageContentList.push(seven_promo_catalogs);
                self.homePageContentList.push(singleSpaceJustLine);
                self.homePageContentList.push(eight_floating_cards);
                self.homePageContentList.push(noneSpace);
                self.homePageContentList.push(nine_image_engager);
            }
        },
        selectDropDownMenu: function(menuSelected, index){
            let self = this;
            if(menuSelected == 'MANUFACTURERS' || menuSelected == 'CONSULTANTS' || menuSelected == 'INSPIRATION'){                
                document.getElementsByClassName("list-menu-display")[0].classList.remove("enableVisibility");
                document.getElementById("search-bar-module").style.visibility = "visible";
                return 0;
            }
            document.getElementById("search-bar-module").style.visibility = "hidden";
            let arr_menu = document.getElementsByClassName("list-menu-option");
            for(let i = 0; i < arr_menu.length; i++){ 
                arr_menu[i].classList.remove("isClicked"); 
            }  
            arr_menu[index].classList.add("isClicked");

            this.dropdownmenu.forEach(element => {
                if(menuSelected == element.menuName){
                    self.selectedDropDownMenu = element;
                }
            });

            let div_menu = document.getElementsByClassName("list-menu-display")[0];
            let span_modal = document.getElementsByClassName("menu-span-modal")[0];
            if(!div_menu.classList.contains("enableVisibility")) {
                div_menu.classList.add("enableVisibility");
                span_modal.style.display = "block";
            } 

            //set as default when if it is selected for first time
            if(this.isFirstTimeSelectingItems){
                this.selectedDropDownCatalog = self.selectedDropDownMenu.catalog[0];
                this.selectedDropDownItem = self.selectedDropDownCatalog.items[0];
                this.selectedItem = self.selectedDropDownItem[0];
                this.isFirstTimeSelectingItems = false;
            }
        },
        selectDropDownCatalog: function(catalogSelected, index){
            let self = this;

            let arr_catalog = document.getElementsByClassName("list-menu-catalog-option");
            for(let i = 0; i < arr_catalog.length; i++){ 
                arr_catalog[i].classList.remove("isClicked"); 
            }  
            arr_catalog[index].classList.add("isClicked");

            this.selectedDropDownMenu.catalog.forEach(element => {
                if(catalogSelected == element.catalogName){
                    self.selectedDropDownCatalog = element;
                }
            }); 
        },
        selectDropDownItem: function(itemSelected, index){
            let self = this;

            let arr_item = document.getElementsByClassName("list-menu-catalog-items");
            for(let i = 0; i < arr_item.length; i++){ 
                arr_item[i].classList.remove("isClicked"); 
            }  
            arr_item[index].classList.add("isClicked");

            this.selectedDropDownCatalog.items.forEach(element => {
                if(itemSelected == element.itemName){
                    self.selectedDropDownItem = element;
                }
            });
        },
        openSearchBar: function(){
            let self = this;
            let search_bar_module = document.getElementById("search-bar-module");
            self.searchBar.isActive = !self.searchBar.isActive;

            if(self.searchBar.isActive) {
                search_bar_module.style.visibility = "visible";
                search_bar_module.style.transform = "translateY(90px)";
                search_bar_module.style.zIndex = "99";
            } else{
                self.searchBar.searchTerm = "";
                search_bar_module.style.transform = "translateY(-73px)";
                search_bar_module.style.zIndex = "-1";
                search_bar_module.style.visibility = "hidden";
            }
            
            if(self.searchBar.timeOut != '123'){
                self.searchBar.searchTerm = "";
                clearTimeout(self.searchBar.timeOut);
            }
        },
        autoHideAndShowSearchBar: function(){
            let self = this;
            if(self.searchBar.timeOut != '123'){
                clearTimeout(self.searchBar.timeOut);
            }

            self.searchBar.timeOut = setTimeout(() => {
                if(self.searchBar.isActive && self.searchBar.searchTerm == ""){
                    self.openSearchBar();
                    clearTimeout(self.searchBar.timeOutWithText);
                }
            }, 5000);

            self.searchBar.timeOutWithText = setTimeout(() => {
                if(self.searchBar.isActive && self.searchBar.lastPoint == self.searchBar.searchTerm){
                    self.openSearchBar();
                    self.searchBar.searchTerm = "";
                }
                self.searchBar.lastPoint = self.searchBar.searchTerm;
            }, 15000);
        },
        activateSocialMediaButton: function(){
            let self = this;
            self.isSocialMediaActive = !self.isSocialMediaActive;
            
            if(self.isSocialMediaActive) {
                self.socialbutton.smfacebook = "sm-facebook-active";
                self.socialbutton.sminstagram = "sm-instagram-active";
            }else{
                self.socialbutton.smfacebook = "sm-facebook";
                self.socialbutton.sminstagram = "sm-instagram";
            }
        },
        timerToHideSocialMediaButton : function(){
            let self = this;
            setTimeout(() => {
                if(self.isSocialMediaActive == true){
                    self.socialbutton.smfacebook = "sm-facebook";
                    self.socialbutton.sminstagram = "sm-instagram";
                }
                self.isSocialMediaActive = false;
            }, 2000);
        },
        timerOnOurPartnersCard: function(){
            let self = this;
            let partnersCurrentSlide = 1;
            setInterval(() => {
                partnersCurrentSlide++;
                if(partnersCurrentSlide>self.ourPartnersImages.length){
                    partnersCurrentSlide = 1;
                }
                self.ourPartnersImages.forEach(element => {
                    element.isActive = false;
                });
                self.ourPartnersImages[partnersCurrentSlide-1].isActive = true;
            }, 4000);
        },
        timerOnMaterialsCards: function(materialButton){
            let self = this;
            self.materialPositions.forEach((material)=>{
                material.materialButtons.forEach((button)=>{
                    button.isActive = false;
                });
            });
            if(materialButton != undefined) materialButton.isActive = !materialButton.isActive;
            setTimeout(() => {
                self.materialPositions.forEach((material)=>{
                    material.materialButtons.forEach((button)=>{
                        button.isActive = false;
                    });
                });
            }, 20000);
        },
        actionsOutSideOfMaterialCards: function(){
            this.timerOnMaterialsCards();    
        } 
    }
})

/* MENU LIST  */

let span_modal_menu = document.getElementsByClassName("menu-span-modal")[0];
let div_menu = document.getElementsByClassName("list-menu-display")[0];

span_modal_menu.addEventListener("mouseover", function(e){    
    let self = e.target;

    self.style.display = "none";    
    div_menu.classList.remove("enableVisibility");
    document.getElementById("search-bar-module").style.visibility = "visible";
}); 

