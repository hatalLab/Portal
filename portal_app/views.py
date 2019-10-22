from django.shortcuts import render, redirect
from django import http
from . import models, forms, urls

# Create your views here.

def homepage(request):
    projects = models.Project.objects.all()
    return render(request, 'portal/homepage.jin', context={'projects':projects})

def sign_in(request):
    if request.method == 'POST':
        form = forms.SignIn(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('military_id')
            pwd             = form.cleaned_data.get('pwd')

            return http.HttpResponse("Thanks")
    else:
        form = forms.SignIn()
        return render(request, 'portal/new_user.jin', context={'form': form})

def sign_up(request):
    if request.method == 'POST':
        form = forms.NewUser(request.POST)
        if form.is_valid():
            user = models.User()
            user.id = form.cleaned_data.get("id")
            user.mail = form.cleaned_data.get("mail")
            user.name  = form.cleaned_data.get("name")
            rank               = models.Rank.objects.get(id=form.cleaned_data.get("rank"))
            if not rank:
                return http.HttpResponse("Corrupted request")
            user.rank   = rank
            return redirect('portal:home')
            return http.HttpResponse("Thanks")
    else:
        form = forms.NewUser()
        return render(request, 'portal/new_user.jin', context={'form': form})

def project_details(request, project_id):
    project = models.Project.objects.get(id=project_id)

    return render(request, 'portal/project_details.jin', context={'project':project})

def add_project(request):
    if request.method == 'POST':
        form = forms.NewProject(request.POST, request.FILES)
        if form.is_valid():
            # Create project
            project                             = models.Project()
            project.name                = form.cleaned_data.get('name')
            project.description   = form.cleaned_data.get('description')
            project.creator_id      = 1
            project.save()

            # Add tags
            tags = form.cleaned_data.get('tags')
            categories  = [models.Category.objects.get_or_create(name=models.Category.de_htmlize_name(tname)) for tname in tags]
            project.categories.add(*[c[0] for c in categories])

            # Add picture
            picture = request.FILES['img']
            project.img_path = picture

            project.save()

            return http.HttpResponse("Thanks")
    else:
        form = forms.NewProject()
        return render(request, 'portal/new_project.jin', context={'form': form})
