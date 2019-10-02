# Generated by Django 2.2.5 on 2019-10-02 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False, verbose_name='Mispar Ishi')),
                ('name', models.CharField(max_length=128)),
                ('rank', models.CharField(max_length=64)),
                ('bio', models.TextField()),
                ('mail', models.EmailField(max_length=256)),
                ('pwd_hash', models.CharField(max_length=512)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('description', models.TextField(max_length=512)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='projects', to='portal_app.User')),
            ],
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=256)),
                ('projects', models.ManyToManyField(related_name='categories', to='portal_app.Project')),
            ],
        ),
    ]
