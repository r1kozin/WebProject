# Generated by Django 2.2.1 on 2019-05-14 05:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_category_created_by'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='category',
            options={'ordering': ['name'], 'verbose_name': 'Category', 'verbose_name_plural': 'Categories'},
        ),
    ]