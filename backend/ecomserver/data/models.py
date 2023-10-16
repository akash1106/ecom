from django.db import models

# Create your models here.

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)


class appuser(models.Model):
    uid=models.AutoField(primary_key=True,unique=True)
    uname=models.CharField(max_length=100)
    phno=models.BigIntegerField()
    mailid=models.CharField(max_length=100)
    doorno=models.CharField(max_length=10)
    street=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    pas=models.CharField(max_length=512)
    coin=models.IntegerField() 

class vendor(models.Model):
    vid = models.AutoField(primary_key=True,unique=True)
    vname=models.CharField(max_length=100)
    phno=models.BigIntegerField()
    mailid=models.CharField(max_length=100)
    street=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    pas=models.CharField(max_length=512)

class categories(models.Model):
    caid=models.AutoField(primary_key=True,unique=True)
    sub1=models.CharField(max_length=100)
    sub2=models.CharField(max_length=100)

class product(models.Model):
    pid=models.AutoField(primary_key=True,unique=True)
    vid=models.ForeignKey(vendor,on_delete=models.CASCADE)
    caid=models.ForeignKey(categories,on_delete=models.CASCADE)
    name=models.CharField(max_length=100)
    price=models.IntegerField()
    pic=models.ImageField(upload_to=upload_to, blank=True, null=True)  
    qty=models.IntegerField()

class spec(models.Model):
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    key=models.CharField(max_length=100)
    value=models.CharField(max_length=100)

class rating(models.Model):
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    rating=models.IntegerField()
    review=models.CharField(max_length=100)

class notification(models.Model):
    nid=models.AutoField(primary_key=True,unique=True)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE,blank=True)
    vid=models.ForeignKey(vendor,on_delete=models.CASCADE,blank=True)
    typ=models.IntegerField()
    text=models.CharField(max_length=100)
    state=models.BooleanField()

class cart(models.Model):
    cid=models.AutoField(primary_key=True, unique=True)
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    state=models.BooleanField()
    time=models.DateTimeField()

class wishlist(models.Model):
    wid=models.AutoField(primary_key=True, unique=True)
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    time=models.DateTimeField()

class order(models.Model):
    oid=models.AutoField(primary_key=True, unique=True)
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    state=models.BooleanField()
    time=models.DateTimeField()

class viewlist(models.Model):
    vid=models.AutoField(primary_key=True,unique=True)
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    time=models.DateTimeField()

class alert(models.Model):
    aid = models.AutoField(primary_key=True,unique=True)
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    pid=models.ForeignKey(product,on_delete=models.CASCADE)
    price=models.IntegerField()

class staff(models.Model):
    sid=models.AutoField(primary_key=True,unique=True)
    name=models.CharField(max_length=100)
    phno=models.BigIntegerField()
    mailid=models.CharField(max_length=100)
    street=models.CharField(max_length=100)
    city=models.CharField(max_length=100)
    state=models.CharField(max_length=100)
    pas=models.CharField(max_length=512)

class chat(models.Model):
    uid=models.ForeignKey(appuser,on_delete=models.CASCADE)
    sid=models.ForeignKey(staff,on_delete=models.CASCADE)
    time=models.DateTimeField()
    text=models.CharField(max_length=100)