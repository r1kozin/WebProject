from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Category


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)


class CategorySerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_by = UserSerializer(read_only=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'created_by',)
        # fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.FloatField()
    count = serializers.IntegerField()
    category = CategorySerializer2()
