from django.urls import path
from django.contrib.auth import views as auth_views

app_name = 'portal'
urlpatterns = []

def route(url):
    def dec(f):
        urlpatterns.append(
            path(url, f, name=f.__name__)
        )
        return f
    return dec

from . import views
urlpatterns.extend([
    path('',  views.homepage,  name="home"),
    path("project/<int:project_id>", views.project_details, name="project_details"),
    path("new-project", views.add_project, name="add_project"),
    path("sign-up", views.sign_up,  name="sign_up"),
    path("login", auth_views.LoginView.as_view(template_name='registration/login.jin'), name="login")
])
