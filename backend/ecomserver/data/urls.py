from unicodedata import name
from django.urls import path
from . import views
urlpatterns=[
    path("venauth",views.venauth,name="venauth"),
    path("venauthget",views.venauthget,name="venauthget"),
    path("addpro",views.addpro,name="addpro"),
    path("getcat",views.getcat,name="getcat"),
    path("getpro/<int:id>",views.get_pro,name="getpro"),
    path("updatepro",views.update_pro,name="updatepro"),
    path("changepass",views.changePass,name="changepass"),
    path("adduser",views.addUser,name="adduser"),
    path("authuser",views.get_user,name="authuser"),
    path("getprocaid",views.getprocaid,name="getprocaid"),
    path("getproid/<int:uid>",views.getproid,name="getproid"),
    path("getspecid",views.getspecid,name="getspecid"),
    path("getwishlist/<int:uid>",views.getwishlist,name="getwishlist"),
    path("getcart/<int:uid>",views.getcart,name="getcart"),
    path("getviewlist/<int:uid>",views.getviewlist,name="getviewlist"),
    path("addcart",views.addcart,name="addcart"),
    path("addwish",views.addwish,name="addwish"),
    path("removecart",views.removecart,name="removecart"),
    path("removewish/<int:pid>/<int:uid>",views.removewish,name="removewish"),
    path("placeorder",views.placeorder,name="placeorder"),
    path("changeuserpas",views.changeuserpas,name="changeuserpas"),
    path("getorder/<int:uid>",views.getorder,name="getorder"),
    path("getvenorder/<int:vid>",views.getvenorder,name="getvenorder"),
    path("updateorder/<int:oid>",views.updateorder,name="updateorder")
]