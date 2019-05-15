from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Category, Product


class CategorySerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    

    class Meta:
        model = Category
        fields = ('id', 'name')
        # fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    price = serializers.DecimalField(max_digits=10, decimal_places=2)
    category = CategorySerializer2()
    image = serializers.ImageField(required=False)
    stock = serializers.IntegerField()
    available = serializers.BooleanField()
    created = serializers.DateTimeField()
    updated = serializers.DateTimeField()

    class Meta:
        model = Product
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email',)

