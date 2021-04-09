from django.contrib import admin

# Register your models here.
from models import Product

admin.site.Register(Product)