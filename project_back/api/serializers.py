from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Category,Product,Orders


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

class OrderSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    email =serializers.EmailField()
    address = serializers.CharField(max_length=250)
    postal_code = serializers.CharField(max_length=20)
    city = serializers.CharField(max_length=100)
    created = serializers.DateTimeField()
    updated = serializers.DateTimeField()
    paid = serializers.BooleanField(default=False)

    class Meta:
        model = Orders
        fields = '__all__'
