from django.views.decorators.csrf import csrf_exempt
from .models import *
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import *
from datetime import datetime


@csrf_exempt
def venauth(request):
    if request.method=='POST':
        data=JSONParser().parse(request)['body']
        vname=data['name']
        phno=data['phno']
        mailid=data['mailid']
        street=data['street']
        city=data['city']
        state=data['state']
        pas=data['password']
        if (vname.isalpha() and len(str(phno))==10 and '@' in mailid and '.' in mailid and street.isalpha() and city.isalpha() and state.isalpha() and len(pas)>=8):
            obj=vendor.objects.filter(mailid=mailid)
            if obj:
                return JsonResponse({"message":"User Already Exists"})
            ob1=vendor.objects.create(vname=vname,phno=phno,mailid=mailid,street=street,city=city,state=state,pas=pas)
            ob1.save()
            obj_serializer = VendorSerializer(ob1)
            return JsonResponse(obj_serializer.data,safe=False)
    
@csrf_exempt
def venauthget(request):
    if request.method=='POST':
        data=JSONParser().parse(request)['body']
        mailid=data['mailid']
        password=data['password']
        obj=vendor.objects.filter(mailid=mailid,pas=password)
        if obj:
            link_serializer=VendorSerializer(obj[0])
            return JsonResponse(link_serializer.data,safe=False)
        else:
            return JsonResponse({"message":"No match"})

@csrf_exempt
def addpro(request,vid=-1):
    if request.method == 'POST':
        data=JSONParser().parse(request)['body']
        print(data)
        vid=data['vid']
        caid=int(data['caid'])
        name=data['name']
        price=int(data['price'])
        qty=int(data['qty'])
        spe=data['spec']
        if vendor.objects.filter(vid=vid) and categories.objects.filter(caid=caid) and not (name=="") and qty>0:
            obj=product.objects.create(vid=vendor.objects.filter(vid=vid)[0], caid=categories.objects.filter(caid=caid)[0],name=name,price=price,qty=qty)
            obj.save()
            for x in spe:
                ob=spec.objects.create(pid=obj,key=x[0],value=x[1])
                ob.save()
            return JsonResponse({"message":"done"})
        return JsonResponse({"message":"fail"})

@csrf_exempt
def getcat(request):
    if request.method == "GET":
        cat=categories.objects.all()
        serializer=categoriesSerializer(cat,many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_pro(request,id=-1):
    if request.method=="GET":
        obj=product.objects.filter(vid=id)
        serializer=productSerializer(obj,many=True)
        return JsonResponse(serializer.data,safe=False)
    
@csrf_exempt
def update_pro(request):
    if request.method=="POST":
        data = JSONParser().parse(request)['body']
        pid = int(data['pid'])
        qty=int(data['qty'])
        product.objects.filter(pk=pid).update(qty=qty)
        return JsonResponse({"message":"done"})  

@csrf_exempt
def changePass(request):
    if request.method=='POST':
        data=JSONParser().parse(request)['body']
        vid=data['vid']
        password=data['password']
        vendor.objects.filter(pk=vid).update(pas=password)
        return JsonResponse({"message":"done"})

@csrf_exempt
def addUser(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        name=data["name"]
        phno=data["phno"]
        mail=data["mail"]
        password=data["password"]
        doorno=data["doorno"]
        street=data["street"]
        city=data["city"]
        state=data["state"]
        if (name.isalpha() and len(str(phno))==10 and '@' in mail and '.' in mail and street.isalpha() and city.isalpha() and state.isalpha() and len(password)>=8):
            obj=appuser.objects.filter(mailid=mail)
            if obj:
                return JsonResponse({"message":"User Already Exists"})
            obj1=appuser.objects.create(uname=name,phno=phno,mailid=mail,doorno=doorno,street=street,city=city,state=state,pas=password,coin=0)
            obj1.save()
            obj_serializer = AppUserSerializer(obj1)
            return JsonResponse(obj_serializer.data,safe=False)
        return JsonResponse({"message":"Error"})
    
@csrf_exempt
def get_user(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        mail=data["mail"]
        password=data["password"]
        obj=appuser.objects.filter(mailid=mail,pas=password)
        if obj:
            obj_serializer = AppUserSerializer(obj, many=True)
            return JsonResponse(obj_serializer.data,safe=False)
        else:
            return JsonResponse({"message":"Error"})

@csrf_exempt
def getprocaid(request):
    if request.method == 'POST':
        data=JSONParser().parse(request)['body']
        caid=data['caid']
        ob=categories.objects.filter(caid=caid)
        if ob:
            obj=product.objects.filter(caid=ob[0])
            obj_serializer=productSerializer(obj,many=True)
            return JsonResponse(obj_serializer.data,safe=False)
        else:
            return JsonResponse({"message":"Error"})
        
@csrf_exempt
def getproid(request,uid=-1):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        print(data)
        proid=data['pid']
        ob=product.objects.filter(pid=proid)
        obj1=appuser.objects.filter(uid=uid)
        if ob and obj1:
            obj2=viewlist.objects.filter(pid=ob[0],uid=obj1[0])
            if obj2:
                obj2[0].time=datetime.now()
                obj2[0].save()
            else:
                viewlist.objects.create(pid=ob[0],uid=obj1[0],time=datetime.now()).save()
            obj_serializer=productSerializer(ob,many=True)
            return JsonResponse(obj_serializer.data,safe=False)
        else:
            return JsonResponse({"message":"Error"})
        
@csrf_exempt
def getspecid(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        proid=data['pid']
        ob=product.objects.filter(pid=proid)
        if ob:
            obj=spec.objects.filter(pid=ob[0])
            obj_Serializer=specSerializer(obj,many=True)
            return JsonResponse(obj_Serializer.data,safe=False)
        else:
            return JsonResponse({"message":"Error"})
               
@csrf_exempt
def getwishlist(request,uid=-1):
    if request.method=="GET":
        ob=appuser.objects.filter(uid=uid)
        if ob:
            obj=wishlist.objects.filter(uid=ob[0])
            lis=[i['pid_id'] for i in obj.values()]
            obj1=product.objects.filter(pk__in=lis)
            obj_Serializer=productSerializer(obj1,many=True)
            return JsonResponse(obj_Serializer.data,safe=False)
        else:
            return JsonResponse({"message":"error"})

@csrf_exempt 
def getcart(request,uid=-1):
    if request.method=="GET":
        ob=appuser.objects.filter(uid=uid)
        if ob:
            obj=cart.objects.filter(uid=ob[0])
            lis=[i['pid_id'] for i in obj.values()]
            obj1=product.objects.filter(pk__in=lis)
            obj_Serializer=productSerializer(obj1,many=True)
            return JsonResponse(obj_Serializer.data,safe=False)
        else:
            return JsonResponse({"message":"error"})
            
def getviewlist(request,uid=-1):
    if request.method=="GET":
        ob=appuser.objects.filter(uid=uid)
        if ob:
            obj=viewlist.objects.filter(uid=ob[0])
            lis=[i['pid_id'] for i in obj.values()]
            obj1=product.objects.filter(pk__in=lis)
            obj_Serializer=productSerializer(obj1,many=True)
            return JsonResponse(obj_Serializer.data,safe=False)
        else:
            return JsonResponse({"message":"error"})    

@csrf_exempt
def addcart(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        pid=data['pid']
        uid=data['uid']
        ob1=appuser.objects.filter(uid=uid)
        ob2=product.objects.filter(pid=pid)
        if ob1 and ob2:
            obj=cart.objects.create(pid=ob2[0],uid=ob1[0],state=False,time=datetime.now())
            obj.save()
            return JsonResponse({"message":"ADDED"})
        else:
            return JsonResponse({"message":"error"})
             
@csrf_exempt
def addwish(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        pid=data['pid']
        uid=data['uid']
        ob1=appuser.objects.filter(uid=uid)
        ob2=product.objects.filter(pid=pid)
        if ob1 and ob2:
            obj=wishlist.objects.create(pid=ob2[0],uid=ob1[0],time=datetime.now())
            obj.save()
            return JsonResponse({"message":"ADDED"})
        else:
            return JsonResponse({"message":"error"})

def removecart(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        pid=data['pid']
        uid=data['uid']
        ob=cart.objects.filter(uid=appuser.objects.filter(uid=uid)[0],pid=product.objects.filter(pid=pid)[0])
        if ob:
            ob[0].delete()
            return JsonResponse({"Done":True})
        else:
            return JsonResponse({"Done":False})
    
@csrf_exempt         
def removewish(request,pid=-1,uid=-1):
    if request.method=="POST":
        ob=wishlist.objects.filter(uid=appuser.objects.filter(uid=uid)[0],pid=product.objects.filter(pid=pid)[0])
        if ob:
            ob[0].delete()
            return JsonResponse({"Done":True})
        else:
            return JsonResponse({"Done":False})
    
@csrf_exempt
def placeorder(request):
    if request.method=="POST":
        data=JSONParser().parse(request)['body']
        lis=data['list']
        uid=data['uid']
        for i in lis:
            order.objects.create(uid=appuser.objects.get(pk=uid),pid=product.objects.get(pk=i),state=False,time=datetime.now()).save()
        return JsonResponse({"message":"ADDED"})
    