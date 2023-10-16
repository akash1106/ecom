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
        