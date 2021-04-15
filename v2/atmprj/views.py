from django.shortcuts import render
from . import models
# Create your views here.

def index(request):
	pass
	return render(request,'index_demo.html')

def login(request):
	if request.method=="POST":
		user_name= request.POST.get('the_id')
		pass_word =request.POST.get('the_pwd')
		try:
			user = models.Accounts.objects.get(name = user_name)
			if user.name == user_name and user.pwd==pass_word:
				return render(request,'login_demo.html',{'msg':'ok'})
			# todo redirect to account page????

			else:
				return render(request,'login_demo.html',{'msg':'wrong'})
		except:
			return render(request,'login_demo.html',{'msg':'catch part,no user'})

	return render(request,'login_demo.html')

def register(request):
	msg =""
	if(request.method=="POST"):
		new_username= request.POST.get('the_id')
		new_password =request.POST.get('the_pwd')
		try:
			# user = models.Accounts.objects.get(name = new_username)
			# if user:
			# 	# todo!! need huge modify from BOA tell us about yourself page.
			# 	return render(request,'register_demo.html',{'msg':'name taken'})
			# 	# todo needs change login name with digit id??
			# else:
			new_user = models.Accounts()
			new_user.name=new_username
			new_user.pwd=new_password
			new_user.save()
			return render(request,'register_demo.html',{'msg':'GOOD! more!'})

		except:
			return render(request,'register_demo.html',{'msg':'catch part'})

	return render(request,'register_demo.html',{'msg':msg})

def transfer(request):
	# todo transfer page from Chase bank just pure js logic with arthorization
	# meaningless for download page as frame
	# todo take the css and just build one
	pass