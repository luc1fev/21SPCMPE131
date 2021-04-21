from django.shortcuts import render
from django.shortcuts import redirect
from . import models
from django.contrib.auth import authenticate,login,logout
from . import DecimalEncode

# Create your views here.

def index(request):
	if request.session.get('is_login') == True:
		name = request.session.get('user_name')
		amount = request.session.get('user_amount')
	return render(request,'index.html')

def login(request):
	if request.session.get('is_login',None):
		return redirect('/statement/')

	if request.method=="POST":
		user_id= request.POST.get('userName')
		pass_word =request.POST.get('passWord')
		try:
			user = models.Accounts.objects.get(identi = user_id)
			if str(user.identi) == user_id and user.pwd==pass_word:
				welcome = 'Hello, ' + str(user.name)
				request.session['is_login'] = True
				request.session['user_id']=  user.identi
				request.session['user_name'] = user.name
				num = user.amount
				request.session['user_amount'] = num
				# django_user = authenticate(request, identi  =user_id,pwd =pass_word)
				# if django_user is not None:
				# 	login(request,django_user)
				return redirect('/statement/')
				# return render(request,'login.html',{'msg':welcome})
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
			return render(request,'login.html',{'msg':'GOOD! more! login with your new id:%d'%(new_id)})

		except:
			return render(request,'register.html',{'msg':'catch part'})

	return render(request,'register.html',{'msg':msg})

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
	pass

def logout(request):
	# if not request.session.get('is_login',None):
	# 	return redirect('/login/')
	request.session.flush()
	# logout(request)
	return redirect('/login/')

def statement(request):
	return render(request,'statement.html')