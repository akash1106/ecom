from django.views.decorators.csrf import csrf_exempt
from .models import *
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from .serializers import *


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