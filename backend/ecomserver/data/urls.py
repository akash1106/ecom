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
]
