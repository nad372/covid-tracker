from django.db import models

# Create your models here.

class Person(models.Model):
    personID = models.IntegerField()
    firstName = models.CharField(max_length=250)
    lastName = models.CharField(max_length=250)
    employerID = models.IntegerField(max_length=250)
    nidaID = models.CharField(max_length=250)
    passportNumber = models.CharField(max_length=250) 

class Test(models.Model):
    personID = models.ForeignKey(Person, on_delete= models.CASCADE)
    testingID = models.IntegerField()
    superceededDate = models.DateField()
    negativeResult = models.IntegerField()
    activeFlag = models.IntegerField()
    createdDtime = models.DateField()
    certificateID = models.IntegerField()

class Certificate(models.Model):
    testingID = models.ForeignKey(Test, on_delete=models.CASCADE)
    certificate = models.CharField(max_length=250)
class Employer(models.Model):
    employerName = models.CharField(max_length=300)
    employerEmail = models.CharField(max_length=300)

class Booking(models.Model):
    # id = models.IntegerField()
    recordDate = models.DateField()
    unitID= models.IntegerField()
    client = models.CharField(max_length=300)
    clientEmail = models.CharField(max_length=200)
    unit = models.CharField(max_length=300)
    event = models.CharField(max_length=300)
    code = models.CharField(max_length=300)
    startDate = models.DateField()
    firstName = models.CharField(max_length=300)
    lastName = models.CharField(max_length=300)
    passportNumber = models.CharField(max_length=250) 

    



