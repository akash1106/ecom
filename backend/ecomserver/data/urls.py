from unicodedata import name
from django.urls import path
from . import views
urlpatterns=[
    path("venauth",views.venauth,name="venauth"),
    path("venauthget",views.venauthget,name="venauthget"),
]
