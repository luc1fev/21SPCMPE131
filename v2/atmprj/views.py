from django.shortcuts import render
from django.shortcuts import redirect
from . import models
from django.core import serializers
from django.contrib.auth import authenticate,login,logout
from . import DecimalEncode

# Create your views here.

def index(request):
	if request.session.get('is_login') == True:
		name = request.session.get('user_name')
		amount = request.session.get('user_amount')
	return render(request,'index.html')

def login(request):
	if request.session.get('is_login',True):
		return redirect('/statement/')

	if request.method=="POST":
		user_id= request.POST.get('userName')
		pass_word =request.POST.get('passWord')
		try:
			user = models.Accounts.objects.get(identi = user_id)
			if str(user.identi) == user_id and user.pwd==pass_word:
				return render(request,'lo.html',{'msg':'ok'})
			# todo redirect to account page????
			else:
				return render(request,'login.html',{'msg':'wrong'})
		except:
			return render(request,'login.html',{'msg':'no user'})
	return render(request, 'login.html')

def register(request):
	# bug todo every refresh will auto add a person

	msg =""
	if request.method == "POST":
		new_username= request.POST.get('registerUsername')
		new_password = request.POST.get('registerPasswords')
		try:
			new_user = models.Accounts()
			new_user.name=new_username
			new_user.pwd=new_password
			new_user.save()
			new_id = new_user.identi
			return render(request,'login.html',{'msg':'Login with your new id:%d'%(new_id)})

		except:
			return render(request,'register.html',{'msg':'catch part'})

	return render(request,'register.html',{'msg':msg})

	pass


def transfer(request):


	# user_from = models.Accounts.objects.get(identi = user.)
	# user_to = ''
	# try:
	# 	userfrom = models.Accounts.objects.get(identi = user_from)
	# 	userto = models.Accounts.objects.get(identi = user_to)
	# 	if userfrom and userto
	# except:

	# todo transfer page from Chase bank just pure js logic with arthorization
	# meaningless for download page as frame
	# todo take the css and just build one
	msg = ""
	if(request.method=="POST"):
		new_amount = request.POST.get('amount')
		amount = models.Accounts()
		try:
			if amount >= new_amount:
				return render(request, 'transfer_demo.html', {'msg': 'Transfer Success!'})
		except:
			return render(request, 'transfer_demo.html', {'msg': 'Unvalid amount, edit the amount!'})

	return render(request,'transfer_demo.html')


def log_out(request):
	request.session.flush()
	logout(request)
	return redirect('/login/')

def statement(request):
	if needsLogin(request):
		return render(request,'login.html',{"msg":"Login First!"})
	else:
		return render(request,'statement.html')

def needsLogin(request):
	if request.session.get('is_login',None):
		return False
	elif request.session.get('is_login',False):
		return False
	else:
		return True
