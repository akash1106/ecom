from dataclasses import field
from rest_framework import serializers
from data.models import *

class AppUserSerializer(serializers.ModelSerializer):
    class Meta:
        model=appuser
        fields=("uid","uname","phno","mailid","doorno","street","city","state","pas","coin")

class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model=vendor
        fields=("vid","vname","phno","mailid","street","city","state","pas")

class categoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model=categories
        fields=("caid","sub1","sub2")

class productSerializer(serializers.ModelSerializer):
    class Meta:
        model=product
        fields=("pid","vid","caid","name","price","qty")

class specSerializer(serializers.ModelSerializer):
    class Meta:
        model=spec
        fields=("pid","key","value")

class ratingSerializer(serializers.ModelSerializer):
    class Meta:
        model=rating
        fields=("pid","uid","rating","review")

class notificationSerializer(serializers.ModelSerializer):
    class Meta:
        model=notification
        fields=("nid","uid","vid","typ","text","state")

class cartSerializer(serializers.ModelSerializer):
    class Meta:
        model=cart
        fields=("cid","pid","uid","state","time")

class wishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model =wishlist
        fields = ("wid", "pid", "uid")

class orderSerializer(serializers.ModelSerializer):
    class Meta:
        model=order
        fields=("oid","pid","uid","state","time")

class viewlistSerializer(serializers.ModelSerializer):
    class Meta:
        model=viewlist
        fields=("vid","pid","uid","time")

class alertSerializer(serializers.ModelSerializer):
    class Meta:
        model=alert
        fields=("aid","uid","pid","price")

class staffSerializer(serializers.ModelSerializer):
    class Meta:
        model=staff
        fields=("sid","name","phno","mailid","street","city","state","pas")

class chatSerializer(serializers.ModelSerializer):
    class Meta:
        model=chat
        fields=("uid","sid","time","text")