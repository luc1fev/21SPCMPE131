from django.db import models

# Create your models here.
class Accounts(models.Model):
	identi = models.AutoField(primary_key = True)
	name=models.CharField(max_length = 30,null = False)
	amount = models.DecimalField(default = 0,max_digits = 10,decimal_places = 2)
	pwd = models.CharField(max_length = 64)
	upload = models.FileField(upload_to = 'uploads/',blank = True,null = True)

	def __str__(self):
		return self.name