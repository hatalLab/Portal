pip install -r requirements.txt
python manage.py makemigrations portal_app
python manage.py migrate
python manage.py populate