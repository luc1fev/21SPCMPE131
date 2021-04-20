from django.contrib import admin

# Register your models here.

from . import models


# acc = models.Accounts
class adminpg(admin.ModelAdmin):
	readonly_fields = ('identi',)

# admin.site.register(adminpg,models.Accounts)
admin.site.register(models.Accounts,adminpg)
# admin.site.register(adminpg,acc)
