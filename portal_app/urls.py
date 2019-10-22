from django.urls import path


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
    path("new-project", views.add_project, name="add_project")
])
