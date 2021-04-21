from django.shortcuts import render
from . import models
# Create your views here.


def index(request):
	return render(request,'index.html')

def login(request):
	if request.method=="POST":
		user_id= request.POST.get('the_id')
		pass_word =request.POST.get('the_pwd')
		try:
			user = models.Accounts.objects.get(identi = user_id)
			if str(user.identi) == user_id and user.pwd==pass_word:
				return render(request,'login.html',{'msg':'ok'})
			# todo redirect to account page????
			else:
				return render(request,'login.html',{'msg':'wrong'})
		except:
			return render(request,'login.html',{'msg':'catch part,no user'})
	return render(request, 'login.html')

def register(request):
	# bug todo every refresh will auto add a person

	msg =""
	if request.method == "POST":
		new_username= request.POST.get('the_id')
		new_password = request.POST.get('the_pwd')
		new_password2 = request.POST.get('the_pwd2')
		try:
			if new_password2 and new_password and new_username:
				if new_password2 == new_password:
					new_user = models.Accounts()
					new_user.name=new_username
					new_user.pwd=new_password
					new_user.save()
					new_id = new_user.identi
					return render(request,'register_demo.html',{'msg':'GOOD! more! login with your new id:%d'%(new_id)})
				else:
					return render(request,'register_demo.html',{'msg':'passcode not match'})
			else:
				return render(request,'register_demo.html',{'msg':'fill all boxes!'})
		except:
			return render(request,'register_demo.html',{'msg':'catch part'})

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