/*simulate call
    Types:
        -carousel (static element, doesn't need it)
        -started-banner (archiquetctural surfaces)
        -floating-cards (cards)
        -promo-materials (newtechwood)
        -engager 
        -floating-cards
        -promo-materials
        -promo-catalogs
        -floating-cards
        -image-engager

        espacios
        -single-space
        -plus-space
        -none-space

*/


var simulateCallToHomePageContentList = [

]

var singleSpace = { surfaceViewType: 'single-space' }
var singleSpaceJustLine = { surfaceViewType: 'single-space-just-line' }
var plusSpace = { surfaceViewType: 'plus-space' }
var noneSpace = { surfaceViewType: 'none-space' }
var noneSpaceWithRedIcon = {surfaceViewType: 'none-space-with-red-icon'}


var menulist = [
    {
        "classMenu": "001exteriorsurfaces",
        "menuName": "EXTERIOR SURFACES",
        "catalog":[
            {
                "catalogName": "Floors",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Walls",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Ceilings",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Roof",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Special Systems",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Facade",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            }
        ]
    },
    {
        "classMenu": "002interiorsurfaces",
        "menuName": "INTERIOR SURFACES",
        "catalog":[
            {
                "catalogName": "Floors",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Walls",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Ceilings",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Roof",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Special Systems",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Facade",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            }
        ]
    },
    {
        "classMenu": "003manufacturers",
        "menuName": "MANUFACTURERS",
        "catalog":[
            /*
            {
                "catalogName": "Floors",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Walls",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Ceilings",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Roof",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Special Systems",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Facade",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            }*/
        ]
    },
    {
        "classMenu": "004consultants",
        "menuName": "CONSULTANTS",
        "catalog":[/*
            {
                "catalogName": "Floors",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Walls",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Ceilings",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Roof",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Special Systems",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Facade",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            }
        */]
    },
    {
        "classMenu": "005inspiration",
        "menuName": "INSPIRATION",
        "catalog":[/*
            {
                "catalogName": "Floors",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Walls",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Ceilings",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Roof",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Special Systems",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            },
            {
                "catalogName": "Facade",
                "items":[
                    {
                        "itemName": "Wood",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Metal",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Tempered Glass / Windows",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Ceramic",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    },
                    {
                        "itemName": "Concrete",
                        "itemHeader": "Newtechwood",
                        "itemDescription": "Sistema de madera sintetica",
                        "itemImage": "../imgs/wood.png"
                    }
                ]
            }
        */]
    }
]


var ourPartnersImagesMock = [
    {
        isActive: true,
        images:[
            "img/minicarousel/001.png",
            "img/minicarousel/002.png",
            "img/minicarousel/003.png",
            "img/minicarousel/004.png",
            "img/minicarousel/005.png"
        ]
    },
    {
        isActive: false,
        images:[
            "img/minicarousel/006.png",
            "img/minicarousel/007.png",
            "img/minicarousel/008.png",
            "img/minicarousel/009.png",
            "img/minicarousel/010.png"
        ]
    },
    {
        isActive: false,
        images:[
            "img/minicarousel/011.png",
            "img/minicarousel/012.png",
            "img/minicarousel/013.png",
            "img/minicarousel/014.png",
            "img/minicarousel/015.png"
        ]
    }
]
