from django.shortcuts import render
from django import http
from . import models, forms, urls

# Create your views here.

def homepage(request):
    projects = models.Project.objects.all()
    return render(request, 'portal/homepage.jin', context={'projects':projects})

@urls.route('sign-up')
def sign_up(request):
    if request.method == 'POST':
        form = forms.NewUser(request.POST)
        if form.is_valid():
            user = models.User()
            user.id = form.cleaned_data.get("id")
            user.name  = form.cleaned_data.get("name")
            user.rank = form.cleaned_data.get("rank")
            user.mail = form.cleaned_data.get("mail")
            print("Created user:", user)
            return http.HttpResponse("Thanks")
    else:
        form = forms.NewUser()
        return render(request, 'portal/new_user.jin', context={'form': form})

def project_details(request, project_id):
    project = models.Project.objects.get(id=project_id)

    return render(request, 'portal/project_details.jin', context={'project':project})


