from django.contrib import admin
from ast import ClassDef
from msilib.schema import Class
from .models import *

# Register your models here.

class appuserAdmin(admin.ModelAdmin):
    list_display=("uid","uname","phno","mailid","doorno","street","city","state","pas","coin")

class vendorAdmin(admin.ModelAdmin):
    list_display=("vid","vname","phno","mailid","street","city","state","pas")

class categoriesAdmin(admin.ModelAdmin):
    list_display=("caid","sub1","sub2")

class productAdmin(admin.ModelAdmin):
    list_display=("pid","vid","caid","name","price","qty")

class specAdmin(admin.ModelAdmin):
    list_display=("pid","key","value")

class ratingAdmin(admin.ModelAdmin):
    list_display=("pid","uid","rating","review")

class notificationAdmin(admin.ModelAdmin):
    list_display=("nid","uid","vid","typ","text","state")

class cartAdmin(admin.ModelAdmin):
    list_display=("cid","pid","uid","state","time")

class wishlistAdmin(admin.ModelAdmin):
    list_display = ("wid", "pid", "uid")

class orderAdmin(admin.ModelAdmin):
    list_display=("oid","pid","uid","state","time")

class viewlistAdmin(admin.ModelAdmin):
    list_display=("vid","pid","uid","time")

class alertAdmin(admin.ModelAdmin):
    list_display=("aid","uid","pid","price")

class staffAdmin(admin.ModelAdmin):
    list_display=("sid","name","phno","mailid","street","city","state","pas")

class chatAdmin(admin.ModelAdmin):
    list_display=("uid","sid","time","text")

admin.site.register(appuser,appuserAdmin)
admin.site.register(vendor,vendorAdmin)
admin.site.register(categories,categoriesAdmin)
admin.site.register(product,productAdmin)
admin.site.register(spec,specAdmin)
admin.site.register(rating,ratingAdmin)
admin.site.register(notification,notificationAdmin)
admin.site.register(cart,cartAdmin)
admin.site.register(wishlist,wishlistAdmin)
admin.site.register(order,orderAdmin)
admin.site.register(viewlist,viewlistAdmin)
admin.site.register(alert,alertAdmin)
admin.site.register(staff,staffAdmin)
admin.site.register(chat,chatAdmin)