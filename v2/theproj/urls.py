"""theproj URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from atmprj import views
from django.contrib import admin
from django.urls import path
from django.urls import re_path

urlpatterns = [
	path('admin/', admin.site.urls),
	path('',  views.index),
	re_path('index/',views.index),
	re_path('register/',views.register),
	re_path('log_in/',views.log_in),
  re_path('transfer/',views.transfer),
	re_path('deposit/',views.deposit),
	re_path('withdraw/',views.withdraw),
	re_path('log_out/',views.log_out),
	re_path('statement/',views.statement),
	re_path('delete_acc/',views.closeAccount),
	re_path('404/',views.index),

]
