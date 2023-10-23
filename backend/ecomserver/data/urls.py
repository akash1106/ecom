from unicodedata import name
from django.urls import path
from . import views
urlpatterns=[
    path("venauth",views.venauth,name="venauth"),
    path("venauthget",views.venauthget,name="venauthget"),
    path("addpro",views.addpro,name="addpro"),
    path("getcat",views.getcat,name="getcat")
]
